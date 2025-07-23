# Good Morning App

A comprehensive MERN stack application with Next.js frontend and PostgreSQL integration.

## Features 

- Responsive "Good Morning" landing page using Next.js 14 with App Router
- Clean form component with validation for:
  - Full name (required)
  - Phone number (with format validation)
  - Email address (with email validation)
- Visually appealing submit button with loading state
- Success/error notifications after submission
- Accessible and mobile-responsive UI
- Express.js backend with proper middleware configuration
- RESTful API endpoints for form submission
- Data validation using express-validator
- PostgreSQL connection using Prisma ORM
- Users schema with appropriate columns and constraints
- Proper error handling and logging
- Environment variable configuration for database credentials

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd good-morning-app
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Set up the database

- Create a PostgreSQL database
- Update the `.env` file in the `backend` directory with your database credentials:

```
DATABASE_URL="postgresql://username:password@localhost:5432/good_morning_db?schema=public"
```

### 4. Generate Prisma client and run migrations

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

## Running the Application

### Development Mode

To run both the frontend and backend concurrently:

```bash
# From the root directory
npm run dev
```

Or run them separately:

```bash
# Run the backend server
cd backend
npm run dev

# Run the frontend server
cd frontend
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## Project Structure

```
good-morning-app/
├── frontend/                # Next.js frontend
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── utils/           # Utility functions
│   ├── public/              # Static assets
│   └── ...
├── backend/                 # Express.js backend
│   ├── controllers/         # Request handlers
│   ├── middleware/          # Express middleware
│   ├── prisma/              # Prisma schema and migrations
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── .env                 # Environment variables
│   └── server.js            # Main server file
└── ...
```

## API Endpoints

- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID