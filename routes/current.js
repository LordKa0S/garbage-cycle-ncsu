import express from 'express';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));
/* GET */
router.get('/', async function (_req, res) {
    const currentContent = await readFile(join(__dirname, '../conf/current.json'), { encoding: 'utf8' });
    const currentIdx = JSON.parse(currentContent);
    const orderContent = await readFile(join(__dirname, '../conf/order.json'), { encoding: 'utf8' });
    /**
     * @type {Array<string>}
     */
    const order = JSON.parse(orderContent);
    res.json(order[currentIdx]);
});

export default router;
