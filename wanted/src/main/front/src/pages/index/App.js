import logo from '../../logo.svg';
import '../../App.css';
import axios from 'axios';

function selectData(){
  axios.post('/api/testData',["가","나","다"])
      .then(response=>{
          console.log(response);
      });
}

function movToTest(){
    axios.get('/api/test').then(response=>{
            console.log(response);
    })
}

function App() {

  return (
      <div className="App">
        <header className="App-headsrer">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button onClick={() =>selectData()}>조회</button>
              <button onClick={() =>movToTest()}>이동</button>
          </div>
        </header>
      </div>
  );
}

export default App;