const storage = {};

const validateInput = (input, value) => {
  if (typeof input === 'function') {
    throw new Error('Input cannot be a function!');
    return;
  } else if (Array.isArray(input)) {
    throw new Error('Input cannot be an array!');
    return;
  } else if (typeof input !== 'object') {
    var validInput = {};
    validInput[input] = value;
    return validInput;
  } else {
    return input;
  }
};

const subscribeToValue = (input, callback) => {
  if (storage[input] && storage[input].callbacks) {
    storage[input].callbacks.push(callback);
  } else {
    throw new Error('Could not find that item in storage');
  }
};

const _updateStorage = (key, value) => {
  if (storage[key] === undefined) {
    storage[key] = {
      value: null,
      callbacks: [],
    };
  }

  storage[key].value = value;
  storage[key].callbacks.forEach((callback) => {
    callback();
  });
};

const updateStorage = (input, value) => {
  input = validateInput(input, value);
  for (var key in input) {
    _updateStorage(key, value);
  }
};

const searchStorage = (input) => {
  return storage[input] ? storage[input].value : undefined;
};

const registerComponent = (component, keys) => {
  if (component.__proto__.name === '') {
    return (props, context, updater) => {
      var saved = component(props, context, updater);
      keys.forEach((key) => {
        subscribeToValue(key, () => {
          updater.enqueueForceUpdate(saved._owner._instance);
        });
      });
      return saved;
    };
  } else {
    return (props, context, updater) => {
      var saved = new component(props, context, updater);
      keys.forEach((key) => {
        subscribeToValue(key, () => {
          updater.enqueueForceUpdate(saved);
        });
      });
      return saved;
    };
  }
};

const formiliar = registerComponent;
formiliar.set = updateStorage;
formiliar.get = searchStorage;
formiliar.register = registerComponent;

export default formiliar;

























