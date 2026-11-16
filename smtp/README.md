# SMTP App

Node.js app for sending email over SMTP (defaults tuned for Hostinger).

## Setup
```
cd /smtp
npm install
cp .env.example .env
# edit .env with your credentials
```

## Verify connection
```
node index.js
```

## Send an email
```
node send.js recipient@example.com "Subject" "Body text"
```
Service update
