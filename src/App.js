import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
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

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <p>
          Primeiros passos com <code>React.js</code>
        </p>
      </header>
      <div className="content">
        {user ? <Question user={user} /> : <Register onRegister={handleRegister} />}
      </div>
      <div className="footer">
        <p>{user && `Olá ${user.name.split(' ')[0]}`}</p>
        <p>
          Contatos:&nbsp;
          <a
            className="link"
            href="https://www.linkedin.com/in/felipe-l-9bb01ba5/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          &nbsp;
          <a
            className="link"
            href="mailto:laera.felipe@gmail.com?subject=Palestra: Primeiros passos com React"
          >
            Email
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
