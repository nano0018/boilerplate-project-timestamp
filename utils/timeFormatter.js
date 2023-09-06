const timeFormatter = (date) => {
	console.log(typeof date);
	if (/\d{5,}/.test(date)) {
		const dateInt = parseInt(date);
		return { unix: dateInt, utc: new Date(dateInt).toUTCString() };
	}
	const newDate = new Date(date);
	if (newDate.toString() === "Invalid Date") {
		return { error: "Invalid Date" };
	}

	return {
		unix: newDate.getTime(),
		utc: newDate.toUTCString(),
	};
};

module.exports = timeFormatter;
