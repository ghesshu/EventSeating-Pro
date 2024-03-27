import "./App.css";
import { UrlProvider } from "./components/Funcs/UrlContext";
import { TokenProvider } from "./components/Funcs/TokenContext";
import { ApiCallProvider } from "./components/Funcs/ApiCalls";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout/Layout";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";

//
import AddTable from "./routes/Table/AddTable";
import AllTable from "./routes/Table/AllTable";
import EditTable from "./routes/Table/EditTable";
import ViewTable from "./routes/Table/ViewTable";

//

import AddGuest from "./routes/Guest/AddGuest";
import AllGuest from "./routes/Guest/AllGuest";
import EditGuest from "./routes/Guest/EditGuest";
import ViewGuest from "./routes/Guest/ViewGuest";

//

import AddUser from "./routes/Users/AddUser";
import EditUser from "./routes/Users/EditUser";
import AllUsers from "./routes/Users/AllUsers";
import ViewUser from "./routes/Users/ViewUser";

// To create ne route , follow the pattern in this this array
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      // Guest
      {
        path: "/all-Guest",
        element: <AllGuest />,
      },
      {
        path: "/edit-guest/:id",
        element: <EditGuest />,
      },
      {
        path: "/view-Guest",
        element: <ViewGuest />,
      },
      {
        path: "/add-guest",
        element: <AddGuest />,
      },

      // Table
      {
        path: "/all-table",
        element: <AllTable />,
      },
      {
        path: "/edit-table/:id",
        element: <EditTable />,
      },
      {
        path: "/view-table/:id",
        element: <ViewTable />,
      },
      {
        path: "/add-table",
        element: <AddTable />,
      },

      // User
      {
        path: "/all-users",
        element: <AllUsers />,
      },
      {
        path: "/edit-user/:id",
        element: <EditUser />,
      },
      {
        path: "/view-user",
        element: <ViewUser />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <UrlProvider>
        <TokenProvider>
          <ApiCallProvider>
            <RouterProvider router={router} />
          </ApiCallProvider>
        </TokenProvider>
      </UrlProvider>
    </div>
  );
}

export default App;
