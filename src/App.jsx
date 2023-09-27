import { useState } from "react";
import Boton from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import {evaluate} from "mathjs"
import "./App.css";

function App() {
  const [input, setInput] = useState("")
  const addInput = value => {
    setInput(input + value)
  }

  const result = () => {
    if (input) {
      setInput(evaluate(input))
    }else{
      alert("Ingresa los valores")
    }
  }

  return (
    <>
      <header>
        <h1 className="title">Calculadora Básica</h1>
      </header>
      <main className="container">
        <section>
          <Screen input={input}/>
        </section>
        <section className="row">
          <Boton handleClick= {addInput}>7</Boton>
          <Boton handleClick= {addInput}>8</Boton>
          <Boton handleClick= {addInput}>9</Boton>
          <Boton handleClick= {addInput}>*</Boton>
        </section>
        <section className="row">
          <Boton handleClick= {addInput}>4</Boton>
          <Boton handleClick= {addInput}>5</Boton>
          <Boton handleClick= {addInput}>6</Boton>
          <Boton handleClick= {addInput}>-</Boton>
        </section>
        <section className="row">
          <Boton handleClick= {addInput}>1</Boton>
          <Boton handleClick= {addInput}>2</Boton>
          <Boton handleClick= {addInput}>3</Boton>
          <Boton handleClick= {addInput}>+</Boton>
        </section>
        <section className="row">
          <Boton handleClick= {result}>=</Boton>
          <Boton handleClick= {addInput}>0</Boton>
          <Boton handleClick= {addInput}>.</Boton>
          <Boton handleClick= {addInput}>/</Boton>
        </section>
        <section className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </section>
      </main>
    </>
  );
}

export default App;
