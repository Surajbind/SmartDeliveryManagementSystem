# SmartDeliveryManagementSystem
Project Overview
The Smart Delivery Management System is a comprehensive web application designed to manage delivery operations efficiently. This system facilitates partner management, order processing, and real-time tracking while providing insightful dashboards to monitor performance metrics. It is built using Next.js for the frontend and Node.js with Express for the backend, supported by a MongoDB database.

Technologies Used
Frontend
Next.js: React framework for server-side rendering and static site generation.
Material-UI: For building responsive, modern UI components.
Axios: For making API calls to the backend.
Backend
Node.js: JavaScript runtime for scalable server-side development.
Express.js: Backend framework for creating REST APIs.
MongoDB: NoSQL database for data storage.
Mongoose: ODM library for MongoDB schema and model management.

Setup Instructions
Backend
Navigate to the backend directory:
bash
Copy code
cd smart-delivery-backend
Install dependencies:
bash
Copy code
npm install
Configure the environment variables in .env:
makefile
Copy code
MONGO_URI=<Your MongoDB Connection String>
PORT=5000
Start the backend server:
bash
Copy code
npm run build
npm start
Frontend
Navigate to the frontend directory:
bash
Copy code
cd smart-delivery-frontend
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Open the application in your browser at http://localhost:3000.
