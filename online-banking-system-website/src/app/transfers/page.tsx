"use client";

import { faker } from "@faker-js/faker";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Transaction {
  from: string;
  to: string;
  amount: string;
  date: Date;
}

interface InternalTransaction extends Transaction {}

interface DomesticTransaction extends Transaction {
  bank: string;
}

interface InternationalTransaction extends Transaction {
  iban: string;
  country: string;
  bank: string;
}

const dummyInternalTransactions = Array(4)
  .fill(null)
  .map((_, index) => ({
    from: faker.finance.accountNumber(),
    to: faker.finance.accountNumber(),
    amount: faker.finance.amount(100, 1000),
    date: faker.date.past(),
  }));
const dummyDomesticTransactions = Array(4)
  .fill(null)
  .map((_, index) => ({
    from: faker.finance.accountNumber(),
    to: faker.finance.accountNumber(),
    amount: faker.finance.amount(100, 1000),
    date: faker.date.past(),
    bank: faker.helpers.arrayElement(["Bank Masr", "CIB", "QNB"]),
  }));
const dummyInternationalTransactions = Array(4)
  .fill(null)
  .map((_, index) => ({
    from: faker.finance.accountNumber(),
    to: faker.finance.accountNumber(),
    amount: faker.finance.amount(100, 1000),
    date: faker.date.past(),
    iban: faker.finance.iban(),
    bank: faker.helpers.arrayElement(["Deutsche Bank", "HSBC", "Barclays"]),
    country: faker.address.country(),
  }));

export default function Transfers() {
  const [internalTransactions, setInternalTransactions] = useState<
    InternalTransaction[]
  >([]);
  const [domesticTransactions, setDomesticTransactions] = useState<
    DomesticTransaction[]
  >([]);
  const [internationalTransactions, setInternationalTransactions] = useState<
    InternationalTransaction[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInternalTransactions(dummyInternalTransactions);
    setDomesticTransactions(dummyDomesticTransactions);
    setInternationalTransactions(dummyInternationalTransactions);
    setLoading(false);
  }, []);

  return (
    <div className="container-fluid">
      <div className="card mb-3">
        <div className="card-body">
          <div className="btn-group">
            <button className="btn btn-primary btn-lg">
                <i className="bi bi-arrow-left-right me-2"></i> Transfer
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Recent Transfers</div>
        <div className="card-body">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-bank me-2"></i> Internal Transactions
                </div>
                <div className="card-body">
                  {internalTransactions.length === 0 ? (
                    <div className="text-center">No transactions found</div>
                  ) : (
                    <table className="table table-responsive table-striped table-hover table-dark">
                      <thead>
                        <tr className="text-uppercase text-muted">
                          <th>From</th>
                          <th>To</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internalTransactions.map((transaction, index) => (
                          <tr key={index}>
                            <td>{transaction.from}</td>
                            <td>{transaction.to}</td>
                            <td>{transaction.amount} $</td>
                            <td>{transaction.date.toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="bi bi-geo-fill me-2"></i> Domestic Transactions
                </div>
                <div className="card-body">
                  {internalTransactions.length === 0 ? (
                    <div className="text-center">No transactions found</div>
                  ) : (
                    <table className="table table-responsive table-striped table-hover table-dark">
                      <thead>
                        <tr className="text-uppercase text-muted">
                          <th>From</th>
                          <th>To</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Bank</th>
                        </tr>
                      </thead>
                      <tbody>
                        {domesticTransactions.map((transaction, index) => (
                          <tr key={index}>
                            <td>{transaction.from}</td>
                            <td>{transaction.to}</td>
                            <td>{transaction.amount} $</td>
                            <td>{transaction.date.toLocaleDateString()}</td>
                            <td>{transaction.bank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="bi bi-globe me-2"></i> International
                  Transactions
                </div>
                <div className="card-body">
                  {internalTransactions.length === 0 ? (
                    <div className="text-center">No transactions found</div>
                  ) : (
                    <table className="table table-responsive table-striped table-hover table-dark">
                      <thead>
                        <tr className="text-uppercase text-muted">
                          <th>From</th>
                          <th>To</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>IBAN</th>
                          <th>Bank</th>
                          <th>Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internationalTransactions.map((transaction, index) => (
                          <tr key={index}>
                            <td>{transaction.from}</td>
                            <td>{transaction.to}</td>
                            <td>{transaction.amount} $</td>
                            <td>{transaction.date.toLocaleDateString()}</td>
                            <td>{transaction.iban}</td>
                            <td>{transaction.bank}</td>
                            <td>{transaction.country}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
