import React, { useState } from "react";
import "./services.css";
import { Icon } from '@iconify/react';
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
          <a
            className="services__icon"
            >
            <Icon icon="zondicons:code" />
            </a>
            <h3 className="services__title">
             Website <br /> Development
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Website Development</h3>
              <p className="services__modal-description">
              I specialize in crafting web-platform apps that blend seamless functionality with captivating design.🚀
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">User Interface Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Front-End Designing/Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Back-End Development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>






        <div className="services__content">
          <div>
          <a
            className="services__icon"
            >
         <Icon icon="mdi:cloud" />

            </a>
            <h3 className="services__title">
            Applications Containerization 
            </h3>
          </div>
          <span
            onClick={() => {
              toggleTab(2);
            }}
            className="services__button"
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

<h3 className="services__title">
             Applications Containerization 
            </h3>
              <p className="services__modal-description">
              Experienced in adeptly guiding projects to success, my strong leadership, organizational skills, and knack for fostering teamwork make me a reliable choice for managerial services. 
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Docker Containerization</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Docker Compose Setup
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">CI/CD Pipelines </p>
                </li>
              </ul>
            </div>
          </div>
        </div>








        <div className="services__content">
          <div>
            <a
            className="services__icon"
            >
          <Icon icon="mdi:clipboard-text" />

            </a>
        
            <h3 className="services__title">
              Management <br />Skills
            </h3>
          </div>
          <span
            onClick={() => {
              toggleTab(3);
            }}
            className="services__button"
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Management Skills</h3>
              <p className="services__modal-description">
              Experienced in adeptly guiding projects to success, my strong leadership, organizational skills, and knack for fostering teamwork make me a reliable choice for managerial services. 
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Held Multiple Leadership Roles</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Well versed in Agile Methodologies
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Great knowledge of Scrum</p>
                </li>
              </ul>
            </div>
          </div>
        </div>





        









      </div>
    </section>
  );
};

export default Services;
