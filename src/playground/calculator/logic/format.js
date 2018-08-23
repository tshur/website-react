const EXP_NOTATION_WIDTH = 4  // e+dd
const DEFAULT_WIDTH = 10;     // not including '.'

const format_value = (value, width) => {
  // format `value` to desired `width`
  // not including '.' or '-'

  if (!isFinite(value))
    return 'Error';

  width = width || DEFAULT_WIDTH;
  value = String(value);

  if (value.length <= width) {
    return value;

  } else if (value.includes('e')) {
    const [digits, exp] = value.split('e');
    const term = Number(digits).toFixed(
      width - EXP_NOTATION_WIDTH - 1);
    return term + 'e' + exp;

  } else if (!value.includes('.') ||
             value.indexOf('.') > width) {
    return Number(value).toExponential(
      width - EXP_NOTATION_WIDTH - 1);

  } else {
    return Number(value).toFixed(
      width - value.indexOf('.'));
  }
}

export { format_value };