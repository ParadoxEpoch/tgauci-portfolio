export function timeSince(date) {
	const now = new Date();
	date = new Date(date);
	const seconds = Math.floor((now - date) / 1000);
	const secondsPerMonth = 2592000;
	const secondsPerYear = 31536000;

	let years = Math.floor(seconds / secondsPerYear);
	let months = Math.floor(seconds / secondsPerMonth);
	if (years === 0 && months >= 9) {
		return `nearly a year`;
	} else if (years >= 1) {
		const leftover = seconds % secondsPerYear;
		const leftoverMonths = leftover / secondsPerMonth;
		if (leftoverMonths >= 9) return `nearly ${years + 1} years`;
		if (years === 1) return `over a year`;
		return `over ${years} years`;
	} else {
		const months = Math.floor(seconds / secondsPerMonth);
		return `over ${months} months`;
	}
}