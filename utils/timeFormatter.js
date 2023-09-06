const timeFormatter = (date) => {
  const newDate = new Date(date);
  if (newDate.toString() === 'Invalid Date') {
    newDate.setTime(parseInt(date));
  }
  return {
    'unix': newDate.getTime(),
    'utc': newDate.toUTCString(),
  }
}

module.exports = timeFormatter;
