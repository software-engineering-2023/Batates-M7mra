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
    }, 2000)
  };
  const onClickDeclined = () => {
    setShowApproval(true);
    setShowDeclination(false);
    setTimeout(() => {
      setShowDeclination(false);
    }, 2000)
  };

  return (
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
          <div className="card mt-3">
            <div className="card-body">
              <div className="card-title fs-3">Loan Request 1</div>
              <div className="row">
                <div className="col">
                  <div className="text fs-4">Client : Ahmed Ayman Gomaa</div>
                  <div className="text fs-4">Date : 3/1/2023</div>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg mb-5"
                    data-bs-toggle="modal"
                    data-bs-target="#loan1"
                  >
                    View Information
                  </button>
                </div>
              </div>
              <div className="modal fade" id="loan1" tabIndex={-1}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Loan 1</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h4>Client Name : </h4> <p>Ahmed Ayman Ahmed Gomaa</p>
                      <hr></hr> <h4>Requested Amount : </h4> <p>$60k</p>
                      <hr></hr> <h4>Net Annual Income : </h4>
                      <p>$12</p>
                      <hr></hr> <h4>Type & Reason : </h4>
                      <p>Car Loan</p>
                      <hr></hr> <h4>Marital Status : </h4>
                      <p>Single</p>
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

          <div className="card-title"></div>
          <div>
            <div className="card mt-3">
              <div className="card-body">
                <div className="card-title fs-3">Loan Request 2</div>
                <div className="row">
                  <div className="col">
                    <div className="text fs-4">Client : Mathew Hany</div>
                    <div className="text fs-4">Date : 15/12/2022</div>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg mb-5"
                      data-bs-toggle="modal"
                      data-bs-target="#loan1"
                    >
                      View Information
                    </button>
                  </div>
                </div>
                <div className="modal fade" id="loan1" tabIndex={-1}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Loan 1</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>Mathew Hany Requested A massive loan BIG!</p>
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
        </div>
        <div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="card-title fs-3">Loan Request 3</div>
              <div className="row">
                <div className="col">
                  <div className="text fs-4">Client : 37-12580</div>
                  <div className="text fs-4">Date : 15/1/2023</div>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg mb-5"
                    data-bs-toggle="modal"
                    data-bs-target="#loan1"
                  >
                    View Information
                  </button>
                </div>
              </div>
              <div className="modal fade" id="loan1" tabIndex={-1}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Loan 1</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>Ahmed Gomaa Requested A massive loan BIG!</p>
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
      </div>
      <div>
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-title fs-3">Loan Request 4</div>
            <div className="row">
              <div className="col">
                <div className="text fs-4">Client : 52-11911</div>
                <div className="text fs-4">Date : 3/1/2025</div>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg mb-5"
                  data-bs-toggle="modal"
                  data-bs-target="#loan1"
                >
                  View Information
                </button>
              </div>
            </div>
            <div className="modal fade" id="loan1" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Loan 1</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Ahmed Gomaa Requested A massive loan BIG!</p>
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
    </div>
  );
}
