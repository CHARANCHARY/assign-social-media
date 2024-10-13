# Project Name

## Overview
This project is a full-stack web application built using modern frontend and backend technologies. It leverages **React** with **Tailwind CSS** for the frontend, while the backend is developed using **Node.js**, **Express.js**, and **MongoDB** for handling server-side logic and data persistence. The application also includes secure user authentication and file upload features.

## Frontend

The frontend of this project is powered by **React** and **Tailwind CSS**, providing a responsive and modern UI. The following key packages are used:

- **autoprefixer**: Automatically adds vendor prefixes to CSS, ensuring cross-browser compatibility.
- **postcss**: A tool to transform CSS with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.
- **web-vitals**: A package to measure the performance of your React app.

## Backend

The backend is developed using **Node.js** and **Express.js**. It includes the following key features:

- **bcrypt & bcryptjs**: Used for hashing passwords for secure user authentication.
- **body-parser**: Middleware to handle incoming request bodies.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **crypto**: A Node.js built-in module used for encryption.
- **dotenv**: To manage environment variables securely.
- **express-validator**: Middleware for validating and sanitizing user input.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWT) used in user authentication.
- **mongodb & mongoose**: MongoDB and its object data modeling (ODM) library to interact with the database.
- **multer & multer-gridfs-storage**: Middleware for handling file uploads, particularly image uploads, with support for GridFS.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   - For frontend:
     ```bash
     cd frontend
     npm install
     ```

   - For backend:
     ```bash
     cd backend
     npm install
     ```

3. Set up environment variables:
   - Create a `.env` file in the backend root directory and add the necessary environment variables (e.g., MongoDB URI, JWT secret).

4. Start the development servers:

   - Frontend:
     ```bash
     npm start
     ```

   - Backend:
     ```bash
     npm run dev
     ```

## Features

- User Authentication: Secure login and registration with password hashing and JWT tokens.
- File Upload: Image upload using Multer and GridFS.
- Responsive UI: Built with Tailwind CSS, optimized for all screen sizes.
  
## Technologies Used

- **Frontend**: React, Tailwind CSS, PostCSS, Autoprefixer
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Security**: bcrypt, JWT
- **File Upload**: Multer, GridFS

## License

This project is licensed under the MIT License.
