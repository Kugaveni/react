import React from "react";

function Contacts() {
    return(
        <div>
        <section id="contact" className=" pt-6hero  has-background-black block py-6 custom-font">
          <div className="column is-4 mx-auto">
            <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
            </h2><h1 className="title is-5 ml-6 has-text-danger">Get in Touch with me</h1>
            <div className="title-underline" />
          </div>
          <div className="hero-body">
            <div className="column is-5 mx-auto">
              <div className="title-underline" />
            </div>
            <div className="columns mx-0">
              <div className="column is-5 m-auto p-6 ">
                <p data-aos="fade-up">
                </p><h2 className="title is-3 has-text-white">
                  Always available for freelancing or just for a tech talk<br /><br />
                  <span className="icon">
                    <i className="fas fa-phone" />
                  </span> : 0775541827<br /><br />
                  <span className="icon">
                    <i className="fas fa-envelope-square" />
                  </span>          
                  : meena@gmail.com
                </h2><br />
                <p />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Contacts;