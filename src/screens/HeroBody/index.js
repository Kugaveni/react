import React from "react";

function HeroBody() {
  return (
    <div>
      <section id="port" className="pt-6 hero is-black block py-6 custom-font">
        <div className="hero-body">
          <div className="column is-4 mx-auto">
            <div className="title-underline" />
          </div>
          <div className="columns mx-0">
            <div className="column is-5 m-auto p-6 ">
              <p data-aos="fade-up"></p>
              <h2 className="title is-5 has-text-white">
                Hey,I am Kugaveni Rajarajeshwaran
              </h2>
              <br />
              <h1 className="title is-1 ml-6 has-text-white">I am a </h1>
              <h2 className="title is-1 has-text-white">Software Engineer</h2>
              <h2 className="title is-6 has-text-white">
                {" "}
                creatively blending Users need with business goals to help
                brands get consistently successful product.{" "}
              </h2>
              <p />
            </div>
            <figure
              data-aos="fade-down"
              className="image p-6 m-auto column is-5"
            >
              <img className src="./1.jpg" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBody;
