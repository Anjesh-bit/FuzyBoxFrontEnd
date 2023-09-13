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
import UsersGuard from "./Guard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path="accounts/register" element={<RegisterPage />} />
      <Route exact path="accounts/login" element={<LoginPage />} />
      <Route element={<UsersGuard />}>
        <Route index path="/" element={<HomePage />} />
        <Route exact path="/profile/:id" element={<ProfilePage />} />
      </Route>
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
