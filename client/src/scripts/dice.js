const operators = {
  ascending: function (input) {
    return input.sort(function (a, b) { 
      return a - b; 
    });
  },
  descending: function (input) {
    return input.sort(function (a, b) { 
      return b - a; 
    });
  },
  sum: function (input) {
    return input.reduce(function (sum, current) { 
      return sum + current; 
    });
  },
  max: function (input) {
    return Math.max.apply(null, input);
  },
  maximum: function (input) {
    return operators.max(input);
  },
  min: function (input) {
    return Math.min.apply(null, input);
  },
  minimum: function (input) {
    return operators.min(input);
  },
  range: function (input) {
    return Math.abs(Math.max.apply(null, results) - Math.min.apply(null, results));
  },
  height: function (input) {
    return operators.max(input);
  },
  width: function (input) {
    var results = {};
    input.forEach(function (element) {
      results[element] = results[element] + 1 || 1;
    });

    var max = 0;
    for (var key in results) {
      if (results[key] > max) {
        max = results[key];
      }
    }

    return max;
  }
};

const roll = function (number) {
  return Math.ceil(Math.random() * number);
};

const d = function (type, quantity, operator) {
  quantity = quantity || 1;

  var results = [];
  for (var i = 0; i < quantity; i++) {
    results.push(roll(type));
  }

  if (operators[operator]) {
    results = operators[operator](results);
  }

  return results;
};

window.d = d;

export default d;
