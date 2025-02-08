export const formatTime = (date: Date) => {
    const formattedTime = date.toLocaleTimeString(
        'en-US',
        { hour: '2-digit', minute: '2-digit', hour12: false }
    );

    return formattedTime;
};