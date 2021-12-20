/** @format */

import winston, { format } from "winston";

const alignedWithColorsAndTime = format.combine(
	format.colorize(),
	format.timestamp(),
	format.json(),
	format.align()
);

export const logger = winston.createLogger({
	level: "info",
	format: alignedWithColorsAndTime,
	transports: [new winston.transports.File({ filename: "./log/info.log" })],
});
