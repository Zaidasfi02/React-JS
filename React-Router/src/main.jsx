import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/home/Home.jsx'
import About from './Components/about/About.jsx'
import Contact from './Components/contact/Contact.jsx'
import User from './Components/user/User.jsx'
import Github, { GitthubInfo } from './Components/github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={GitthubInfo} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
