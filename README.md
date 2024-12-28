# Learning Management System (LMS) Project

This project consists of two main components:

1. **Client**: A web-based front-end application built using Next.js and integrated with Clerk for user authentication.
2. **Server**: A back-end server built with Express.js and DynamoDB for data management.

## Features

### Client
- Built with **Next.js 15.1.2**.
- Uses **Tailwind CSS** for styling and **Radix UI** components for accessibility.
- Authentication powered by **Clerk**.
- Drag-and-drop functionality with **Hello Pangea DnD**.
- File uploads using **FilePond**.
- Rich video and media support with **React Player**.
- State management using **Redux Toolkit**.
- Integrated with **Stripe** for payment processing.

### Server
- Built with **Express.js**.
- Data stored in **AWS DynamoDB**, managed using **Dynamoose**.
- Implements secure practices with **Helmet**.
- File upload support via **Multer**.
- Integrated with **Stripe** for payment processing.
- Uses **Serverless Framework** for deployment (optional).

---

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- AWS CLI (for DynamoDB setup)

### Client Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at [http://localhost:3000](http://localhost:3000).

### Server Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server in development mode:
   ```bash
   npm run dev
   ```
4. Ensure DynamoDB is running locally or connected to AWS.

---

## Scripts

### Client Scripts
| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start the development server.  |
| `npm run build`| Build the application.         |
| `npm run start`| Start the production server.   |
| `npm run lint` | Run linting checks.            |

### Server Scripts
| Command             | Description                                |
|---------------------|--------------------------------------------|
| `npm run build`     | Build the server.                         |
| `npm run start`     | Start the production server.              |
| `npm run dev`       | Start the server in development mode.     |
| `npm run seed`      | Seed the database with initial data.      |

---

## Dependencies

### Client
| Dependency                        | Version   | Description                                |
|-----------------------------------|-----------|--------------------------------------------|
| Next.js                           | `15.1.2`  | React framework for server-side rendering. |
| Clerk                             | `6.9.6`   | Authentication and user management.        |
| Redux Toolkit                     | `2.5.0`   | State management library.                  |
| Tailwind CSS                      | `3.4.1`   | CSS framework for utility-first design.    |
| Stripe.js                         | `5.4.0`   | Payment integration.                       |
| Radix UI                          | Various   | Accessible components for React.           |

### Server
| Dependency              | Version     | Description                                  |
|-------------------------|-------------|----------------------------------------------|
| Express.js              | `4.21.2`    | Web server framework.                        |
| AWS SDK                 | `2.1692.0`  | AWS services integration.                    |
| Dynamoose               | `4.0.2`     | DynamoDB ORM for Node.js.                    |
| Helmet                  | `8.0.0`     | Security middleware for Express.             |
| Stripe                  | `17.5.0`    | Payment integration.                         |

---

## Environment Variables
Create `.env/.env.local` files in both the `client` and `server` directories with the following variables:

### Client
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8001
NEXT_PUBLIC_LOCAL_URL=http://localhost:3000

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### Server
```env
PORT=8001
NODE_ENV=development

AWS_REGION=YOUR-AWS-REGION
S3_BUCKET_NAME=YOUR-S3-BUCKET-NAME
CLOUDFRONT_DOMAIN=YOUR-CLOUDFRONT-DOMAIN

STRIPE_SECRET_KEY=YOUR-STRIPE-SECRET-KEY

CLERK_PUBLISHABLE_KEY=YOUR-CLERK-PUBLISHABLE-KEY
CLERK_SECRET_KEY=YOUR-CLERK-SECRET-KEY
```
---