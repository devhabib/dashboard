import React from "react";
import answerIcon from "../icons/answer.png";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="title">General Provision</h1>
        </div>
        <div className="col-lg-12 mt-34">
          {/* start: box 1 */}
          <div className="box">
            <div className="box__left">
              <p className="rounded__badge">1</p>
            </div>
            <div className="box__right">
              <div className="box__right--content">
                <h3>
                  Company Discription <span>*</span>
                </h3>
                <p>
                  Provide a short introduction of the company for the
                  stakeholders. You can drop establishment date, main
                  activities, the sector(s) in which it is active, main values
                  and etc. <br />
                  Note: Sectors can be identified according to categories, such
                  as the public or private sector; or industry-specific
                  categories.
                </p>
                <textarea placeholder="Write here"></textarea>
                <div className="answerToggler d-flex justify-content-between align-items-center">
                  <div className="answerToggler__left">
                    <div className="answerToggler__left--content d-flex align-items-center">
                      <img src={answerIcon} alt="" />
                      <p>Click here to see the sample answer</p>
                    </div>
                    <div className="answer__toggler--content d-none">
                      <p>This is a simple answer</p>
                    </div>
                  </div>
                  <div className="answerToggler__right">
                    <p>Maximum 1000 characters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* !END: box1 */}

          {/* Start: box 2 */}
          <div className="box">
            <div className="box__left">
              <p className="rounded__badge">2</p>
            </div>
            <div className="box__right">
              <div className="box__right--content">
                <h3>
                  Performance Indicator for your company <span>*</span>
                </h3>
                <p>
                  <strong>Select key indicators</strong> you want graph
                  visualise and <strong>fill data</strong> for reporting period.
                  You can add your own indicators by clicking{" "}
                  <strong>‘Other’</strong>, but total number cannot exceed 8
                  indicators.
                </p>
                <div className="box__right--form">
                  {/* <Form /> */}
                  <form>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form">
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                        <input
                          className="value"
                          type="text"
                          value="500"
                          readOnly
                        />
                      </div>
                      <div className="form__single">
                        <input type="checkbox" />
                        <input type="text" value="Total Employee" readOnly />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* !End: box 2 */}

          {/* Start Box 3 */}
          <div className="box">
            <div className="box__left">
              <p className="rounded__badge">2</p>
            </div>
            <div className="box__right">
              <div className="box__right--content">
                <h3>
                  Six KEY company events <span>*</span>
                </h3>
                <p>
                  Please specify a month and provide short description of a key
                  event during your reporting period
                </p>
                <div className="box__right--dropdown">
                  <div className="dropdown__single">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={"Open this select menu"}
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea rows="" cols=""></textarea>
                  </div>
                  <div className="dropdown__single">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea rows="" cols=""></textarea>
                  </div>
                  <div className="dropdown__single">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea rows="" cols=""></textarea>
                  </div>
                  <div className="dropdown__single">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea rows="" cols=""></textarea>
                  </div>
                  <div className="dropdown__single">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea rows="" cols=""></textarea>
                  </div>
                  <div className="dropdown__single">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea rows="" cols=""></textarea>
                  </div>
                </div>
                <div className="box__right--comment">
                  <p className="comment__title">Comment</p>
                  <textarea className="comment__area"></textarea>
                  <p className="comment__requirement">
                    Maximum 1000 characters
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* !End: box 3 */}
        </div>
      </div>
    </div>
  );
};

export default Home;
