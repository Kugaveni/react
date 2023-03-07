import React from "react";

function Results() {
  return (
    <div>
      <div id="results" className="pt-6" />
      <section className="hero  has-background-black block py-6 custom-font">
        <div className="column is-4 mx-auto">
          <h2
            data-aos="fade-out"
            className="title has-text-centered is-uppercase has-text-danger"
          >
            <span className="icon">
              <i className="fas fa-book" />
            </span>
            Results
          </h2>
          <div className="title-underline" />
        </div>
        <div className="hero-body">
          <div className="column is-4 mx-auto">
            <div className="title-underline" />
          </div>
          <div className="columns mx-0">
            <div className="column is-5 m-auto p-6 ">
              <p data-aos="fade-up"></p>
              <h2 className="title is-3 has-text-black">
                <div className="container">
                  <div className="columns">
                    <div className="column">
                      <div className="box">
                        <div className="content">
                          <h4 className="title is-2"> O/L Results</h4>
                          <br />
                          <ol>
                            <li> English : A </li>
                            <li> Mathematics : A </li>
                            <li> Science : A </li>
                            <li> Religion : A </li>
                            <li> Tamil : A </li>
                            <li> English Literature : B </li>
                            <li> History : A </li>
                            <li> ICT : A </li>
                            <li> Commerce : A </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="box">
                        <div className="content">
                          <h4 className="title is-2">A/L Results </h4>
                          <br />
                          <ul>
                            <li> Biology : A </li>
                            <li> Chemistry : B </li>
                            <li> Physics : C </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p />
                </div>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Results;
