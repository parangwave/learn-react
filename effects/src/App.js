import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // }
  // useEffect(iRunOnlyOnce, []);

  // useEffect(() => {
  //   console.log("CALL THE API");
  // }, []);
  // console.log("SEARCH FOR", keyword);
  
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("SEARCH FOR", keyword);
  //   }
  // }, [keyword]);

  useEffect(() => {
    console.log("I run only once.");
  }, []);

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
