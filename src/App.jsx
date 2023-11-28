import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </>
  );
}

export default App;
