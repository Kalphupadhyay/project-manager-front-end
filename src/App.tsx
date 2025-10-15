import { Navigate, Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { MyTasks } from "./pages/home/MyTasks";
import { Dashboard } from "./pages/home/Dashboard";
import { AddNewTask } from "./pages/AddTask";
import { useEffect, useState } from "react";
import { AppRoutes } from "./constants/routes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    // Logic to check if the user is authenticated
    const hasAuthCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isLoggedIn="));

    if (!hasAuthCookie) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />
          }
        />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path="/addtask" element={<AddNewTask />} />
        <Route path={AppRoutes.HOME} element={<HomePage />}>
          <Route path="tasks" element={<MyTasks />} />
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
