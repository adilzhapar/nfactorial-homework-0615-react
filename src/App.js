import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState("night");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleSetTheme = (theme) => {
    if(theme === "night"){
      setTheme("day");
    }else{
      setTheme("night");
    }
    // console.log("set theme", theme);
  }

  return (
    <DefaultContext.Provider value={{ handleCreateFan, handleSetTheme}}>
      <Header fan={fan} theme={theme}/>
      <hr />
      <Content theme={theme}/>
      <hr />
      <Footer theme={theme}/>

    </DefaultContext.Provider>
  );
}
