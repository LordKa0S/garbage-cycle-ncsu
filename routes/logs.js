import express from 'express';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const router = express.Router();

/* GET */
router.get('/', async function (_req, res) {
    res.header('Content-Type', 'application/json');
    res.send(await readFile(join(__dirname, '../conf/logs.json'), { encoding: 'utf8' }));
});

export default router;
