import Image from "./assets/Screenshot 2024-09-26 092408.png";
import './App.css';
import Home from './home';
import Logo from './assets/equity-bank-logo.jpg'


<Home />
function App() {
  return (
    <>
    <div class='top'>
      <select>
        <option value="COUNTRY">COUNTRY</option>
        <option value="KEN">KEN</option>
        <option value="UGD">UGD</option>
        <option value="TZN">TZN</option>
        <option value="RWD">RWD</option>
        <option value="SS">SS</option>
        <option value="DRC">DRC</option>
      </select>
      <button>SEARCH</button>
    </div>
    <hr />
    <div class="Menu">
       <a><img  src={Logo} /></a>
       <div class="min-menu">
        <a href="#">About Equity</a>
        <a href="#"> Investor Relations</a>
        <a href="#"> Equity Group Foundations</a>
        <a href="#"> Finserve</a>
        <a href="#"> Newsroom</a>
        <a href="#"> Knowledge Resource</a>
        <a href="#" id="Eezy">Eazy</a>
       </div>
    </div>
    <div class="button1">
      <a href="#"><img src={Image} /></a>
    </div>
    </>
  );
}

export default App;
