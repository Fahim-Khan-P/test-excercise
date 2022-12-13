const stringLength = (string) => {
  const length = string.length;
  if (length === 0 || length > 10) {
    return false;
  } else {
    return length;
  }
}

module.exports = stringLength;