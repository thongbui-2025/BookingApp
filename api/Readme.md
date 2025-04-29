# BookingApp - Backend API

This is the backend service of **BookingApp**, an online platform for booking services. The backend is developed using **Node.js** with **Express.js**, and uses **MongoDB** for data storage via **Mongoose**. The API follows RESTful design principles and is structured based on the **MVC pattern**.

---

## 🚀 Features

-   **User Authentication**

    -   Register, login using JWT.
    -   Role-based access control (user & admin).
    -   Secure password hashing using bcryptjs.

-   **Service Management** (Admin only)

    -   Create, update, delete, and fetch available services.

-   **Booking Management**

    -   Create, update, cancel bookings.
    -   Prevent double bookings for same time slots.

-   **User Profile**
    -   View and update personal information.

---

## 🛠️ Tech Stack

| Category    | Technology    |
| ----------- | ------------- |
| Runtime     | Node.js       |
| Framework   | Express.js    |
| Database    | MongoDB       |
| ODM         | Mongoose      |
| Auth        | JWT, bcryptjs |
| Environment | dotenv        |
| Dev Tools   | nodemon       |
