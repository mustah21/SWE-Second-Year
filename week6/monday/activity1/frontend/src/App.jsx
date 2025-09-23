import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignupComponent from "./pages/SignupComponent";
import LoginComponent from "./pages/LoginComponent";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <LoginComponent setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/signup"
              element={
                !isAuthenticated ? (
                  <SignupComponent setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
