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

  useEffect(() => {
    setAccounts(getDummyAccounts());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link className="btn btn-primary" href="/bank-accounts/open">

          </Link>
        </div>
      </div>
  
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
              <div className="card-footer d-flex gap-2">
                <Link
                  href="/bank-accounts/transactions"
                  className="btn btn-primary"
                >
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  View Transactions
                </Link>
                <hr />
                <button className="btn btn-danger">
                  <i className="bi bi-x-circle me-2"></i>
                  Close Account
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
