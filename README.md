# React Router Demo App

This is a basic demo app built using React Router, Bootstrap, and other technologies to demonstrate various functionalities including authentication, fetching data from an API, and conditional rendering.

## Features

- **Login Page**: Implemented a simple login page with validation to demonstrate basic form handling.
- **Navigation Bar**: Utilized Bootstrap to create a responsive navigation bar.
- **Protected Routes**: Implemented protected routes to restrict access to certain pages unless the user is authenticated.
- **Fetching Data**: Utilized `fetch` API to retrieve data from an external API.
- **Table Display**: Displayed the fetched data in a table format.
- **404 Page**: Implemented a "Not Found" page to handle unknown routes.
- **Conditional Layout**: Demonstrated conditional layout rendering for the home page.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/react-router-demo.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd react-router-demo
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the app:**

    ```bash
    npm start
    ```

5. **Open your browser and visit** `http://localhost:3000` **to view the app.**

## Technologies Used

- React
- React Router
- Bootstrap
- JavaScript (ES6+)

## Folder Structure

react-router-demo/
│
├── README.md
├── node_modules/
├── package.json
├── public/
│ ├── index.html
│ └── ...
│
└── src/
│
├── components/
│ ├── Login.js
│ ├── Navbar.js
│ ├── NotFound.js
│ ├── ProtectedRoute.js
│ └── ...
│
└── pages/
├── Home.js
├── Login.js
├── NotFound.js
└── ...
