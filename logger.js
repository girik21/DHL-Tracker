import winston, { transports, format } from "winston";
import { DateTime } from "luxon";

const logFormat = format.printf(({ level, message }) => {
    const timeStamp = DateTime.now().toUTC()
    return `timeStamp: ${timeStamp} level : ${level} message: ${message}`
})

export const getLoggerInstance = () => {
    const logger = winston.createLogger({
        level: 'info',
        format: format.json(),
        transports: [
            new transports.Console({ format: format.combine(format.colorize(), logFormat) }),
        ]
    })

    return logger

}