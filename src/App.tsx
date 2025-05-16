import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getCategories } from "./api/categories";
import "./App.css";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  return (
    <>
      <Page></Page>
    </>
  );
}

export default App;
