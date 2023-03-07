import React from "react";

function Exp() {
  return (
    <div>
      <section id="exp" className=" hero is-black block py-6 custom-font">
        <div className="hero-body">
          <h2
            data-aos="fade-out"
            className="title has-text-centered is-uppercase has-text-danger"
          >
            <span className="icon">
              <i className="fas fa-book" />
            </span>
            My Expertise
          </h2>
          <div className="column is-4 mx-auto">
            <div className="title-underline" />
          </div>
          <div className="columns mx-0">
            <div className="column is-5 m-auto p-6 ">
              <p data-aos="fade-up"></p>
              <ul>
                <li> HTML </li>
                <li> CSS </li>
                <li> JS </li>
                <li>Figma</li>
                <li>Canva</li>
                <li>C Programming</li>
                <li>Python Programming</li>
                <li>C++ Programming</li>
              </ul>
              <p />
            </div>
            <figure
              data-aos="fade-down"
              className="image p-6 m-auto column is-5"
            >
              <img className src="./2.jpg" alt="" width={480} height={480} />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Exp;
