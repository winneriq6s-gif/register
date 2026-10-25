import express from 'express';
const app = express();
app.get('/health', (_, res) => res.json({ ok: true }));
app.listen(3000, () => console.log('billing-service running'));

// pr-268 touch

// unique change for PR 259
