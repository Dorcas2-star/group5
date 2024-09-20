import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <i className="fa-solid fa-laptop-code" />
            <span>BluIT</span>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Welcome to BluIT</h1>
          <p>We are a team of innovative thinkers and problem solvers.</p>
          <button>Learn More</button>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Cybersecurity</li>
            <li>Data Analytics</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;