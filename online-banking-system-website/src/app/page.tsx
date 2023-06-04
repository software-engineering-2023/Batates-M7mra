"use client";

import Link from "next/link";
import { CreditCard } from "./credit-cards/page";
import { useContext, useState } from "react";
import { GlobalStateContext } from "./layout";
import { UserType } from "@/types";

export default function Home() {
  const { user } = useContext(GlobalStateContext);

  const [showDefaultCardAlert, setDefaultCardAlert] = useState(false);
  const [showAdminAlert, setShowAdminAlert] = useState(false);

  return (
    <div className="container">
      <div className="row g-2">
        {user?.type == UserType.CLIENT && (
          <>
            <div className="col-xl-8 col-md-12 d-flex flex-column gap-3">
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-bell"></i> Announcements
                </div>
                <div
                  className="list-group list-group-flush"
                  style={{ borderRadius: 20 }}
                >
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Maintenance</div>A scheduled
                      maintenance on our online banking system on{" "}
                    </div>
                    <small>
                      2 hours ago <i className="bi bi-envelope-fill ms-2"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Ahmed Gomaa</div>
                      meen ahmed gomaa da?
                    </div>
                    <small>
                      3 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">New Bank Interest Rate</div>
                      We are excited to inform you that starting from next month
                    </div>
                    <small>
                      21 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Report 6401 Resolved</div>
                      Your report has been solved succesfully review now !
                    </div>
                    <small>
                      3 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column gap-2">
                    <div className="text-muted fs-5">Total Balance</div>
                    <div className="fs-1">+ $1,000,500</div>
                    <hr />
                    <Link
                      className="btn btn-primary btn-lg"
                      href="/bank-accounts"
                    >
                      View All Accounts
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  {showDefaultCardAlert && (
                    <div className="alert alert-success">
                      Default card changed successfully.
                    </div>
                  )}
                  <CreditCard
                    name={user?.name ?? "Ahmed Mohsen"}
                    number="1234 5678 1432 1433"
                    endMonth={13}
                    endYear={2027}
                  />
                </div>
                <div className="card-footer">
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <Link
                        className="btn btn-primary w-100"
                        href="/credit-cards"
                      >
                        View All Cards
                      </Link>
                    </div>

                    <div className="col-lg-6">
                      <button
                        className="btn btn-secondary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#default-card-modal"
                      >
                        Choose default card
                      </button>
                    </div>

                    <div
                      className="modal fade"
                      id="default-card-modal"
                      tabIndex={-1}
                      aria-labelledby="default-card-modal-label"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="default-card-modal-label"
                            >
                              Choose default card
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                <div className="form-check d-flex justify-content-evenly align-items-center">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                  >
                                    <CreditCard
                                      name="Rafeek Bassem"
                                      number="01206457557109"
                                      endYear={26}
                                      endMonth={10}
                                    />
                                  </label>
                                </div>
                              </li>
                              <li className="list-group-item p-3">
                                <div className="form-check d-flex justify-content-evenly align-items-center">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                  >
                                    <CreditCard
                                      name="Rafeek Bassem"
                                      number="16098760129367"
                                      endYear={30}
                                      endMonth={11}
                                    />
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                setDefaultCardAlert(true);

                                setTimeout(() => {
                                  setDefaultCardAlert(false);
                                }, 3000);
                              }}
                            >
                              Set as default
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card mb-3">
                <div className="card-header">Reminders</div>
                <ul
                  className="list-group list-group-flush"
                  style={{ borderRadius: 15 }}
                >
                  <li className="list-group-item  d-flex gap-3 align-items-center">
                    <div
                      className=" bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className={"bi bi-droplet"}></i>
                    </div>
                    <div className="d-flex justify-content-center  flex-column ">
                      <div>Water Bill</div>
                      <div> $230 </div>
                    </div>
                    <div className="d-flex justify-content-evenly flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">Tomorrow</small>
                      <div>
                        <Link
                          className="btn btn-primary"
                          href="/bills/payment-form"
                        >
                          Pay
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item  d-flex gap-3 align-items-center">
                    <div
                      className=" bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className={"bi bi-phone"}></i>
                    </div>
                    <div className="d-flex justify-content-center  flex-column ">
                      <div>Phone Bill</div>
                      <div> $130 </div>
                    </div>
                    <div className="d-flex justify-content-evenly align-items-end flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">Next Week</small>
                      <div>
                        <Link
                          className="btn btn-primary"
                          href="/bills/payment-form"
                        >
                          Pay
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item  d-flex gap-3 align-items-center">
                    <div
                      className=" bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className={"bi bi-cash"}></i>
                    </div>
                    <div className="d-flex justify-content-center  flex-column ">
                      <div>Loan Payment</div>
                      <div> $1300 </div>
                    </div>
                    <div className="d-flex justify-content-evenly flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">
                        1, July 2023
                      </small>
                      <div>
                        <Link
                          className="btn btn-primary"
                          href="/bills/payment-form"
                        >
                          Pay
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item  d-flex gap-3 align-items-center">
                    <div
                      className=" bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className={"bi bi-credit-card"}></i>
                    </div>
                    <div className="d-flex justify-content-center  flex-column ">
                      <div>Credit Card Payment</div>
                      <div>$500</div>
                    </div>
                    <div className="d-flex justify-content-evenly flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">
                        {" "}
                        Due in 6 days
                      </small>
                      <div>
                        <Link
                          className="btn btn-primary"
                          href="/bills/payment-form"
                        >
                          Pay
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item  d-flex gap-3 align-items-center">
                    <div
                      className=" bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className={"bi bi-lightning"}></i>
                    </div>
                    <div className="d-flex justify-content-center  flex-column ">
                      <div>Electricity Bill</div>
                      <div>$300</div>
                    </div>
                    <div className="d-flex justify-content-evenly flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">Tomorrow</small>
                      <div>
                        <Link
                          className="btn btn-primary"
                          href="/bills/payment-form"
                        >
                          Pay
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-flag me-2"></i>
                  Track Your Reports
                </div>
                <div
                  className="list-group list-group-flush"
                  style={{ borderRadius: 20 }}
                >
                  <a
                    href="/report/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold d-flex justify-content-between">
                        Stolen Card
                        <small>
                          3 minutes ago{" "}
                          <i className="bi bi-envelope-open-fill"></i>
                        </small>
                      </div>
                      We have caught el 7aramy go check who is the theft!
                    </div>
                  </a>
                  <a
                    href="/report/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold d-flex justify-content-between">
                        Website freeze
                        <small>
                          2 hours ago
                          <i className="bi bi-envelope-fill ms-2"></i>
                        </small>
                      </div>
                      A scheduled maintenance on our online banking system on{" "}
                      <strong>June 15th, 2023</strong> to solve this problem
                    </div>
                  </a>

                  <a
                    href="/report/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold d-flex justify-content-between">
                        Report 6401 Resolved
                        <small>
                          3 days ago{" "}
                          <i className="bi bi-envelope-open-fill"></i>
                        </small>
                      </div>
                      Your report has been solved succesfully review now !
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {user?.type == UserType.ADMIN && (
          <>
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-bell"></i> Announcements
                </div>
                <div
                  className="list-group list-group-flush"
                  style={{ borderRadius: 20 }}
                >
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Maintenance</div>A scheduled
                      maintenance on our online banking system on{" "}
                    </div>
                    <small>
                      2 hours ago <i className="bi bi-envelope-fill ms-2"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Ahmed Gomaa</div>
                      meen ahmed gomaa da?
                    </div>
                    <small>
                      3 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">New Bank Interest Rate</div>
                      We are excited to inform you that starting from next month
                    </div>
                    <small>
                      21 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Report 6401 Resolved</div>
                      Your report has been solved succesfully review now !
                    </div>
                    <small>
                      3 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              {showAdminAlert && (
                <div className="alert alert-success">
                  <i className="bi bi-check-circle-fill me-2"></i> Action done successfully!
                </div>
              )}
              <div className="card">
                <div className="card-header">Maintainance</div>
                <div className="card-body">
                  <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-md-1">
                    <div className="col">
                      <button
                        className="btn btn-primary w-100"
                        style={{ height: 100 }}
                        onClick={() => {
                          setShowAdminAlert(true);
                          setTimeout(() => {
                            setShowAdminAlert(false);
                          }, 3000);
                        }}
                      >
                        <i className="bi bi-cloud-download me-3"></i> Backup
                        System
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-success w-100"
                        style={{ height: 100 }}
                        onClick={() => {
                          setShowAdminAlert(true);
                          setTimeout(() => {
                            setShowAdminAlert(false);
                          }, 3000);
                        }}
                      >
                        <i className="bi bi-cloud-upload-fill me-3"></i>
                        Restore System
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-info w-100"
                        style={{ height: 100 }}
                        onClick={() => {
                          setShowAdminAlert(true);
                          setTimeout(() => {
                            setShowAdminAlert(false);
                          }, 3000);
                        }}
                      >
                        <i className="bi bi-body-text me-3"></i>
                        Show Logs
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-danger w-100"
                        style={{ height: 100 }}
                        onClick={() => {
                          setShowAdminAlert(true);
                          setTimeout(() => {
                            setShowAdminAlert(false);
                          }, 3000);
                        }}
                      >
                        <i className="bi bi-trash me-3"></i>
                        Clear Logs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {user?.type == UserType.BANKER && (
          <>
            <div className="col-xl-6 col-lg-12 d-flex flex-column gap-2">
              <div className="card">
                <div className="card-header">Clients</div>
                <div className="card-body">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search by Customer Name or National ID ..."
                  />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>ID</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ahmed Gomaa</td>
                          <td>12345678912345</td>
                          <td>
                            <Link
                              href="/registration/registration-approval/registration-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Mathew Hany</td>
                          <td>12345389245332345</td>
                          <td>
                            <Link
                              href="/registration/registration-approval/registration-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Rafeek Baseem</td>
                          <td>5848504935894753</td>
                          <td>
                            <Link
                              href="/registration/registration-approval/registration-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Boles Waheed</td>
                          <td>597492840359293</td>
                          <td>
                            <Link
                              href="/registration/registration-approval/registration-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Credit Cards</div>
                <div className="card-body">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search by Credit Card Number"
                  />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Number</th>
                          <th>Client</th>
                          <th>Balance</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1234 3434 2425 1213</td>
                          <td>Mathew Hany</td>
                          <td>$1234</td>
                          <td>
                            <Link
                              href="/credit-cards/open-approval/open-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>1543 5982 1414 232</td>
                          <td>Boles Waheed</td>

                          <td>$12034</td>
                          <td>
                            <Link
                              href="/credit-cards/open-approval/open-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>1321 5348 1434 1223</td>
                          <td>Rafeek Bassem</td>

                          <td>$132</td>
                          <td>
                            <Link
                              href="/credit-cards/open-approval/open-approval-info"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Loans</div>
                <div className="card-body">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search by Client Name"
                  />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Amount</th>
                          <th>Client</th>
                          <th>Type</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>$10000</td>
                          <td>Mathew Hany</td>
                          <td>Car</td>
                          <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#loan1"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>$25243</td>
                          <td>Boles Waheed</td>
                          <td>Personal</td>
                          <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#loan1"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>$5345353</td>
                          <td>Rafeek Bassem</td>
                          <td>Car</td>
                          <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#loan1"
                              className="btn btn-primary btn-sm"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="modal fade" id="loan1" tabIndex={-1}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Loan Info</h5>
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
                            <hr></hr> <h4>Amount : </h4> <p>$60k</p>
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
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="card mb-3">
                <div className="card-header">
                  <i className="bi bi-bell"></i> Announcements
                </div>
                <div
                  className="list-group list-group-flush"
                  style={{ borderRadius: 20 }}
                >
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Maintenance</div>A scheduled
                      maintenance on our online banking system on{" "}
                    </div>
                    <small>
                      2 hours ago <i className="bi bi-envelope-fill ms-2"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Ahmed Gomaa</div>
                      meen ahmed gomaa da?
                    </div>
                    <small>
                      3 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">New Bank Interest Rate</div>
                      We are excited to inform you that starting from next month
                    </div>
                    <small>
                      21 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                  <a
                    href="/announcement/details"
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Report 6401 Resolved</div>
                      Your report has been solved succesfully review now !
                    </div>
                    <small>
                      3 days ago <i className="bi bi-envelope-open-fill"></i>
                    </small>
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Other Actions</div>
                <div className="card-body">
                  <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-1 g-3">
                    <div className="col">
                      <Link
                        className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                        style={{ height: 100 }}
                        href="/report/banker"
                      >
                        <i className="bi bi-flag me-3"></i>
                        Reports
                      </Link>
                    </div>

                    <div className="col">
                      <Link
                        className="btn btn-info w-100 d-flex justify-content-center align-items-center"
                        style={{ height: 100 }}
                        href="/credit-cards/open-approval"
                      >
                        <i className="bi bi-credit-card me-3"></i>
                        Card Requests
                      </Link>
                    </div>

                    <div className="col">
                      <Link
                        className="btn btn-secondary w-100 d-flex justify-content-center align-items-center"
                        style={{ height: 100 }}
                        href="/loans/banker-loan-page"
                      >
                        <i className="bi bi-cash me-3"></i>
                        Loan Requests
                      </Link>
                    </div>

                    <div className="col">
                      <Link
                        className="btn btn-warning w-100 d-flex justify-content-center align-items-center"
                        style={{ height: 100 }}
                        href="/bank-accounts/open/open-approval"
                      >
                        <i className="bi bi-bank me-3"></i>
                        Open Account Requests
                      </Link>
                    </div>

                    <div className="col">
                      <Link
                        className="btn btn-light w-100 d-flex justify-content-center align-items-center"
                        style={{ height: 100 }}
                        href="/registration/registration-approval"
                      >
                        <i className="bi bi-person-check-fill me-3"></i>
                        Registration Requests
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
