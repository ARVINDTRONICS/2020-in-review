import React from "react";
import "./App.css";
import SunSet from "./assets/images/1.jpeg";
import Beach from "./assets/images/2.jpeg";
import MeinBeach from "./assets/images/3.jpeg";
import Marathon from "./assets/images/4.jpeg";
import tcs from "./assets/images/tcs.jpeg";
import crazy from "./assets/images/crazy.jpeg";
import arvindred1 from "./assets/images/arvind-red-1.jpeg";
import arvindred2 from "./assets/images/arvind-red-2.jpeg";
import crayon1 from "./assets/images/crayon1.jpeg";
import dam from "./assets/images/dam.jpeg";
import deepam from "./assets/images/deepam.jpeg";
import diwali from "./assets/images/diwali.jpeg";
import drops from "./assets/images/drops.jpeg";
import gift from "./assets/images/gift.jpeg";
import qs from "./assets/images/qs.jpeg";
import setup from "./assets/images/setup.jpeg";
import shaved from "./assets/images/shaved.jpeg";
import station1 from "./assets/images/station1.jpeg";
import station2 from "./assets/images/station2.jpeg";
import temple from "./assets/images/temple.jpeg";
import thekkady from "./assets/images/thekkady.jpeg";
import wedding from "./assets/images/wedding.jpg";
import wedding2 from "./assets/images/wedding2.jpg";
import wedding3 from "./assets/images/wedding3.jpeg";

import react from "./assets/images/react.jpeg";
import anil from "./assets/images/anil.jpeg";
import thekkady2 from "./assets/images/thekkady2.jpeg";
import spotify from "./assets/images/spotify.jpeg";
import hello from "./assets/images/hello.jpeg";
import calendar from "./assets/calendar.png";

function App() {
  return (
    <div className="App">
      <div className="left-pane">
        <div className="icon">
          <img src={calendar} alt="" />
        </div>
        <h6>
          2020 has been the most hated year in the recent times ! But I am
          grateful for everything that this year has given me. This year has
          changed a lot of things from despair into hope and has given me the
          opportunity to be able to work on what I love doing everyday,spend
          time with family, improve my health and the strength to accept things
          as they are.
        </h6>
        <h6>
          If not for this year not many of us would appreciate that we are able
          to breath everyday,the freedom to explore,the impact that every single
          person has on our life and many other simple pleasures that we take
          for granted.
        </h6>
        <h6>
          Though it is only going to be a change of calendars and doesn't the
          change the reality that much,the hope that things will be different
          and better going forward is something we must all hold onto.
        </h6>
        <h6>
          "Hope is a good thing.Maybe the best of things and no good thing ever
          dies"
          <br /> <br />
          -The Shawshank Redemption"
        </h6>
        <div className="">
          &copy;
          <a
            href="https://www.linkedin.com/in/arvindkumarts/"
            rel="noreferrer"
            target="_blank"
          >
            Arvind Thoppe
          </a>
        </div>
      </div>
      <div className="right-pane">
        <div class="row">
          <div class="column">
            <img src={SunSet} alt="" />
            <img src={MeinBeach} alt="" />
            <img src={wedding} alt="" />
            <img src={react} alt="" />
            <img src={diwali} alt="" />
            <img src={thekkady2} alt="" />
            <img src={wedding2} alt="" />
            <img src={arvindred1} alt="" />
          </div>
          <div class="column">
            <img src={tcs} alt="" />
            <img src={Beach} alt="" />
            <img src={crazy} alt="" />
            <img src={station1} alt="" />
            <img src={wedding2} alt="" />
            <img src={wedding3} alt="" />
            <img src={hello} alt="" />
          </div>
          <div class="column">
            <img src={thekkady} alt="" />
            <img src={deepam} alt="" />
            <img src={station2} alt="" />
            <img src={dam} alt="" />
            <img src={temple} alt="" />
            <img src={gift} alt="" />
            <img src={arvindred2} alt="" />
            <img src={spotify} alt="" />
          </div>
          <div class="column">
            <img src={Marathon} alt="" />
            <img src={drops} alt="" />
            <img src={crayon1} alt="" />
            <img src={shaved} alt="" />
            <img src={anil} alt="" />

            <img src={setup} alt="" />
            <img src={qs} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
