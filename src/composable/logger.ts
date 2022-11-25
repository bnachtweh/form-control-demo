// Constants
const APP_NAME = 'demo';

/* eslint-disable no-console */
export function useLogger(appName = `${APP_NAME}`) {
	const FgRed = '\x1b[31m';
	const FgYellow = '\x1b[33m';
	const FgWhite = '\x1b[37m';

	const prefix = `[${appName} notice]:`;

	function format(args: unknown[]): string {
		return args.map((arg) => (typeof arg == 'string' ? arg : JSON.stringify(arg))).join();
	}

	function error(...args: unknown[]) {
		console.error(`${FgRed}${prefix} ${format(args)}`);
	}

	function info(...args: unknown[]) {
		console.info(`${FgWhite}${prefix} ${format(args)}`);
	}

	function warn(...args: unknown[]): void {
		console.warn(`${FgYellow}${prefix} ${format(args)}`);
	}

	return {
		error,
		info,
		warn,
	};
}
