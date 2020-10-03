module.exports = (message, logType) => {
    const d = new Date(Date.now()).toLocaleString();
    const fullMessage = `[${logType || 'LOG'}]  -  ${d}  -  ${message}`;
    console.log(fullMessage);
}