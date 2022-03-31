import {useState, useEffect} from 'react';

// state가 변하면 모든 코드가 또 실행됨.
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect() : function이 렌더링에 상관없이 한번만 실행되도록 함.
  useEffect(() => console.log("i run only once"), []);

  // 두 번째 매개변수에 넣은 값이 변할 때마다 실행
  useEffect(() => {
    console.log("Search For ", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter])
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." />
       <h1>{counter}</h1>
       <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
