import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import {InputBox} from "./Components";

function App() {
  return (
    <>
      <h1 className="text-center py-2 m-10 jsutify-center rounded-xl mx-auto max-w-sm text-3xl bg-gray-500 ">
        Currency Convertor
      </h1>
    </>
  );
}

export default App;
