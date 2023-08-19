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
                <h3 className="qualification__title">ICSE(Grade:92%)</h3>
                <span className="qualification__subtitle">
                  The Bishop's School, Camp
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Grad May 2018<br/><br/><br/>
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
                <h3 className="qualification__title"> ISC(Grade:87%)</h3>
                <span className="qualification__subtitle">
                  The Bishop's School, Camp
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Grad June 2020<br/><br/><br/>
                </div>
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in CSE (CGPA:8.07)</h3>
                <span className="qualification__subtitle">
                  MIT ADT University
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Grad May 2024<br/>
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
                  Teaching Assistant
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2021-05/2022 <br/><br/><br/>
                </div>
                </span>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  CodeChef MITSOE Chapter
                </h3>
                <span className="qualification__subtitle">
                  President
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 08/2021-08/2022<br/><br/><br/>
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
                  The Eastern Royal Company
                </h3>
                <span className="qualification__subtitle">
                  Flutter Developer
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 06/2022-12/2022 <br/><br/><br/>
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
                  President
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 08/2022-08/2023<br/><br/>
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
                  Techno Cultural Persona Fest
                </h3>
                <span className="qualification__subtitle">
                  Head Student Co-ordinator
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 02/2022-03/2022 <br/><br/><br/>
                </div>
                </span>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  5th National Conference
                </h3>
                <span className="qualification__subtitle">
                  Head Student Co-ordinator
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 04/2023-05/2023<br/>
                </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            




            




              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
