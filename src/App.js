import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<HomePage />} />
      <Route exact path="accounts/register" element={<RegisterPage />} />
      <Route exact path="accounts/login" element={<LoginPage />} />
      <Route exact path="/profile/:id" element={<ProfilePage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="fuzzy_app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
