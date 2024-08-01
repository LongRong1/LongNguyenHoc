import logo from './logo.svg';
import './App.css';

function App() {
  const ab = [
    {xx1:1,xx2:4,xx3:6},
    {xx1:1,xx2:5,xx3:6},
    {xx1:2,xx2:4,xx3:6},
    {xx1:4,xx2:4,xx3:6},
  ]
  
  const abx = [
    {xx1:1,xx2:4,xx3:1},
    {xx1:1,xx2:5,xx3:1},
    {xx1:2,xx2:4,xx3:2},
    {xx1:4,xx2:4,xx3:1},
  ]
  var nb = document.getElementById('nb')
  function abc(){
    let cc = ab[Math.floor(Math.random()*ab.length)]
    var cv = Object.values(cc)
    nb.innerText = cv[0]+','+cv[1]+','+cv[2]
  }

  function aba(){
    let cc = abx[Math.floor(Math.random()*abx.length)]
    var cv = Object.values(cc)
    nb.innerText = cv[0]+','+cv[1]+','+cv[2]
  }
  return (
    <div className="App">
      <header className="App-header">
        <span id='nb'></span>
        <button className='cl' onClick={abc}>tai</button>
        <button className='cl2' onClick={aba}>xiu</button>
      </header>
    </div>
  );
}

export default App;
