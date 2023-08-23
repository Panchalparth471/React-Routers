# React-Routers
It is a simple project to understand React Routes for navigating to different pages without refreshing the page so a single page web application is followed during built of react website, it also explains the concept of nested routing and how to solve the ambiguity using &lt;Outlet> tag and it is helpful to understand the concept of useNavigate hook .

# React & Tailwind CSS Starter Pack

This is a starter pack for creating React projects with Tailwind CSS configured. It uses React version **18.2** and Tailwind CSS version **3.2**.

## Usage

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Panchalparth471/react-tailwind-css-starter-pack.git
    ```

2. Install the required packages.
    ```sh
    cd react-tailwind-css-starter-pack
    npm install
    ```

3. Start the development server.
    ```sh
    npm start
    ```
4. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
5. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.

6. Install React Router using the following command
   ```sh
   npm install react-router-dom
   ```
7.Import 
```sh
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
```
to use them accordingly.

