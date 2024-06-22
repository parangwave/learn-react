import { useState, useEffect } from "react";

function Hi() {
  function byFn() {
    console.log("bye :(");
  }
  
  function hiFn() {
    console.log("created :(");
    return byFn;
  }

  useEffect(()=> {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  // useEffect(function() {
  //   console.log("hi :)");
  //   return function() {
  //     console.log("bye :(");
  //   }
  // }, []);

  useEffect(hiFn, []);
  return <h1>hi</h1>;
}

function Hello() {
  useEffect(() => {
    console.log("created 🤩");
    // cleanup fucn: comp가 제거(destroyed)될 때 작동하는 함수
    // -> comp가 언제 생성(create) / 제거(destroy)됐는 지 알 수 있음
    return () => console.log("destoryed 🥹");
  }, []);

  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div className="App">
      {showing ? <Hi /> : null}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
