/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import Question from "./pages/question/Question";
import Register from "./pages/register/Register";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    if (storageUser) {
      const user = JSON.parse(storageUser);
      setUser(user);
    }
  }, []);

  const handleRegister = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const handleUnregister = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="app">
      <Header  />
      <div className="content">
        {user ? (
          <Question user={user} />
        ) : (
          <Register onRegister={handleRegister} />
        )}
      </div>
      <Footer user={user} onUnregister={handleUnregister} />
    </div>
  );
}

export default App;
