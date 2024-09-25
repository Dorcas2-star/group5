import logo from './logo.svg';
import './App.css';
import Home from './home';
import myVideo from '../src/assets/video/nn.mp4';

<Home />
function App() {
  return (
    <>
    <header>
      <nav>
          <div class="logo">
            <a href='#' ><img src ="https://www.2exhibitions.com/wp-content/uploads/2022/07/kigali-convention-centre-kigali-rwanda.png"></img></a>
          </div>
          
               <a href="#">Home</a>  
               <a href="#">About</a> 
               <a href="#">Services</a> 
               <a href="#">Contact</a> 
                  </nav>
              </header>
              <div id="home">

  <video  controls>
    <source src={myVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

 
  <div class="bg-overlay">
    <p>YES WE CAN</p>
  </div>
</div>
      </>
  );
}

export default App;
