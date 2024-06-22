import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  // useEffect = 언제 코드를 실행할 지 선택권을 줌

  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // [] = no dependency = first render, only once

  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword]);
  
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter]);
  
  useEffect(() => {
    console.log("I run when keyword & counter changes.")
  }, [keyword, counter]);

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
