
export function getDate(date, lang = 'en') {
    return new Date(date).toLocaleDateString(lang, { weekday: "long", year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}


/**
 * Returns a time-ago string for a given date and language using Intl.RelativeTimeFormat.
 * @param {string | Date} dateTime - The date or time to calculate the time ago from.
 * @param {string} lang - The language code (en, tr, de).
 * @returns {string} - The time-ago string.
 */
export function getTimeAgo(dateTime, lang = 'en') {
    const now = new Date();
    const then = new Date(dateTime);
    const diffInSeconds = Math.floor((now - then) / 1000);

    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });

    if (diffInSeconds < 60) {
        // Less than a minute ago
        return rtf.format(-diffInSeconds, "second");
    } else if (diffInSeconds < 3600) {
        // Less than an hour ago
        const minutes = Math.floor(diffInSeconds / 60);
        return rtf.format(-minutes, "minute");
    } else if (diffInSeconds < 86400) {
        // Less than a day ago
        const hours = Math.floor(diffInSeconds / 3600);
        return rtf.format(-hours, "hour");
    } else if (diffInSeconds < 2592000) {
        // Less than a month ago
        const days = Math.floor(diffInSeconds / 86400);
        return rtf.format(-days, "day");
    } else if (diffInSeconds < 31536000) {
        // Less than a year ago
        const months = Math.floor(diffInSeconds / 2592000);
        return rtf.format(-months, "month");
    } else {
        // A year or more ago
        const years = Math.floor(diffInSeconds / 31536000);
        return rtf.format(-years, "year");
    }
}


export const getBlogDateString = (blog, lang = "en") => {
    const date = blog.created_at || blog.published_at || blog.date;
    return date ? getDate(date, lang) + ' (' + getTimeAgo(date, lang) + ')' : '';
}

export function formatDuration(milliseconds, lang = "en") {
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Return the most relevant time unit based on the input
    // drop the last word before return
    if (days > 0) {
        return '~' + rtf.format(-days, "day").split(" ").slice(0, -1).join(" ");
    } else if (hours > 0) {
        return '~' + rtf.format(-hours, "hour").split(" ").slice(0, -1).join(" ");
    } else if (minutes > 0) {
        return '~' + rtf.format(-minutes, "minute").split(" ").slice(0, -1).join(" ");
    } else {
        return rtf.format(-seconds, "second").split(" ").slice(0, -1).join(" ");
    }
}

export function formatReadingTime(milliseconds, lang = "en") {
    // Create a number formatter for the specified language
    const numberFormatter = new Intl.NumberFormat(lang);

    // Create a unit name formatter for the specified language
    const unitFormatter = new Intl.DisplayNames(lang, { type: "dateTimeField" });

    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Determine the most relevant time unit and format it
    if (days > 0) {
        return `~${numberFormatter.format(days)} ${unitFormatter.of("day")}`;
    } else if (hours > 0) {
        return `~${numberFormatter.format(hours)} ${unitFormatter.of("hour")}`;
    } else if (minutes > 0) {
        return `~${numberFormatter.format(minutes)} ${unitFormatter.of("minute")}`;
    } else {
        return `${numberFormatter.format(seconds)} ${unitFormatter.of("second")}`;
    }
}
