"use client";

import Link from "next/link";
import { CreditCard } from "./credit-cards/page";
import { useContext, useState } from "react";
import { GlobalStateContext } from "./layout";
import { UserType } from "@/types";

export default function Home() {
  const { user } = useContext(GlobalStateContext);

  const [showDefaultCardAlert, setDefaultCardAlert] = useState(false);

  return (
    <div className="container">
      <div className="row">
        {user?.type == UserType.CLIENT && (
          <>
            <div className="col-8 d-flex flex-column gap-3">
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
            <div className="col-4">
              <div className="card">
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
                        <Link className="btn btn-primary" href="payment-form">
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
                        <Link className="btn btn-primary" href="payment-form">
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
                        <Link className="btn btn-primary" href="payment-form">
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
                      <div>CreditCard Payment</div>
                      <div> 500$ </div>
                    </div>
                    <div className="d-flex justify-content-evenly flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">
                        {" "}
                        Due in 6 days
                      </small>
                      <div>
                        <Link className="btn btn-primary" href="payment-form">
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
                      <div> 300$ </div>
                    </div>
                    <div className="d-flex justify-content-evenly flex-column text-left ms-auto align-items-end">
                      <small className="text-body-secondary">Tomorrow</small>
                      <div>
                        <Link className="btn btn-primary" href="payment-form">
                          Pay
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {user?.type == UserType.ADMIN && (
          <>
          </>
        )}
      </div>
    </div>
  );
}
