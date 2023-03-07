import React from "react";

function Edu() {
  return (
    <div>
      <section id="edu" className="hero pt-6 has-background-black block py-6 custom-font">
        <div className="column is-4 mx-auto">
          <h2
            data-aos="fade-out"
            className="title has-text-centered is-uppercase has-text-danger"
          >
            <span className="icon">
              <i className="fas fa-book" />
            </span>
            Educational Qualifications
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
                          <h4 className="title is-5">Bachelor's Degree</h4>
                          2019-Present
                          <br />
                          University of Colombo School of Computing(UCSC)
                          <br />
                          <br />
                          Currently following CIMA as well
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="box">
                        <div className="content">
                          <h4 className="title is-5">School Education</h4>
                          2006-2011
                          <br />
                          Bd/Passara Tamil Maha Vidyalaya
                          <br />
                          2011-2019
                          <br />
                          J/Vembadi Girl's High School
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

export default Edu;
