import express from 'express';
import axios from 'axios';
import { GenerateDocumentWithAi } from '../utils/generateDocument.ai.mjs';

const router = express.Router();

router.post('/generate-doc', async (req, res) => {
    const { readme } = req.body;

    try {
        GenerateDocumentWithAi();

        res.json(generatedJSON);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'AI document generation failed' });
    }
});

export default router;
