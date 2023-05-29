"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type CreditCard = {
  limit: number;
  interest: number;
  suspendedReason?: string;
  name: string;
  number: string;
  endYear: number;
  endMonth: number;
  amountDue: number;
  isDisabled: boolean;
};

type CreditCardProps = {
  name: string;
  number: string;
  endYear: number;
  endMonth: number;
  variant?: "primary" | "secondary";
};

export const CreditCard = ({
  name,
  number,
  endYear,
  endMonth,
}: CreditCardProps) => (
  <div className="card credit-card">
    <div className="card-body d-flex flex-column justify-content-end">
      <div
        className="fs-2 py-4"
        style={{
          letterSpacing: 3,
        }}
      >
        {number}
      </div>
      <div className="fs-5 py-2">{name}</div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-6">
          {endMonth} / {endYear}
        </div>
        <img src="/mastercard.png" height={55} width={73} />
      </div>
    </div>
  </div>
);

function getCreditCards() {
  return [
    {
      name: "Mathew Hany",
      number: "1234 5678 9012 3456",
      endYear: 2025,
      endMonth: 12,
      amountDue: 123,
      limit: 1000,
      interest: 0.1,

      isDisabled: false,
    },

    {
      name: "Mathew Hany",
      number: "4321 6345 3216 3424",
      endYear: 2024,
      endMonth: 4,
      amountDue: 0,
      limit: 1000,
      interest: 0.1,

      isDisabled: false,
    },

    // {
    //   name: "Mathew Hany",
    //   number: "3131 3232 6453 1231",
    //   endYear: 2026,
    //   endMonth: 2,
    //   amountDue: 0,

    //   isDisabled: true,
    //   suspendedReason: "Suspended due to suspicious activity",
    // },

    // {
    //   name: "Mathew Hany",
    //   number: "1313 3233 6562 1231",
    //   endYear: 2022,
    //   endMonth: 2,
    //   amountDue: 0,

    //   isDisabled: true,
    //   suspendedReason: "Card reported stolen",
    // },
  ];
}

export default function CreditCards() {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [points, setPoints] = useState(1000);
  const [showCashbackAlert, setShowCashbackAlert] = useState(false);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("full");
  const [useDefaultAccount, setUseDefaultAccount] = useState(true);
  const [showSuspendAlert, setShowSuspendAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCreditCards(getCreditCards());
    setLoading(false);
  }, []);

  return (
    <div className="row g-2">
      {loading ? (
        <div className="card">
          <div className="card-body text-center">
            <div className="spinner-border text-muted"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-4 mx-auto col-md-12">
                <button
                  className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
                  style={{ height: 75 }}
                  data-bs-toggle="modal"
                  data-bs-target="#open"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Apply for a credit card
                </button>
              </div>
            </div>
            {showPaymentAlert && (
              <div className="alert alert-success">
                <i className="bi bi-check-circle-fill me-2"></i> Paid
                successfully!
              </div>
            )}
            {showSuspendAlert && (
              <div className="alert alert-success">
                <i className="bi bi-check-circle-fill me-2"></i>
                Card suspended successfully!
              </div>
            )}

            {showCashbackAlert && (
              <div className="alert alert-success">
                <i className="bi bi-check-circle-fill me-2"></i>
                Cashback redeemed successfully!
              </div>
            )}

            <div className="row">
              <div className="col-md-12 mx-auto col-lg-9">
                <div className="row row-cols-xl-2 row-cols-lg-1 g-2">
                  {creditCards.map((creditCard, i) => (
                    <div className="col" key={i}>
                      <div className="card bg-body-tertiary">
                        <div className="card-body d-flex flex-column gap-3">
                          <CreditCard
                            name={creditCard.name}
                            number={creditCard.number}
                            endYear={creditCard.endYear}
                            endMonth={creditCard.endMonth}
                          />
                          {creditCard.isDisabled ? (
                            <div className="alert alert-warning">
                              {creditCard.suspendedReason}
                            </div>
                          ) : (
                            <>
                              <div className="card">
                                <div className="card-body d-flex flex-column gap-2">
                                  <span className="fs-5 text-muted">
                                    Amount Due
                                  </span>
                                  <span className="fw-bold fs-1">
                                    {formatter.format(creditCard.amountDue)}
                                  </span>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column">
                                      <div className="fs-5 text-muted">
                                        Points
                                      </div>
                                      <div className="fs-1">{points}</div>
                                    </div>
                                    <button
                                      className="btn btn-outline-success"
                                      data-bs-toggle="modal"
                                      data-bs-target="#cashbackModal"
                                    >
                                      <i className="bi bi-cash me-2"></i>
                                      Redeem Cashback
                                    </button>
                                  </div>
                                </div>
                                <div
                                  className="modal fade"
                                  id="cashbackModal"
                                  tabIndex={-1}
                                  aria-labelledby="modal"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h1
                                          className="modal-title fs-5"
                                          id="modal"
                                        >
                                          Redeem Cashback
                                        </h1>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div className="modal-body d-flex flex-column gap-2">
                                        <input
                                          required
                                          type="number"
                                          id="points"
                                          className="form-control"
                                          placeholder="Enter points ..."
                                        />
                                        <div className="alert alert-warning">
                                          A point will give you{" "}
                                          <span className="badge bg-success text-bg-success rounded-pill">
                                            1$
                                          </span>{" "}
                                          cashback
                                        </div>
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
                                          className="btn btn-primary"
                                          data-bs-dismiss="modal"
                                          onClick={() => {
                                            setShowCashbackAlert(true);

                                            setTimeout(() => {
                                              setShowCashbackAlert(false);
                                            }, 3000);
                                          }}
                                        >
                                          Redeem
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card">
                                <div className="card-body">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <th scope="row">Limit</th>
                                        <td>
                                          {formatter.format(creditCard.limit)}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">Interest</th>
                                        <td>{creditCard.interest * 100} %</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          role="switch"
                                          id="flexSwitchCheckDefault"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexSwitchCheckDefault"
                                        >
                                          Remind me about credit bill payment
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row gy-3">
                                <div className="col-lg-6">
                                  <Link
                                    className="btn btn-secondary w-100"
                                    href="/credit-cards/transactions"
                                  >
                                    <i className="bi bi-cash me-2"></i>
                                    Transactions
                                  </Link>
                                </div>
                                <div className="col-lg-6">
                                  <button
                                    className="btn btn-primary w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#paymentModal"
                                    disabled={creditCard.amountDue === 0}
                                  >
                                    <i className="bi bi-credit-card-2-front me-2"></i>
                                    Pay Credit
                                  </button>
                                </div>

                                <div className="col-lg-6">
                                  <button
                                    className="btn btn-danger w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#suspendModal"
                                  >
                                    <i className="bi bi-trash me-2"></i>
                                    Suspend
                                  </button>
                                </div>
                                <div className="col-lg-6">
                                  <button className="btn btn-warning  w-100">
                                    <i className="bi bi-exclamation-circle me-2"></i>
                                    Report lost or stolen
                                  </button>
                                </div>
                              </div>

                              <div
                                className="modal fade"
                                id="paymentModal"
                                tabIndex={-1}
                                aria-labelledby="paymentModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id="paymentModalLabel"
                                      >
                                        Pay credit card bill
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <form className="modal-body">
                                      <div className="d-flex flex-column gap-3">
                                        <div className="card bg-body-tertiary">
                                          <div className="card-body d-flex flex-column gap-2">
                                            <span className="fs-5 text-muted">
                                              Amount Due
                                            </span>
                                            <span className="fw-bold fs-2">
                                              {creditCard.amountDue}$
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          className="btn-group btn-group-lg"
                                          role="group"
                                          aria-label="Basic radio toggle button group"
                                        >
                                          <input
                                            type="radio"
                                            className="btn-check"
                                            name="amount"
                                            id="partial"
                                            onChange={() =>
                                              setPaymentAmount("partial")
                                            }
                                            checked={
                                              paymentAmount === "partial"
                                            }
                                          />
                                          <label
                                            className="btn btn-outline-primary"
                                            htmlFor="partial"
                                          >
                                            <i className="bi bi-circle-half me-2"></i>
                                            Partially
                                          </label>

                                          <input
                                            type="radio"
                                            className="btn-check"
                                            name="amount"
                                            id="fully"
                                            autoComplete="off"
                                            onChange={() =>
                                              setPaymentAmount("full")
                                            }
                                            checked={paymentAmount === "full"}
                                          />
                                          <label
                                            className="btn btn-outline-primary"
                                            htmlFor="fully"
                                          >
                                            <i className="bi bi-circle-fill me-2"></i>
                                            Fully
                                          </label>
                                        </div>
                                        {paymentAmount === "partial" && (
                                          <>
                                            <div className="input-group mb-3">
                                              <span className="input-group-text">
                                                $
                                              </span>
                                              <input
                                                type="text"
                                                className="form-control"
                                                aria-label="Amount (to the nearest dollar)"
                                                placeholder="Enter amount ..."
                                              />
                                              <span className="input-group-text">
                                                .00
                                              </span>
                                            </div>
                                          </>
                                        )}

                                        {paymentAmount === "full" && (
                                          <>
                                            <div className="alert alert-info d-flex align-items-center gap-2">
                                              The full{" "}
                                              <span className="badge bg-warning text-bg-warning rounded-pill">
                                                {creditCard.amountDue}$
                                              </span>{" "}
                                              will be paid.
                                            </div>
                                          </>
                                        )}

                                        <div className="form-check form-switch">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                            checked={useDefaultAccount}
                                            onChange={(e) => {
                                              setUseDefaultAccount(
                                                e.target.checked
                                              );
                                            }}
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckDefault"
                                          >
                                            Use default account
                                          </label>
                                        </div>

                                        {!useDefaultAccount && (
                                          <div className="input-group input-group-lg">
                                            <span
                                              className="input-group-text"
                                              id="account"
                                            >
                                              Account
                                            </span>
                                            <select
                                              defaultValue={0}
                                              className="form-select"
                                              aria-label="Account"
                                              aria-describedby="account"
                                            >
                                              <option disabled hidden value={0}>
                                                Choose account...
                                              </option>
                                              <option value="1">
                                                Account 1: 1234512345
                                              </option>
                                              <option value="2">
                                                Account 2: 1314132314
                                              </option>
                                              <option value="3">
                                                Account 3: 6542543354
                                              </option>
                                            </select>
                                          </div>
                                        )}
                                      </div>
                                    </form>
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
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={() => {
                                          setShowPaymentAlert(true);

                                          setTimeout(() => {
                                            setShowPaymentAlert(false);
                                          }, 3000);
                                        }}
                                      >
                                        Pay
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                id="suspendModal"
                                tabIndex={-1}
                                aria-labelledby="suspendModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id="suspendModalLabel"
                                      >
                                        Pay credit card bill
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <div className="modal-body">
                                      Are you sure you want to suspend this
                                      credit card?
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
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                        onClick={() => {
                                          setShowSuspendAlert(true);

                                          setTimeout(() => {
                                            setShowSuspendAlert(false);
                                          }, 3000);
                                        }}
                                      >
                                        Suspend
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="open"
              tabIndex={-1}
              aria-labelledby="modal"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modal">
                      Choose Credit Card Type
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        id="creditCardType"
                        required
                      >
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option value="1">Platinum</option>
                        <option value="2">Gold</option>
                        <option value="3">Silver</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      required
                      placeholder="Your Name as you Want it to Appear on Your Card"
                    />
                  </div>
                  <div className="alert alert-info fs-6 ms-2 me-2">
                    All the remaining information needed for completing your
                    request will be automatically collected from your account
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
