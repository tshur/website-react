const OPERATOR_FN = {
  null: (total, current) => parseFloat(current),
  '+': (total, current) => total + parseFloat(current),
  '-': (total, current) => total - parseFloat(current),
  '*': (total, current) => total * parseFloat(current),
  '/': (total, current) => total / parseFloat(current),
};

const handle_clear_all = () => {
  return {
    total: null,
    current: null,
    operator: null
  };
};

const handle_clear = ({ total, current, operator }) => {
  current = '0';
  return { total, current, operator };
};

const handle_negate = ({ total, current, operator }) => {
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

const handle_percent = ({ total, current, operator }) => {
  if (!current)
    current = operator ? '0' : total;
  current = String(parseFloat(current) / 100.0)

  return { total, current, operator };
};

const handle_decimal = ({ total, current, operator }) => {
  if (!current) {
    current = '0.';
  } else if (!current.includes('.')) {
    current += '.';
  }

  return { total, current, operator };
};

const handle_operation = ({ total, current, operator, symbol }) => {
  if (current) {
    total = OPERATOR_FN[operator](total, current);
    current = null;
  }
  operator = symbol;

  return { total, current, operator };
};

const handle_equals = ({ total, current, operator }) => {
  if (current) {
    total = OPERATOR_FN[operator](total, current);
    current = null;
  }
  operator = null;

  return { total, current, operator };
};

const handle_digit = ({ total, current, operator, symbol }) => {
  if (!current || current === '0')
    current = ''
  else if (current === '-0')
    current = '-';

  if (current.length < 9)
    current += symbol;

  return { total, current, operator };
};

const HANDLE_SYMBOL = {
  'AC':  handle_clear_all,
  'C':   handle_clear,
  '+/-': handle_negate,
  '%':   handle_percent,
  '/':   handle_operation,
  '*':   handle_operation,
  '-':   handle_operation,
  '+':   handle_operation,
  '=':   handle_equals,
  '.':   handle_decimal,
  '0':   handle_digit,
  '1':   handle_digit,
  '2':   handle_digit,
  '3':   handle_digit,
  '4':   handle_digit,
  '5':   handle_digit,
  '6':   handle_digit,
  '7':   handle_digit,
  '8':   handle_digit,
  '9':   handle_digit,
}

// state: { total, current, operator, symbol }
const calculate = state => HANDLE_SYMBOL[state.symbol](state);

export { calculate };