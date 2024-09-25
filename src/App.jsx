import{useState} from "react";
const App=()=> {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
}, 1000);

  return (
    <div>
      <h1 className="text-center mt-10 text-5xl">{time}</h1>
    </div>
  )
}

export default App
