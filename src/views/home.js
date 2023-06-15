import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import me from '../public/dentonphoto-200w.jpg'
import hksaLogo from "../public/hksalogo-200h.jpg"
import ubcLogo from "../public/ubclogo-200h.png"
import whatifiLogo from "../public/whatifilogo-200h.jpg"
import aburiLogo from "../public/aburi_logo-200h.png"
import './home.css'
const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Denton Sun</title>
        <meta property="og:title" content="Denton Sun" />
      </Helmet>
      <div className="home-testimonial-card">
        <span className="home-text">Denton Sun</span>
        <span className="home-text01">B.Sc. Computer Science at UBC</span>
        <div className="home-testimonial">
          <img alt="image" src={me} className="home-image" />
        </div>
        <span className="home-text02">Software Developer</span>
        <span className="home-text03">
          <span>
            Hey! I&apos;m Denton, a senior computer science student at UBC with
            a passion for all things tech.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Free to reach out if you have </span>
          <span>
            any questions or just want to chat,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            I&apos;m always interested to learn, teach, and progress my career
            as a computer scientist :)
          </span>
          <br></br>
        </span>
      </div>
      <a href="mailto:dentonjdsun@gmail.com?subject=" className="home-link">
        dentonjdsun@gmail.com
      </a>
      <div className="home-social-bar">
        <Link to="/page" className="home-navlink">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M640 234v236h234zM938 426v342q0 34-25 59t-59 25l-684 2q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h512z"></path>
          </svg>
        </Link>
        <div className="home-container1">
          <a
            href="https://www.linkedin.com/in/dentonjdsun/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </a>
        </div>
        <a
          href="https://github.com/Dentsun"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link2"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </a>
      </div>
      <h1 className="home-text11">
        <span>Work Experience</span>
        <br></br>
        <br></br>
      </h1>
      <div className="home-feature-card">
        <img alt="image" src={ubcLogo} className="home-image1" />
        <span className="home-text15">UBC Sciences</span>
        <h2 className="home-text16">Undergraduate Teaching Assistant</h2>
        <span className="home-text17">
          <span>
            -One of six Teaching Assistants for the new UBC Science 100 program
            with focus in computation
          </span>
          <br className="home-text19"></br>
          <br></br>
          <span>
            -Lead independent tutorials with 15 students and teach educational
            and technical skills to help students excel in computer science.
          </span>
        </span>
      </div>
      <div className="home-feature-card1">
        <img alt="image" src={whatifiLogo} className="home-image2" />
        <span className="home-text22">Whatifi</span>
        <h2 className="home-text23">Software Developer</h2>
        <span className="home-text24">
          <span>
            -Refactored 200+ files of the web app codebase to better support
            better abstraction and coding practices 
          </span>
          <br className="home-text26"></br>
          <br></br>
          <span>
            -Optimized calculation times by over 80% by utilizing parallelism
            for back-end requests
          </span>
          <br className="home-text29"></br>
          <br></br>
          <span>
            -Developed and designed new features with 100+ pull requests merged
            into production, coded with JavaScript and Go and managed with Git
          </span>
        </span>
      </div>
      <div className="home-feature-card2">
        <img alt="image" src={hksaLogo} className="home-image3" />
        <span className="home-text32">UBC Hong Kong Students Association</span>
        <h2 className="home-text33">Marketing Director</h2>
        <span className="home-text34">
          <span>
            -Worked in a 10-person team out of 50 other execs to organize,
            promote and host social events for 200+ members. 
          </span>
          <br className="home-text36"></br>
          <br></br>
          <span>
            -Photographed events and designed posts to advertise club events
          </span>
        </span>
      </div>
      <div className="home-feature-card3">
        <img alt="image" src={aburiLogo} className="home-image4" />
        <span className="home-text39">Minami Yaletown</span>
        <h2 className="home-text40">Server Assistant</h2>
        <span className="home-text41">
          <span>
            -Identify and prioritize multiple tasks and work closely with other
            staff to complete them efficiently
          </span>
          <br></br>
          <br></br>
          <span>
            -Promptly problem solve any issue that arises to ensure the least
            amount of impact on customers
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            -Communicate within the team to quickly identify and fulfill any
            needs or problems
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <h1 className="home-text49">Projects</h1>
      <div className="home-feature-card4">
        <div className="home-container2">
          <a
            href="https://www.google.com/url?q=https://devpost.com/software/thoughtsloth&amp;sa=D&amp;source=docs&amp;ust=1686774476779592&amp;usg=AOvVaw2jXKj92u40IiivWsCt-imO"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <h2 className="home-text50">Thought Sloth - Hack the North 2021</h2>
          </a>
          <span>
            <span>
              -Implemented a NLP text classifier during the 36hr hackathon to
              determine emotional context given journal entries
            </span>
            <br></br>
            <br></br>
            <span>
              -Trained the model using Tensorflow and online datasets, with data
              stored using Firebase
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
