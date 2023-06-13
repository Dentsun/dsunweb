import React from 'react';
import '../styles/Home.css';
import TextBox from '../components/TextBox.jsx'
import face from '../assets/headshot.jpg'

function HomePage() {
  return (
    <div className="homepage">

      <div>
        <div className="top-line"></div>
      </div>

      <header className="hero">
        <div className="hero-content">
          <h1>Denton Sun</h1>
          <p>B.Sc Bachelors of Computer Science, University of British Columbia</p>
          <div className="social-links">
            <a href="https://github.com/DentSun" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dentonjdsun/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/path-to-your-resume" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </header>

      <div className='containerFace' style={{ paddingTop: '50px' ,backgroundColor:'#cacaca',alignItems: 'center',paddingBottom: '50px' }}>
      <img src={face} width={500} height={600} style={{ marginLeft: '200px',}}/>
      <p style={{ paddingLeft: '100px', fontSize:40}}>hello I am denton</p>

      </div>

      <TextBox header={'Software Developer - Whatifi'} bulletPoints={['points']} />
      <TextBox header={'Undergraduate Teaching Assistant - UBC'} bulletPoints={['points']} />
      <TextBox header={'More info'} bulletPoints={['points']} />
      <TextBox header={'Hack the North - ThoughtSloth'} bulletPoints={['points']} />
    </div>
  );
}

export default HomePage;