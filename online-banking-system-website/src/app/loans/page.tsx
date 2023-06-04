"use client";
import Link from "next/link";
import { useState } from "react";

export default function Loans() {
  const [showReminderAlert, setShowReminderAlert] = useState(false);

  const handleButtonClick = () => {
    setShowReminderAlert(true);

    setTimeout(() => {
      setShowReminderAlert(false); // Redirect to another page after a certain amount of time
    }, 3000); // Change the time (in milliseconds) as per your requirement
  };

  return (
    <div>
      <div>
        <div className="ReminderAlert">
          {showReminderAlert && (
            <div className="alert alert-success">
              <i className="bi bi-check-circle-fill me-2"></i>
              Reminder Set!
            </div>
          )}
        </div>
        <div>
          <div>
            <div className="row mb-5">
              <div className="col-3"></div>
              <div className="col-5">
                <div className="d-grid gap-2">
                  <Link
                    className="btn btn-primary btn-lg w-100 h-100"
                    type="button"
                    href="/loans/loan-application"
                  >
                    Apply For A Loan
                  </Link>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <div className="row">
                  <div className="col ms-4 mt-3">
                    <div className="card-title d-flex justify-content-center text-bold fs-4">
                      Client Loans
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row h-100 d-flex">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Loan Info</div>
                          <h5>Loan Status : </h5>{" "}
                          <span className="badge text-bg-info">Active</span>
                          <hr></hr> <h5>Loan Approval Date : </h5>{" "}
                          <p>12/08/2022</p>
                          <hr></hr> <h5>Interest : </h5> <p>12%</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Installments</div>
                          <h5>Next Installment Due : </h5> <p>17/6/2023</p>
                          <hr></hr> <h5>Installments Paid : </h5> <p>6</p>
                          <hr></hr> <h5>Installments Remaining : </h5> <p>14</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-8"></div>
                    <div className="col-4 mt-4 mb-3">
                      <button
                        className="btn btn-info"
                        role="button"
                        onClick={handleButtonClick}
                      >
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="card-body">
                  <div className="row h-100 d-flex">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Loan Info</div>
                          <h5>Loan Status : </h5>{" "}
                          <span className="badge text-bg-success">
                            Fully Paid
                          </span>
                          <hr></hr> <h5>Loan Approval Date : </h5>{" "}
                          <p>24/09/2019</p>
                          <hr></hr> <h5>Interest : </h5> <p>20%</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Installments</div>
                          <h5>Next Installment Due : </h5> <p>NA</p>
                          <hr></hr> <h5>Installments Paid : </h5> <p>20</p>
                          <hr></hr> <h5>Installments Remaining : </h5> <p>0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-8"></div>
                    <div className="col-4 mt-4 mb-3">
                      <button
                        className="btn btn-info"
                        role="button"
                        onClick={handleButtonClick}
                        disabled
                      >
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="card-body">
                  <div className="row h-100 d-flex">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Loan Info</div>
                          <h5>Loan Status : </h5>{" "}
                          <span className="badge text-bg-info">Active</span>
                          <hr></hr> <h5>Loan Approval Date : </h5>{" "}
                          <p>01/01/2023</p>
                          <hr></hr> <h5>Interest : </h5> <p>10%</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Installments</div>
                          <h5>Next Installment Due : </h5> <p>30/8/2023</p>
                          <hr></hr> <h5>Installments Paid : </h5> <p>3</p>
                          <hr></hr> <h5>Installments Remaining : </h5> <p>17</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-8"></div>
                    <div className="col-4 mt-4 mb-3">
                      <button
                        className="btn btn-info"
                        role="button"
                        onClick={handleButtonClick}
                      >
                        Set Reminder
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card mt-3 ms-2 me-2">
              <div className="row">
                <div className="col-md-6 mx-auto calculate-form">
                  <div className="card card-body text-center mt-5">
                    <h1 className="heading display-5 pb-3">Loan Calculator</h1>
                    <form id="loan-form">
                      <div className="form-group mb-2">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input
                            type="number"
                            className="form-control"
                            id="amount"
                            placeholder="Loan Amount"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <div className="input-group">
                          <span className="input-group-text">%</span>
                          <input
                            type="number"
                            className="form-control"
                            id="interest"
                            placeholder="Interest"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <input
                          type="number"
                          id="years"
                          className="form-control"
                          placeholder="Years To Repay"
                        />
                      </div>
                      <div className="form-group mb-2">
                        <input
                          type="submit"
                          value="Calculate"
                          className="btn btn-block btn-primary btn-lg w-75 mt-2 mb-2"
                        />
                      </div>
                      <hr></hr>
                    </form>
                    {/* <div id="loading">
              <img
                src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                alt=""
              />
            </div> */}
                    <div id="result">
                      <h5>Results</h5>
                      <div className="form-group mb-2">
                        <div className="input-group">
                          <span className="input-group-text">
                            Monthly Payment
                          </span>
                          <input
                            type="number"
                            className="form-control"
                            id="monthly-payment"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <div className="input-group">
                          <span className="input-group-text">
                            Total Payment
                          </span>
                          <input
                            type="number"
                            className="form-control"
                            id="total-payment"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <div className="input-group">
                          <span className="input-group-text">
                            Total Interest
                          </span>
                          <input
                            type="number"
                            className="form-control"
                            id="total-interest"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
