const formatTime = (minute: number, second: number) => {
    const minutes = minute < 10 ? `0${minute}` : minute;
    const seconds = second < 10 ? `0${second}` : second;

    return `${minutes}:${seconds}`;
}

export default formatTime;
