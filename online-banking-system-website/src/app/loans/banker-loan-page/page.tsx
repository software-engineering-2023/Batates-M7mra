"use client";
import Link from "next/link";
import { useState } from "react";

export default function Loans() {
  const [showApproval, setShowApproval] = useState(false);
  const [showDeclination, setShowDeclination] = useState(false);
  const onClickApproved = () => {
    setShowApproval(true);
    setShowDeclination(false);
    setTimeout(() => {
      setShowApproval(false);
    }, 2000);
  };
  const onClickDeclined = () => {
    setShowApproval(false);
    setShowDeclination(true);
    setTimeout(() => {
      setShowDeclination(false);
    }, 2000);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      {showApproval && (
                        <div className="row">
                          <div className="col-4"></div>
                          <div className="col-4">
                            <div className="alert alert-success fs-6 ms-2">
                              Loan Approved
                            </div>
                          </div>
                        </div>
                      )}
                      {showDeclination && (
                        <div className="row">
                          <div className="col-4"></div>
                          <div className="col-4">
                            <div className="alert alert-danger fs-6 ms-2">
                              Loan Declined
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="modal fade" id="loan1" tabIndex={-1}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Request Info</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <h4>Client Name : </h4>{" "}
                              <p>Ahmed Ayman Ahmed Gomaa</p>
                              <hr></hr> <h4>Requested Amount : </h4> <p>$60k</p>
                              <hr></hr> <h4>Net Annual Income : </h4>
                              <p>$12</p>
                              <hr></hr> <h4>Net Monthly Income : </h4>
                              <p>$1</p>
                              <hr></hr> <h4>Type & Reason : </h4>
                              <p>Car Loan</p>
                              <hr></hr> <h4>Marital Status : </h4>
                              <p>Single</p>
                              <hr></hr> <h4>Occupation : </h4>
                              <p>Chemist</p>
                              <hr></hr> <h4>Years of Experience : </h4>
                              <p>3</p>
                              <hr></hr> <h4>Desired Installment : </h4>
                              <p>$10</p>
                              <hr></hr> <h4>Comments : </h4>
                              <p>NA</p>
                              <hr></hr>
                              <h4>Bank References</h4>
                              <p>Bank:SPB, Account# : 10291029501 </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                className="btn btn-success btn-lg w-100 h-100"
                                type="button"
                                data-bs-dismiss="modal"
                                onClick={onClickApproved}
                              >
                                Approve Loan
                              </button>
                              <button
                                className="btn btn-danger btn-lg w-100 h-100"
                                type="button"
                                data-bs-dismiss="modal"
                                onClick={onClickDeclined}
                              >
                                Decline Loan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="loan2" tabIndex={-1}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Request Info</h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <h4>Client Name : </h4> <p>Mathew Hany Bestawy</p>
                          <hr></hr> <h4>Requested Amount : </h4> <p>$100k</p>
                          <hr></hr> <h4>Net Annual Income : </h4>
                          <p>$1000</p>
                          <hr></hr> <h4>Net Monthly Income : </h4>
                          <p>$98</p>
                          <hr></hr> <h4>Type & Reason : </h4>
                          <p>Personal Loan, big purchase</p>
                          <hr></hr> <h4>Marital Status : </h4>
                          <p>Married</p>
                          <hr></hr> <h4>Occupation : </h4>
                          <p>Restaurant Manager</p>
                          <hr></hr> <h4>Years of Experience : </h4>
                          <p>15</p>
                          <hr></hr> <h4>Desired Installment : </h4>
                          <p>$70</p>
                          <hr></hr> <h4>Comments : </h4>
                          <p>A previous loan is still active</p>
                          <hr></hr>
                          <h4>Bank References</h4>
                          <p>Bank:MIB, Account# : 198510257081 </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-success btn-lg w-100 h-100"
                            type="button"
                            data-bs-dismiss="modal"
                            onClick={() => {
                              setShowApproval(true);
                              setShowDeclination(false);
                            }}
                          >
                            Approve Loan
                          </button>
                          <button
                            className="btn btn-danger btn-lg w-100 h-100"
                            type="button"
                            data-bs-dismiss="modal"
                            onClick={() => {
                              setShowApproval(false);
                              setShowDeclination(true);
                            }}
                          >
                            Decline Loan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className="modal fade" id="loan3" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Request Info</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h4>Client Name : </h4> <p>Rafeek Bassem Nabih</p>
                    <hr></hr> <h4>Requested Amount : </h4> <p>$45k</p>
                    <hr></hr> <h4>Net Annual Income : </h4>
                    <p>$1M</p>
                    <hr></hr> <h4>Net Monthly Income : </h4>
                    <p>$1</p>
                    <hr></hr> <h4>Type & Reason : </h4>
                    <p>Car Loan</p>
                    <hr></hr> <h4>Marital Status : </h4>
                    <p>Single</p>
                    <hr></hr> <h4>Occupation : </h4>
                    <p>Horse Trainer</p>
                    <hr></hr> <h4>Years of Experience : </h4>
                    <p>10</p>
                    <hr></hr> <h4>Desired Installment : </h4>
                    <p>$50</p>
                    <hr></hr> <h4>Comments : </h4>
                    <p>NA</p>
                    <hr></hr>
                    <h4>Bank References</h4>
                    <p>Bank:SKB, Account# : 6672039720 </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-success btn-lg w-100 h-100"
                      type="button"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        setShowApproval(true);
                        setShowDeclination(false);
                      }}
                    >
                      Approve Loan
                    </button>
                    <button
                      className="btn btn-danger btn-lg w-100 h-100"
                      type="button"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        setShowApproval(false);
                        setShowDeclination(true);
                      }}
                    >
                      Decline Loan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="modal fade" id="loan4" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Request Info</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4>Client Name : </h4> <p>Mostafa Abdelreheem Amory</p>
                <hr></hr> <h4>Requested Amount : </h4> <p>$300k</p>
                <hr></hr> <h4>Net Annual Income : </h4>
                <p>$650</p>
                <hr></hr> <h4>Net Monthly Income : </h4>
                <p>$100</p>
                <hr></hr> <h4>Type & Reason : </h4>
                <p>Personal Loan, insurance</p>
                <hr></hr> <h4>Marital Status : </h4>
                <p>Married</p>
                <hr></hr> <h4>Occupation : </h4>
                <p>Police Officer</p>
                <hr></hr> <h4>Years of Experience : </h4>
                <p>1</p>
                <hr></hr> <h4>Desired Installment : </h4>
                <p>$12</p>
                <hr></hr> <h4>Comments : </h4>
                <p>NA</p>
                <hr></hr>
                <h4>Bank References</h4>
                <p>Bank:AGB, Account# : 59561059225 </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success btn-lg w-100 h-100"
                  type="button"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setShowApproval(true);
                    setShowDeclination(false);
                  }}
                >
                  Approve Loan
                </button>
                <button
                  className="btn btn-danger btn-lg w-100 h-100"
                  type="button"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setShowApproval(false);
                    setShowDeclination(true);
                  }}
                >
                  Decline Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-dark table-striped mt-4">
        <thead>
          <tr>
            <th scope="col" className="fs-5">#</th>
            <th>Request ID</th>
            <th scope="col" className="fs-5">Client</th>
            <th scope="col" className="fs-5">Date</th>
            <th scope="col" className="fs-5">Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Request 1</td>
            <td>Ahmed Ayman Gomaa</td>
            <td>3/1/2023</td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#loan1"
              >
                View Information
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Request 2</td>
            <td>Mathew Hany</td>
            <td>3/2/2022</td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#loan2"
              >
                View Information
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Request </td>
            <td>Rafeeq Bassem</td>
            <td>20/5/2023</td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#loan3"
              >
                View Information
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Request 4</td>
            <td>Mostafa Amory</td>
            <td>14/6/2023</td>
            <td>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#loan4"
              >
                View Information
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
