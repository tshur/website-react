const OPERATOR_FN = {
  null: (total, current) => parseFloat(current),
  '+': (total, current) => total + parseFloat(current),
  '-': (total, current) => total - parseFloat(current),
  '*': (total, current) => total * parseFloat(current),
  '/': (total, current) => total / parseFloat(current),
};

const clear_all = () => {
  return {
    total: null,
    current: null,
    operator: null
  };
};

const clear = ({ current, ...rest }) => {
  current = '0';

  return { current, ...rest };
};

const negate = ({ total, current, operator }) => {
  if (current) {
    if (current[0] === '-')
      current = current.slice(1);
    else
      current = '-' + current;
  } else if (total && !operator) {
    current = '-' + total;
  } else {
    current = '-0';
  }

  return { total, current, operator };
};

const percent = ({ total, current, operator }) => {
  if (!current)
    current = operator ? '0' : total;
  current = String(parseFloat(current) / 100.0)

  return { total, current, operator };
};

const decimal = ({ current, ...rest }) => {
  if (!current) {
    current = '0.';
  } else if (!current.includes('.')) {
    current += '.';
  }

  return { current, ...rest };
};

const operation = ({ total, current, operator, symbol }) => {
  if (current) {
    total = OPERATOR_FN[operator](total, current);
    current = null;
  }
  operator = symbol;

  return { total, current, operator };
};

const equals = ({ total, current, operator }) => {
  if (current) {
    total = OPERATOR_FN[operator](total, current);
    current = null;
  }
  operator = null;

  return { total, current, operator };
};

const digit = ({ total, current, operator, symbol }) => {
  if (!current || current === '0')
    current = ''
  else if (current === '-0')
    current = '-';

  if (current.length < 9)
    current += symbol;

  return { total, current, operator };
};

const calculate = ({ ...state, symbol }) => {
  if (symbol === 'AC') {
    return clear_all();

  } else if (symbol === 'C') {
    return clear(state);

  } else if (symbol === '+/-') {
    return negate(state);

  } else if (symbol === '%') {
    return percent(state);

  } else if (symbol === '.') {
    return decimal(state);

  } else if (symbol in OPERATOR_FN) {
    return operation({ ...state, symbol });

  } else if (symbol === '=') {
    return equals(state);

  } else {
    return digit({ ...state, symbol });
  }
};

export { calculate };