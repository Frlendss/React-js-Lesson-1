import React, { Component } from "react";
import "./style.css";
import page1_img from "./Photos/img1.jpg";
import page3_img1 from "./Photos/page3-img1.jpg";
import page3_img2 from "./Photos/page3-img2.jpg";
import page3_img3 from "./Photos/page3-img3.jpg";
import facebook from "./Photos/fb.svg";
import instagram from "./Photos/insta.svg";
import twitter from "./Photos/twit.svg";
import linkedin from "./Photos/Linkedin.svg";
import bar from "./Photos/bars.svg";

export default class App extends Component {
  render() {
    return (
      <>
        {/* header part starts  */}

        <header>
          <div className="box">
            <h1>
              <a href="#">Works</a>
            </h1>
            <h1>
              <a href="#">Blog</a>
            </h1>
            <h1>
              <a href="#">Concact</a>
            </h1>
          </div>
          <div className="bars">
            <img src={bar} alt="bar" />
            <img src={bar} alt="bar" />
            <img src={bar} alt="bar" />
          </div>
        </header>

        {/* header part ends  */}

        {/* main content starts  */}

        <main>
          {/* page - 1 starts  */}

          <div className="page1">
            <div className="page1__text">
              <h1>Hi, I am John,</h1>
              <h1>Creative Technologist</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <form>
                <button type="submit">Download Resume</button>
              </form>
            </div>
            <img src={page1_img} alt="img" />
          </div>

          {/* page - 1 ends  */}

          {/* page - 2 starts  */}

          <div className="page2">
            <div className="page2__box1">
              <h1>Recent posts</h1>
              <h2>View all</h2>
            </div>
            <div className="page2__box2">
              <div className="page2__box2-item">
                <h1>Making a design system from scratch</h1>
                <div className="page2__box2-item-text">
                  <h2 className="text1">12 Feb 2020</h2>
                  <h2 className="text2">Design, Pattern</h2>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="page2__box2-item">
                <h1>Creating pixel perfect icons in Figma</h1>
                <div className="page2__box2-item-text">
                  <h2 className="text1">12 Feb 2020</h2>
                  <h2 className="text2">Figma, Icon Design</h2>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>

          {/* page - 2 ends  */}

          {/* page - 3 starts */}

          <div className="page3">
            <h1>Featured works</h1>
            <div className="page3__box">
              <div className="page3__box-item">
                <img src={page3_img1} alt="img" />
                <div className="page3__box-item-text">
                  <h1>Designing Dashboards</h1>
                  <div className="page3__box-item-text-minitext">
                    <span>2020</span>
                    <h2>Dashboard</h2>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="page3__box-item">
                <img src={page3_img2} alt="img" />
                <div className="page3__box-item-text">
                  <h1>Vibrant Portraits of 2020</h1>
                  <div className="page3__box-item-text-minitext">
                    <span>2018</span>
                    <h2>Illustration</h2>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="page3__box-item">
                <img src={page3_img3} alt="img" />
                <div className="page3__box-item-text">
                  <h1>36 Days of Malayalam type</h1>
                  <div className="page3__box-item-text-minitext">
                    <span>2018</span>
                    <h2>Typography</h2>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* page - 3 ends  */}

          {/* main part ends  */}

          {/* footer part starts  */}

          <footer>
            <div className="logos">
              {" "}
              <a href="https://www.facebook.com" target="blank">
                <img src={facebook} alt="img" />
              </a>
              <a href="https://www.instagram.com" target="blank">
                <img src={instagram} alt="img" />
              </a>
              <a href="https://www.twitter.com" target="blank">
                <img src={twitter} alt="img" />
              </a>
              <a href="https://www.linkedin.com" target="blank">
                <img src={linkedin} alt="img" />
              </a>
            </div>
            <div className="text">
              <p>Copyright ©2020 All rights reserved </p>
            </div>
          </footer>
        </main>
      </>
    );
  }
}
