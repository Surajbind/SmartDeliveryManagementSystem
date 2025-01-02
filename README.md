# SmartDeliveryManagementSystem

#Working
working several modules in the project 
one major problem is when deployed on render until the mongodb server is on locally it is not reflecting on the live version of the site.



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


Api Endpoints

https://smartdeliverymanagementsystem-froapart.onrender.com/orders -   To Get All Orders.

https://smartdeliverymanagementsystem-froapart.onrender.com/orders/new - To Create Order


https://smartdeliverymanagementsystem-froapart.onrender.com/partners - To get All Partners

https://smartdeliverymanagementsystem-froapart.onrender.com/partners/new - To create Partner

https://smartdeliverymanagementsystem-froapart.onrender.com/assignments To Check Status of the assignments

https://smartdeliverymanagementsystem-froapart.onrender.com/assignments/run 

Screenshots
![Screenshot 2025-01-01 160941](https://github.com/user-attachments/assets/191104b8-6b48-4920-9aca-a5c963afd120)
![Screenshot 2025-01-01 160956](https://github.com/user-attachments/assets/74185018-a2de-48c8-9afd-80d10ec5127f)
![Screenshot 2025-01-01 161011](https://github.com/user-attachments/assets/ec3c412b-d722-4477-bf03-6d95380dc1d6)
![Screenshot 2025-01-01 161055](https://github.com/user-attachments/assets/5a4af3d4-866a-433d-959e-a93f6cab9f70)
![Screenshot 2025-01-01 161024](https://github.com/user-attachments/assets/6fc17bcc-1f65-4f35-82e2-d9beab84f2ce)
![Screenshot 2025-01-01 161040](https://github.com/user-attachments/assets/ed277f27-0442-4bc7-bf1c-d8c9f86a2b00)
![Screenshot 2025-01-01 161108](https://github.com/user-attachments/assets/7c58fade-7731-47df-a45d-e8a938c9b168)
