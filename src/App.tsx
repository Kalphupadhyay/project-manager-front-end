import { Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { MyTasks } from "./pages/home/MyTasks";
import { Dashboard } from "./pages/home/Dashboard";
import { AddNewTask } from "./pages/AddTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/addtask" element={<AddNewTask />} />
        <Route path="/" element={<HomePage />}>
          <Route path="tasks" element={<MyTasks />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
