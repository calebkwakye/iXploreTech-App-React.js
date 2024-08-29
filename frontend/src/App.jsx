// import React,{useState} from "react";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// // import { createTheme } from "@mui/material/styles";
// import { Switch } from "@mui/material";


// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import "./App.css";

// import HomePage from "./Pages/Home";
// import BlogsPage from "./Pages/Blogs";
// import CategoriesPage from "./Pages/Categories";
// import BlogPage from "./Pages/Blog";
// import ProfilePage from "./Pages/Profile";
// import LoginPage from "./Pages/Login";
// import RegisterPage from "./Pages/Register";

// const routes = [
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/home",
//     element: <HomePage />,
//   },
//   {
//     path: "/categories",
//     element: <CategoriesPage />,
//   },
//   {
//     path: "/blogs/:categoryId?",
//     element: <BlogsPage />,
//   },
//   {
//     path: "/blog/:blogId",
//     element: <BlogPage />,
//   },
//   {
//     path: "/profile/:authorId",
//     element: <ProfilePage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
// ];

// const router = createBrowserRouter(routes);

// function App() {

//     // create a darkTheme function to handle dark theme using createTheme
//     // const darkTheme = createTheme({
//     //   palette: {
//     //     mode: 'dark' ,
//     //   },
//     // });

//       // state to manage the dark mode
//   const [toggleDarkMode, setToggleDarkMode] = useState(true);

//   // function to toggle the dark mode as true or false
//   const toggleDarkTheme = () => {
//     setToggleDarkMode(!toggleDarkMode);
//   };

//     // applying the primary and secondary theme colors
//   const darkTheme = createTheme({
//     palette: {
//       // mode: 'dark', //default theme
//       mode: toggleDarkMode ? 'dark' : 'light', 

//       primary: {
//         main: '#90caf9',
//       },
//       secondary: {
//         main: '#f48fb1',
//       },
//     // add other properties here…
//     },
//   });
   
//   return(
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <RouterProvider router={router} />;
//         <h6>Toggle Dark mode</h6>
//         <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
//     </ThemeProvider>
//   ) 
// }

// export default App;


// import React, { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { Switch } from "@mui/material";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import "./App.css";

// import HomePage from "./Pages/Home";
// import BlogsPage from "./Pages/Blogs";
// import CategoriesPage from "./Pages/Categories";
// import BlogPage from "./Pages/Blog";
// import ProfilePage from "./Pages/Profile";
// import LoginPage from "./Pages/Login";
// import RegisterPage from "./Pages/Register";

// const routes = [
//   { path: "/", element: <HomePage /> },
//   { path: "/home", element: <HomePage /> },
//   { path: "/categories", element: <CategoriesPage /> },
//   { path: "/blogs/:categoryId?", element: <BlogsPage /> },
//   { path: "/blog/:blogId", element: <BlogPage /> },
//   { path: "/profile/:authorId", element: <ProfilePage /> },
//   { path: "/login", element: <LoginPage /> },
//   { path: "/register", element: <RegisterPage /> },
// ];

// const router = createBrowserRouter(routes);

// function App() {
//   const [toggleDarkMode, setToggleDarkMode] = useState(true);

//   const toggleDarkTheme = () => {
//     setToggleDarkMode(!toggleDarkMode);
//   };

//   const darkTheme = createTheme({
//     palette: {
//       mode: toggleDarkMode ? 'dark' : 'light',
//       primary: {
//         main: '#90caf9',
//       },
//       secondary: {
//         main: '#f48fb1',
//       },
//     },
//     components: {
//       MuiCssBaseline: {
//         styleOverrides: {
//           body: {
//             backgroundColor: toggleDarkMode ? '#121212' : '#ffffff',
//             color: toggleDarkMode ? '#ffffff' : '#000000',
//           },
//         },
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <div className={`app-container ${toggleDarkMode ? 'dark-mode' : 'light-mode'}`}>
//         <RouterProvider router={router} />
//         <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
//           <h6>Toggle Dark mode</h6>
//           <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import HomePage from "./Pages/Home";
import BlogsPage from "./Pages/Blogs";
import CategoriesPage from "./Pages/Categories";
import BlogPage from "./Pages/Blog";
import ProfilePage from "./Pages/Profile";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/categories", element: <CategoriesPage /> },
  { path: "/blogs/:categoryId?", element: <BlogsPage /> },
  { path: "/blog/:blogId", element: <BlogPage /> },
  { path: "/profile/:authorId", element: <ProfilePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
];

const router = createBrowserRouter(routes);

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: toggleDarkMode ? '#121212' : '#ffffff',
            color: toggleDarkMode ? '#ffffff' : '#000000',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={`app-container ${toggleDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <RouterProvider router={router} />
        <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
          <h6>Dark mode</h6>
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;



// // // import React from "react";

// // // import './App.css';
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import "bootstrap/dist/js/bootstrap.min.js";
// // // import "bootstrap/dist/js/bootstrap.bundle.min";
// // // import "bootstrap-icons/font/bootstrap-icons.css";

// // // import HomePage from "./Pages/Home";
// // // import BlogsPage from "./Pages/Blogs";
// // // import CategoriesPage from "./Pages/Categories";


// // // function App() {
// // //   return (
// // //     // <div className="App">
// // //       // <BlogsPage />
// // //       <CategoriesPage />
// // //       // <HomePage/>
// // //     // </div>
// // //   );
  
// // // }

// // // export default App;

// // import React from "react";
// // import './App.css';
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.min.js";
// // import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "bootstrap-icons/font/bootstrap-icons.css";

// // import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // import HomePage from "./Pages/Home";
// // import BlogsPage from "./Pages/Blogs";
// // import BlogPage from "./Pages/Blog";
// // import CategoriesPage from "./Pages/Categories";
// // import LoginPage from "./Pages/Login";
// // import RegisterPage from "./Pages/Register";
// // import AboutPage from "./Pages/About";
// // import ProfilePage from "./Pages/Profile";


// // const routes = [
// //   {
// //     path: "/",
// //     element: <HomePage />,
// //   },
// //   {
// //     path: "/home",
// //     element: <HomePage />,
// //   },
// //   {
// //     path: "/categories",
// //     element: <CategoriesPage />,
// //   },
// //   {
// //     path: "/blogs/:categoryId?",
// //     element: <BlogsPage />,
// //   },
// //   {
// //     path: "/blog/:blogId",
// //     element: <BlogPage />,
// //   },
// //   {
// //     path: "/profile",
// //     element: <ProfilePage />,
// //   },
// // ];

// // const router = createBrowserRouter(routes);

// // function App() {
// //   return <RouterProvider router={router} />;
// // }

// // export default App;