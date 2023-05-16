import "./App.css";
import { BlogList } from "./components/BlogList";
import { NewBlog } from "./components/NewBlog";

function App() {
  return (
    <Routes>
      <Route element={BlogList} path="/" />
      <Route element={NewBlog} path="/add" />
      <Route />
    </Routes>
  );
}

export default App;
