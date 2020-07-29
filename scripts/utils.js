function coloredText(color, text) {
	if (global.noColors) return text
	color = {
		white: 30,
		red: 31,
		green: 32,
		yellow: 33,
		blue: 34,
		cyan: 35,
		magenta: 36,
		black: 37
	}[color]
	return `\x1b[${color}m${text}\x1b[0m`
}

function formatTime(date) {
	return [date.getHours(), date.getMinutes(), date.getSeconds()]
		.map(int => int.toString().padStart(2,0))
		.join(':')
}

function logSuccess(msg) {
	if (Array.isArray(msg)) msg = msg.join('\n           ')
	console.log(coloredText('green', `[${formatTime(new Date())}] ${msg}`))
}

function logError(msg) {
	if (Array.isArray(msg)) msg = msg.join('\n           ')
	console.error(coloredText('red', `[${formatTime(new Date())}] ${msg}`))
}

module.exports = {
	coloredText: coloredText,
	formatTime: formatTime,
	logSuccess: logSuccess,
	logError: logError
}

