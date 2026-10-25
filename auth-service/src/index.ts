import express from 'express';
const app = express();
app.get('/health', (_, res) => res.json({ ok: true }));
app.listen(3000, () => console.log('auth-service running'));

// pr-179 touch

// unique change for PR 171
