// Import the moment library
import moment from 'moment';

/**
 * Formats a given date according to the specified format string.
 * @param {Date} date - The date to format.
 * @param {string} format - The format string (compatible with Moment.js).
 * @returns {string} - The formatted date.
 */
export const formatDate = (date, format) => {
    return moment(date).format(format);
};
