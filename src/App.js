import React, { Button } from 'react';
import './App.css';

class SocialButton extends React.Component {
  handleClick(url) {
    window.open(url, "_blank") //to open new page
    // window.open("https://github.com/karadietz", "_blank") //to open new page
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button className="button" onClick={() => this.handleClick(this.props.url)}>
        {this.props.title}
      </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={me} alt="Me!" /> */}
        <div className="bg-text">
          <h4>Hi :)</h4>
          <h2>My name is Kara Dietz.</h2>
          <h4>I am a 2B Software Engineering student at the University of Waterloo.</h4>
          <h6>I have primarily worked with: Java, C/C++, Python, Swift, SQL, AWS, Kafka, & React</h6> 
          <h6>Currently seeking Fall 2020 internships. Get in touch with me!</h6>
          <SocialButton title="Email" url="mailto:kmdietz@uwaterloo.ca"/>
          <div className="divider"/>
          <SocialButton title="LinkedIn" url="https://www.linkedin.com/in/kara-dietz/"/>
          <div className="divider"/>
          {/* <a className= "button" href="./Kara_Dietz_Resume.pdf" target="_blank">Resume</a> */}
          <SocialButton title="Resume" url="./Kara_Dietz_Resume.pdf"/>
          <div className="divider"/>
          <SocialButton title="Github" url="https://github.com/karadietz"/>
          <h6>I'm still exploring where exactly my interests lie in software engineering, but I would love to get more involved in mobile development, gain exposure to more levels of the stack, continue developing my infrastructure skills, and maybe even dabble with design!</h6>
          <h6>🌱 Environmental sustainability is one of my greatest values, and I hope to contribute my tech skills towards creating sustainable solutions for society.</h6>
        </div>
      </header>
    </div>
  );
}

export default App;
