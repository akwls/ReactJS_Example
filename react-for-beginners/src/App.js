import {useState, useEffect} from 'react';

function Hello() {
  // Component가 새로 생성될때만 실행됨.
  // 첫번째 매개변수가 반환하는 함수는 소멸할 때 실행됨.
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(")
    }
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>
        {showing ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default App;
