const storage = {};

const persistentStorage = JSON.parse(localStorage.mindful || '{}') || {};


const validateInput = (input, value) => {
  if (typeof input === 'function') {
    throw new Error('Input cannot be a function!');
  } else if (Array.isArray(input)) {
    throw new Error('Input cannot be an array!');
  } else if (typeof input !== 'object') {
    var validInput = {};
    validInput[input] = value;
    return validInput;
  } else {
    return input;
  }
};

const _render = (subscription) => {
  let updater = subscription.updater;
  let component = subscription.component;
  console.log(component);
  updater.enqueueForceUpdate(component._owner ? component._owner._instance : component);
};

const _upsert = (key, value) => {
  if (storage[key] === undefined) {
    storage[key] = {
      value: value,
      subscriptions: [],
    };
  } else {
    storage[key].value = value;
    storage[key].subscriptions.forEach((subscription) => {
      _render(subscription);
    });
  }
};


const setValueInStorage = (input, value) => {
  input = validateInput(input, value);
  for (var key in input) {
    _upsert(key, input[key]);
  }
};

const searchForValueInStorage = (input) => {
  if (storage[input] !== undefined) {
    return storage[input].value;
  }
};


const subscribeToValue = (key, component, updater) => {
  if (!storage[key]) {
    setValueInStorage(key, undefined);
  }

  let value = storage[key]; 
  let subscriptions = [];
  if (value) {
    subscriptions = value.subscriptions;
  }

  if (subscriptions) {
    for (var i = 0; i < subscriptions.length; i++) {
      if (subscriptions[i].component === component) {
        return;
      }
    }

    subscriptions.push({
      component: component,
      updater: updater
    });
  }
};


const updateValueInStorage = (input, callback) => {
  let oldValue = searchForValueInStorage(input);
  let newValue = callback(oldValue);
  setValueInStorage(input, newValue);
};


const toggleValueInStorage = function (input) {
  updateValueInStorage(function (value) {
    return !value;
  });
};


const persistValueInStorage = (input, value) => {
  input = validateInput(input, value);
  for (var key in input) {
    _upsert(key, input[key]);
    persistentStorage[key] = input[key];
  }
  localStorage.mindful = JSON.stringify(persistentStorage);
};


const clearValueFromStorage = (input) => {
  if (storage[input]) {
    setValueInStorage(input, undefined);
  }

  if (persistentStorage[input]) {
    delete persistentStorage[input];
    localStorage.mindful = JSON.stringify(persistentStorage);
  }
};


const mapGlobalStateToProps = (props, values) => {
  var newProps = {};
  for (var key in props) {
    newProps[key] = props[key];
  }

  values.forEach(function (value) {
    newProps[value] = searchForValueInStorage(value);
  });

  return newProps;
};


const initializeReactComponent = (component, props, context, updater) => {
  let initialized;
  if (!component.__proto__.name) {
    initialized = component(props, context, updater);
  } else {
    initialized = new component(props, context, updater);
  }
  return initialized;
};


const registerComponent = (component, ...keys) => {
  if (Array.isArray(keys[0])) {
    keys = keys[0];
  }

  return (props, context, updater) => {
    var initializedComponent = initializeReactComponent(component, props, context, updater);
    keys.forEach((key) => {
      subscribeToValue(key, initializedComponent, updater);
    });
    return initializedComponent;
  };
};


setValueInStorage(persistentStorage);


const mindful = registerComponent;
mindful.set = setValueInStorage;
mindful.get = searchForValueInStorage;
mindful.retain = persistValueInStorage;
mindful.update = updateValueInStorage;
mindful.forget = clearValueFromStorage;
mindful.toggle = toggleValueInStorage;
mindful.subscribe = registerComponent;

module.exports = mindful;


























