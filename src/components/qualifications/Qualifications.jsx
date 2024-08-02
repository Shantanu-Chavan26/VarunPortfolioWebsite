import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ICSE(Grade:94%)</h3>
                <span className="qualification__subtitle">
                  The Rosary School, Pune
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Grad May 2019<br/><br/><br/>
                </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> HSC(Grade:85%)</h3>
                <span className="qualification__subtitle">
                  The Arham Junior College, Camp
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Grad June 2021<br/><br/><br/>
                </div>
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in CSE (CGPA:8.18)</h3>
                <span className="qualification__subtitle">
                  MIT ADT University
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Grad June 2025<br/>
                </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  MIT ADT University
                </h3>
                <span className="qualification__subtitle">
                 
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 06/2021-06/2025 <br/><br/><br/>
                </div>
                </span>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                     Association of Computer Engineering Students 
                </h3>
                <span className="qualification__subtitle">
                Secretary 
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>08/2022-08/2023 <br/><br/><br/>
                </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                Google Developer students club
                </h3>
                <span className="qualification__subtitle">
                 Management Team Lead
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>09/2022-05/2024 <br/><br/><br/>
                </div>
                </span>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                
                  Salestine Technologies

                </h3>
                <span className="qualification__subtitle">
                Software Developer
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2024-12/2024 <br/><br/>
                </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                 Aerp Tech Pune
                </h3>
                <span className="qualification__subtitle">
                  C#/.NET developer
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2024-09/2024<br/><br/><br/>
                </div>
                </span>
              </div>
            </div> */}


        


            




            




              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
