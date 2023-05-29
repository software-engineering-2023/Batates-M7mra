"use client";

const currencies = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "COU",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STD",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "WST",
  "XCD",
  "XOF",
  "XPD",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
];

import { faker } from "@faker-js/faker";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Account {
  accountNumber: string;
  balance: number;
  type: string;
  status: string;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

enum AccountType {
  Savings = "Savings",
  Checking = "Checking",
}

enum AccountStatus {
  Active = "Active",
  Inactive = "Inactive",
}

const getDummyAccounts = () =>
  Array.from({ length: 3 }).map((_, i) => ({
    accountNumber: faker.finance.accountNumber(),
    balance: faker.number.int({ min: 1000, max: 100000 }),
    type: i % 2 === 0 ? AccountType.Savings : AccountType.Checking,
    status: i < 2 ? AccountStatus.Active : AccountStatus.Inactive,
  }));

export default function BankAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [showCloseAlert, setShowCloseAlert] = useState(false);

  useEffect(() => {
    setAccounts(getDummyAccounts());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-xl-4 mx-auto col-lg-6 col-md-12">
            <button
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center w-100"
              style={{ height: 75 }}
              data-bs-toggle="modal"
              data-bs-target="#open"
            >
              <i className="bi bi-plus-lg me-2"></i>
              Open account
            </button>
          </div>
        </div>

        {showCloseAlert && (
          <div className="row mb-3">
            <div className="col">
              <div className="alert alert-warning alert-dismissible fade show">
                Account closed successfully.
              </div>
            </div>
          </div>
        )}

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
          {accounts.map((account, i) => (
            <div className="col" key={i}>
              <div className="card bg-body-tertiary">
                <div className="card-header d-flex justify-content-between gap-1 align-items-center">
                  <span className="fs-5">
                    {
                      {
                        [AccountType.Savings]: "Savings Account",
                        [AccountType.Checking]: "Checking Account",
                      }[account.type]
                    }
                  </span>
                  <span className="text-muted">{account.accountNumber}</span>
                </div>
                <div className="card-body">
                  <div className="card my-4 bg-secondary">
                    <div className="card-body">
                      <div className="d-flex flex-column">
                        <div className="text-uppercase text-">Balance</div>
                        <div className="fs-5 fw-bold">
                          + {formatter.format(account.balance)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Type</th>
                        <td>{account.type}</td>
                      </tr>
                      <tr>
                        <th scope="row">Status</th>
                        <td>
                          <span
                            className={`badge bg-${
                              account.status === AccountStatus.Active
                                ? "success"
                                : "danger"
                            }`}
                          >
                            {account.status}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer d-flex flex-column gap-2">
                  <Link
                    href="/bank-accounts/transactions"
                    className="btn btn-warning"
                  >
                    <i className="bi bi-arrow-right-circle me-2"></i>
                    View Transactions
                  </Link>
                  <Link
                    href="/transfers"
                    className="btn btn-info"
                  >
                    <i className="bi bi-arrow-left-right me-2"></i>
                    Bank Transfer
                  </Link>
                  <hr />
                  <button
                    className="btn btn-danger"
                    data-bs-target="#closeModal"
                    data-bs-toggle="modal"
                  >
                    <i className="bi bi-x-circle me-2"></i>
                    Close Account
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="modal fade"
          id="closeModal"
          tabIndex={-1}
          aria-labelledby="modal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="modal">
                  Close Account
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
                  type="password"
                  id="points"
                  className="form-control"
                  placeholder="Enter your password ..."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setShowCloseAlert(true);
                    setTimeout(() => {
                      setShowCloseAlert(false);
                    }, 2000);
                  }}
                >
                  Close
                </button>
              </div>
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
                  Open a Bank Account
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label htmlFor="accountType" className="form-label">
                  Account Type
                </label>
                <div className="input-group">
                  <select className="form-select" id="accountType" required>
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    <option value="1">Savings</option>
                    <option value="2">Checking</option>
                  </select>
                </div>
                <label htmlFor="currency" className="form-label mt-3">
                  Currency
                </label>
                <div className="input-group">
                  <select className="form-select" id="currency" required>
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {currencies.map((currency, i) => (
                      <option value={i} key={i}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row ms-1 me-1 mt-4">
                  <button type="button" className="btn btn-primary w-100">
                    Upload a Photo of your Signature
                  </button>
                </div>
              </div>
              <div className="alert alert-info fs-6 ms-2 me-2">
                All the remaining information needed for completing your request
                will be automatically collected from your account
              </div>
              <div className="modal-footer">
                <button
                  type="button"
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
    </div>
  );
}
