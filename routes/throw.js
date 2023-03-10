import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import order from '../conf/order.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();

router.post('/', async (_req, res) => {
    const currentContent = await readFile(join(__dirname, '../conf/current.json'), { encoding: 'utf8' });
    const currentIdx = JSON.parse(currentContent);
    await writeFile(join(__dirname, '../conf/current.json'), JSON.stringify((currentIdx + 1) % order.length));
    const logContent = await readFile(join(__dirname, '../conf/logs.json'), { encoding: 'utf8' });
    /**
     * @type {Array}
     */
    const logs = JSON.parse(logContent);
    logs.unshift({ name: order[currentIdx], ts: new Date().toISOString() });
    logs.splice(order.length);
    await writeFile(join(__dirname, '../conf/logs.json'), JSON.stringify(logs, null, 2));
    res.sendStatus(200);
});

export default router;
