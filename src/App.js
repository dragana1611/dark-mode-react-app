import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import { BsFillMoonStarsFill } from "react-icons/bs";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className="nav-center">
        <h1>Dark Mode React App</h1>
        <BsFillMoonStarsFill className="icon" onClick={toggleTheme} />
      </header>
      <main>
        <nav>
          <div className="nav-heading nav-center">
            <h2>overreacted</h2>
          </div>
        </nav>
        <section className="articles">
          {data.map((item) => {
            return <Article key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
