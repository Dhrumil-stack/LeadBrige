# LeadBridge React Frontend

This project converts the Stitch HTML screen exports into a Vite + React frontend.

## Run

```bash
npm install
npm run dev
```

Default API base URL:

```text
http://127.0.0.1:8000/api
```

Copy `.env.example` to `.env` to override it.

## Screens converted

- Login
- Forgot Password
- Reset Password
- Dashboard
- Dashboard with notification dropdown
- Leads
- Lead Details
- Follow-ups
- Notifications
- Activity Logs
- Profile Settings
- Security Settings
- Notification Preferences
- Logout Confirmation

## API layer

`src/api/` contains the initial Axios service layer matching the LeadBridge Django REST Framework endpoints.

The generated UI is intentionally kept close to the Stitch design. The next development step is to refactor repeated UI into shared React components and then connect each page to the real Django APIs.
