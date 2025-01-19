import {configureStore} from '@reduxjs/toolkit'
import Home from './features/pages/Home'
import LoginPage from './features/pages/LoginPage'
import SignupPage from './features/pages/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const store = configureStore({
  reducer:{
    
  }
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/login",
    element:<LoginPage></LoginPage>
  },
  {
    path:'/signup',
    element:<SignupPage></SignupPage>
  }
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
