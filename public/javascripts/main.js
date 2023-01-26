const getCurrent = async () => {
    const response = await fetch('/current');
    return await response.json();
};

const getLogs = async () => {
    const response = await fetch('/logs');
    return await response.json();
};

const setView = async () => {
    const current = await getCurrent();
    /**
     * @type {HTMLHeadingElement}
     */
    const currentEle = document.querySelector('.current');
    currentEle.innerText = current;
    /**
     * @type {HTMLDivElement}
     */
    const logsEle = document.querySelector('.logs');
    logsEle.replaceChildren();
    /**
     * @typedef {Object} Log
     * @property {string} name
     * @property {string} ts
     */
    /**
     * @type {Array<Log>}
     */
    const logs = await getLogs();
    for (const log of logs) {
        const logRow = document.createElement('div');
        logRow.classList.add('log-row');
        const logName = document.createElement('div');
        logName.classList.add('log-name');
        logName.innerText = log.name;
        logRow.appendChild(logName);
        const logTime = document.createElement('div');
        logTime.classList.add('log-ts');
        logTime.innerText = new Date(log.ts).toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short', month: 'short', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' });
        logRow.appendChild(logTime);
        logsEle.appendChild(logRow);
    }
}

const thro = async () => {
    await fetch('/throw', { method: 'POST' });
    setView();
};

const main = () => {
    setView();
    /**
     * @type {HTMLButtonElement}
     */
    const throwElem = document.querySelector('.throw');
    throwElem.addEventListener('click', thro);
}

main();
