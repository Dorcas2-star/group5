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
               <button><a href="#">Home</a></button>  
               <button><a href="#">About</a></button> 
               <button><a href="#">Services</a></button> 
               <button><a href="#">Contact</a></button> 
                  </nav>
              </header>
              <div id="home">

  <video  controls>
    <source src={myVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

 
  <div class="bg-overlay"></div>
</div>
      </>
  );
}

export default App;
