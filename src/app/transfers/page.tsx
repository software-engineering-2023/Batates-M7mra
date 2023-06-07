"use client";

import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Rep",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland Republic",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "St Kitts & Nevis",
  "St Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vatican City",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

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
    country: faker.helpers.arrayElement(countries),
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
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setInternalTransactions(dummyInternalTransactions);
    setDomesticTransactions(dummyDomesticTransactions);
    setInternationalTransactions(dummyInternationalTransactions);
    setLoading(false);
  }, []);

  return (
    <div className="container-fluid">
      {showAlert && (
        <div className="alert alert-success">
          <i className="bi bi-check-circle-fill me-2"></i> Transfer successful
        </div>
      )}
      <div
        className="modal fade"
        id="internal-transfer-modal"
        tabIndex={-1}
        aria-labelledby="internal-transfer-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="internal-transfer-modalLabel"
              >
                <i className="bi bi-bank me-2"></i>
                Internal Transfer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body d-flex flex-column gap-3">
              <div>
                <label htmlFor="from-account" className="form-label">
                  From Account
                </label>
                <select
                  className="form-select"
                  id="from-account"
                  aria-label="From Account"
                  value={""}
                >
                  <option value="" disabled hidden>
                    Select an account...
                  </option>
                  <option value="1">1234567890</option>
                  <option value="2">0987654321</option>
                </select>
              </div>
              <div>
                <label htmlFor="to-account" className="form-label">
                  To Account
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="to-account"
                  aria-label="To Account"
                />
              </div>
              <div>
                <label htmlFor="amount" className="form-label">
                  Amount{" "}
                  <span className="badge bg-warning text-bg-warning rounded-pill">
                    <i className="bi bi-currency-dollar"></i>
                  </span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  aria-label="Amount"
                />
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
                  setShowAlert(true);
                }}
              >
                <i className="bi bi-arrow-left-right me-2"></i>Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="domestic-transfer-modal"
        tabIndex={-1}
        aria-labelledby="domestic-transfer-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="domestic-transfer-modalLabel"
              >
                <i className="bi bi-geo-fill me-2"></i>
                Domestic Transfer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body d-flex flex-column gap-3">
              <div>
                <label htmlFor="from-account" className="form-label">
                  From Account
                </label>
                <select
                  className="form-select"
                  id="from-account"
                  aria-label="From Account"
                  value={""}
                >
                  <option value="" disabled hidden>
                    Select an account...
                  </option>
                  <option value="1">1234567890</option>
                  <option value="2">0987654321</option>
                </select>
              </div>
              <div>
                <label htmlFor="bank" className="form-label">
                  Bank
                </label>
                <select
                  className="form-select"
                  id="bank"
                  aria-label="Bank"
                  value={""}
                >
                  <option value="" disabled hidden>
                    Select a bank...
                  </option>
                  <option value="1">Bank Masr</option>
                  <option value="2">CIB</option>
                </select>
              </div>
              <div>
                <label htmlFor="to-account" className="form-label">
                  To Account
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="to-account"
                  aria-label="To Account"
                />
              </div>
              <div>
                <label htmlFor="amount" className="form-label">
                  Amount{" "}
                  <span className="badge bg-warning text-bg-warning rounded-pill">
                    <i className="bi bi-currency-dollar"></i>
                  </span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  aria-label="Amount"
                />
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
                  setShowAlert(true);
                }}
              >
                <i className="bi bi-arrow-left-right me-2"></i>Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="international-transfer-modal"
        tabIndex={-1}
        aria-labelledby="international-transfer-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="domestic-transfer-modalLabel"
              >
                <i className="bi bi-globe me-2"></i>
                International Transfer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body d-flex flex-column gap-3">
              <div>
                <label htmlFor="from-account" className="form-label">
                  From Account
                </label>
                <select
                  className="form-select"
                  id="from-account"
                  aria-label="From Account"
                  value={""}
                >
                  <option value="" disabled hidden>
                    Select an account...
                  </option>
                  <option value="1">1234567890</option>
                  <option value="2">0987654321</option>
                </select>
              </div>
              <div>
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  aria-label="Country"
                  value={""}
                >
                  <option value="" disabled hidden>
                    Select a country...
                  </option>
                  {countries.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bank" className="form-label">
                  International Bank
                </label>
                <select
                  className="form-select"
                  id="bank"
                  aria-label="Bank"
                  value={""}
                >
                  <option value="" disabled hidden>
                    Select an international bank...
                  </option>
                  <option value="1">J.P Morgan</option>
                  <option value="2">Bank of America</option>
                  <option value="3">Wells Fargo</option>
                  <option value="4">Citigroup</option>
                  <option value="5">Goldman Sachs</option>
                </select>
              </div>
              <div>
                <label htmlFor="to-account" className="form-label">
                  IBAN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="to-account"
                  aria-label="To Account"
                />
              </div>
              <div>
                <label htmlFor="amount" className="form-label">
                  Amount{" "}
                  <span className="badge bg-warning text-bg-warning rounded-pill">
                    <i className="bi bi-currency-dollar"></i>
                  </span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  aria-label="Amount"
                />
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
                  setShowAlert(true);
                }}
              >
                <i className="bi bi-arrow-left-right me-2"></i> Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="container-fluid">
            <div
              className="row row-cols-lg-3 row-cols-md-1 g-2"
              style={{ height: 200 }}
            >
              <div className="col">
                <button
                  className="btn btn-primary btn-lg w-100 h-100"
                  data-bs-toggle="modal"
                  data-bs-target="#internal-transfer-modal"
                >
                  <i className="bi bi-bank me-2"></i> Internal Transfer
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-warning btn-lg w-100 h-100"
                  data-bs-toggle="modal"
                  data-bs-target="#domestic-transfer-modal"
                >
                  <i className="bi bi-geo-fill me-2"></i> Domestic Transfer
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-info btn-lg w-100 h-100"
                  data-bs-toggle="modal"
                  data-bs-target="#international-transfer-modal"
                >
                  <i className="bi bi-globe me-2"></i> International Transfer
                </button>
              </div>
            </div>
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
                <div className="card-header bg-secondary text-bg-secondary">
                  <i className="bi bi-bank me-2"></i> Internal Transactions
                </div>
                <div className="card-body">
                  {internalTransactions.length === 0 ? (
                    <div className="text-center">No transactions found</div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-striped table-hover table-dark">
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
                    </div>
                  )}
                </div>
              </div>

              <div className="card">
                <div className="card-header bg-secondary text-bg-secondary">
                  <i className="bi bi-geo-fill me-2"></i> Domestic Transactions
                </div>
                <div className="card-body">
                  {internalTransactions.length === 0 ? (
                    <div className="text-center">No transactions found</div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-striped table-hover table-dark">
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
                    </div>
                  )}
                </div>
              </div>

              <div className="card">
                <div className="card-header bg-secondary text-bg-secondary">
                  <i className="bi bi-globe me-2"></i> International
                  Transactions
                </div>
                <div className="card-body">
                  {internalTransactions.length === 0 ? (
                    <div className="text-center">No transactions found</div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-striped table-hover table-dark">
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
                          {internationalTransactions.map(
                            (transaction, index) => (
                              <tr key={index}>
                                <td>{transaction.from}</td>
                                <td>{transaction.to}</td>
                                <td>{transaction.amount} $</td>
                                <td>{transaction.date.toLocaleDateString()}</td>
                                <td>{transaction.iban}</td>
                                <td>{transaction.bank}</td>
                                <td>{transaction.country}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
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
