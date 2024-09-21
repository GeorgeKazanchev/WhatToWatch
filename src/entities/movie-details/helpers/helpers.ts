export const getRuntimeString = (runtimeInMinutes: number): string => {
    const MINUTES_IN_HOUR = 60;
    const runtime = Math.round(runtimeInMinutes);

    if (runtime === 0) {
        return '0';
    } else if (runtime > 0 && runtime < MINUTES_IN_HOUR) {
        return `${runtime}m`;
    } else if (runtime >= MINUTES_IN_HOUR) {
        const hours = Math.floor(runtimeInMinutes / MINUTES_IN_HOUR);
        const minutes = runtime - hours * MINUTES_IN_HOUR;
        return `${hours}h ${minutes}m`;
    } else {
        throw new RangeError(`Runtime (${runtime}) of the film is incorrect`);
    }
};
