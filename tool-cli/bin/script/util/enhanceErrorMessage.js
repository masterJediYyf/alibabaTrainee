const program = require('commander')
const chalk = require('chalk')

module.exports = (methodName, log) => {
	program.Command.prototype[methodName] = function (...args) {
		/* eslint-disable no-underscore-dangle */
		if (methodName === 'unknownOption' && this._allowUnknownOption) {
			return
		}
		this.outputHelp()
		console.log()
		console.log(`${chalk.red(log(...args))}`)
		console.log()
		process.exit(1)
	}
}
