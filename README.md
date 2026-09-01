# LeadBridge 🚀

A modern, full-stack Lead Management CRM application built with Django REST Framework and React.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

LeadBridge is a comprehensive lead management and CRM solution designed to help sales teams track, organize, and follow up with leads efficiently. It provides real-time notifications, activity logging, and detailed lead tracking capabilities.

**Live Demo:** [leadbrige-production-36b2.up.railway.app](https://leadbrige-production-36b2.up.railway.app)

---

## ✨ Features

- **Lead Management**: Create, track, and manage leads with detailed information
- **Follow-ups**: Schedule and manage follow-up actions for each lead
- **Notes & Activity Logs**: Add detailed notes and track all activities
- **Notifications**: Real-time notifications for important events
- **User Authentication**: Secure JWT-based authentication with token refresh
- **CORS Support**: Ready for multi-domain frontend deployment
- **Database**: PostgreSQL with Supabase integration
- **Static Files**: WhiteNoise for production static file serving
- **Celery Integration**: Background task processing with Celery Beat

---

## 🛠 Tech Stack

### Backend
- **Framework**: Django 5.2
- **API**: Django REST Framework (DRF)
- **Authentication**: djangorestframework-simplejwt (JWT)
- **Database**: PostgreSQL (via Supabase)
- **Task Queue**: Celery with Redis
- **Static Files**: WhiteNoise
- **Documentation**: drf-spectacular (OpenAPI)
- **CORS**: django-cors-headers

### Frontend
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Build Tool**: Vite

### DevOps
- **Hosting**: Railway
- **Database**: Supabase (PostgreSQL)
- **Frontend Hosting**: Vercel
- **Containerization**: Docker

---

## 🚀 Getting Started

### Prerequisites

- Python 3.11+
- Node.js 16+
- PostgreSQL 12+ (or Supabase account)
- Redis (optional, for Celery)
- Git

### Installation

#### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhrumil-stack/LeadBrige.git
   cd LeadBrige
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your configuration (see [Configuration](#configuration))

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run development server**
   ```bash
   python manage.py runserver
   ```
   Backend will be available at `http://localhost:8000`

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd Frounted/F
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API URL**
   Update your API endpoint to point to the backend:
   ```javascript
   // In your API configuration file
   const API_URL = 'http://localhost:8000';
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

---

## ⚙️ Configuration

### Environment Variables (Backend)

Create a `.env` file in the project root:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=localhost,127.0.0.1,leadbrige-production-36b2.up.railway.app

# Database (Supabase)
DATABASE_URL=postgresql://postgres:password@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres

# Redis (optional)
REDIS_URL=redis://localhost:6379/0

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173,https://frounted-f.vercel.app

# Static Files
STATIC_ROOT=staticfiles
```

### Generate Secret Key

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

---

## 📦 Deployment

### Deploy Backend to Railway

1. **Connect GitHub repository**
   - Go to [Railway.app](https://railway.app)
   - Create new project
   - Connect your GitHub repo

2. **Configure environment variables**
   - Add all variables from `.env` in Railway dashboard

3. **Set up database**
   - Add Supabase PostgreSQL connection string
   - Or use Railway's PostgreSQL service

4. **Deploy**
   - Railway auto-deploys on push to main branch

### Deploy Frontend to Vercel

1. **Connect GitHub repository**
   - Go to [Vercel.com](https://vercel.com)
   - Import your frontend repository

2. **Configure environment variables**
   ```
   VITE_API_URL=https://leadbrige-production-36b2.up.railway.app
   ```

3. **Deploy**
   - Vercel auto-deploys on push

### Database Setup (Supabase)

1. Create Supabase account at [supabase.com](https://supabase.com)
2. Create new project
3. Use **Session Pooler** connection string (IPv4 compatible)
4. Run migrations: `python manage.py migrate`

---

## 📚 API Documentation

### Authentication

All protected endpoints require JWT token in header:
```
Authorization: Bearer <access_token>
```

### Main Endpoints

#### Users
- `POST /A/login/` - Obtain JWT tokens
- `POST /A/refresh/` - Refresh access token
- `GET /A/me/` - Get current user profile
- `POST /A/user/` - Create new user

#### Leads
- `GET /B/leads/` - List all leads
- `POST /B/leads/` - Create new lead
- `GET /B/leads/{id}/` - Get lead details
- `PUT /B/leads/{id}/` - Update lead

#### Follow-ups
- `GET /D/followups/` - List follow-ups
- `POST /D/followups/` - Create follow-up
- `PUT /D/followups/{id}/` - Update follow-up

#### Notes
- `GET /C/notes/` - List notes
- `POST /C/notes/` - Create note

#### Activity Logs
- `GET /F/activity/` - List activities

For full API documentation, visit: `/api/schema/swagger/`

---

## 📁 Project Structure

```
LeadBrige/
├── LeadBrige/              # Django project settings
│   ├── settings.py         # Configuration
│   ├── urls.py            # URL routing
│   ├── wsgi.py            # WSGI entry point
│   └── asgi.py            # ASGI entry point
├── A_User/                # User management app
├── B_Leads/               # Leads management app
├── C_Leads_Notes/         # Notes app
├── D_Followups/           # Follow-ups app
├── E_Notification/        # Notifications app
├── F_Activity_logs/       # Activity logs app
├── Frounted/F/            # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── manage.py              # Django CLI
├── requirements.txt       # Python dependencies
├── Dockerfile             # Docker configuration
├── .env                   # Environment variables
└── README.md             # This file
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open Pull Request**

---

## 📧 Support

For issues, questions, or suggestions, please:
- Open an issue on [GitHub Issues](https://github.com/Dhrumil-stack/LeadBrige/issues)
- Contact the maintainer

---

## 🔗 Quick Links

- **Live Demo**: [leadbrige-production-36b2.up.railway.app](https://leadbrige-production-36b2.up.railway.app)
- **Frontend Repo**: [Frounted/F](https://github.com/Dhrumil-stack/Frounted)
- **Documentation**: [API Docs](https://leadbrige-production-36b2.up.railway.app/api/schema/swagger/)
- **Django Docs**: [djangoproject.com](https://www.djangoproject.com/)
- **DRF Docs**: [django-rest-framework.org](https://www.django-rest-framework.org/)

---
