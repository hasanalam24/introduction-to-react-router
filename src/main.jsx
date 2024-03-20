import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/PluralPost/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <div>Hello from React Router</div>
  // },

  // {
  //   path: '/about',
  //   element: <div>I am in the about page</div>
  // },
  // {
  //   path: '/contact',
  //   element: <div>Call me right now</div>
  // },
  //way-3 (but dont use)
  {
    path: 'header',
    element: <Header></Header>
  },
  //way 2
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      //fixed routing

      // {
      //   path: '/user/1',
      //   element: <UserDetails></UserDetails>
      // }

      //....Dynamic routine

      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:issa',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.issa}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
