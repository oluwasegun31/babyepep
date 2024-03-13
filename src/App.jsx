import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Welcome from "./pages/Welcome";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Welcome />} />
        <Route path="home" element={<Landing />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
