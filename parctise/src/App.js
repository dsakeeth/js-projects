import logo from './logo.svg';
import './App.css';

function App() {
  const age=255;
  const names=['pedro',"tech","kjxhdkv","sjhfgjs","snzbfv"];

  return(
    <div className="App">
      {
        names.map((name,key)=>{
          return <h1 key={key}>{name}</h1>;
        })
      }
    </div>
    );
}

const getName=()=>{
  return "sakeeth";
}

const Job=(props)=>{
  // const name=<h1>Sakeeth</h1>
  // const age=<p>22</p>
  // const email=<h2><a href='dudamsakeeth@gmail.com'>dudamsakeeth@gmail.com</a></h2>
  return (
    <div>
      {props.salary}
    {props.position}
    {props.company}
    </div>
  );
}

export default App;

