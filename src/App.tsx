import { Navigate, Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { MyTasks } from "./pages/home/MyTasks";
import { Dashboard } from "./pages/home/Dashboard";
import { AddNewTask } from "./pages/AddTask";
import { useEffect, useState } from "react";

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

  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/addtask" element={<AddNewTask />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="tasks" element={<MyTasks />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
