"use client";

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
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <button
            className="btn btn-primary btn-lg d-flex align-items-center justify-content-center w-25 mx-auto"
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

      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
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
                Choose Account Type
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="input-group d-flex justify-content-center p-3">
              <select className="form-select" id="accountType" required>
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="1">Savings</option>
                <option value="2">Checking</option>
              </select>
            </div>
            <div className="modal-footer">
              <Link href="/bank-accounts/open">
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
