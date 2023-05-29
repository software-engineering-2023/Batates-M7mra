"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Bill {
  name: string;
  icon: string;
  amount: number;
  dueDate: Date;
}

const dummyBills = [
  {
    name: "Water Bill",
    icon: "droplet",
    amount: 1000,
    dueDate: new Date(2021, 4, 20),
  },
  {
    name: "Electricity Bill",
    icon: "lightning",
    amount: 2000,
    dueDate: new Date(2021, 4, 20),
  },
  {
    name: "Internet Bill",
    icon: "wifi",
    amount: 3000,
    dueDate: new Date(2021, 4, 20),
  },
  {
    name: "Phone Bill",
    icon: "phone",
    amount: 4000,
    dueDate: new Date(2021, 4, 20),
  },
];

export default function Bills() {
  const [showRemainderAlert, setShowRemainderAlert] = useState(false);
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    setBills(dummyBills);
  }, []);

  const handleButtonClick = () => {
    setShowRemainderAlert(true);

<<<<<<< HEAD
    return (
        <>
            <div className="RemainderAlert">
                {showRemainderAlert && (
                    <div className="alert alert-success">Reminder has been set successfully!</div>
                )}
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <i className="bi bi-droplet ms-2 mt-1"></i>
                        <div className="card-body">
                            <h5 className="card-type">Water Bill</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">bill amount : $1000</li>
                            <li className="list-group-item">due date : 20/4/2024</li>
                        </ul>
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                                <button className="btn btn-primary" role="button" onClick={handleButtonClick}>set remainder</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <i className="bi bi-fuel-pump-diesel-fill mt-1 ms-2"></i>
                        <div className="card-body">
                            <h5 className="card-type">Gas Bill</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">bill amount : $1000</li>
                            <li className="list-group-item">due date : 20/4/2024</li>
                        </ul>
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                                <button className="btn btn-primary" role="button" onClick={handleButtonClick}>set remainder</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <i className="bi bi-ev-station ms-2 mt-1"></i>
                        <div className="card-body">
                            <h5 className="card-type">Electricity Bill</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">bill amount : $1000</li>
                            <li className="list-group-item">due date : 20/4/2024</li>
                        </ul>
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                                <button className="btn btn-primary" role="button" onClick={handleButtonClick}>set remainder</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <i className="bi bi-droplet ms-2 mt-1"></i>
                        <div className="card-body">
                            <h5 className="card-type">Water Bill</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">bill amount : $1000</li>
                            <li className="list-group-item">due date : 20/4/2024</li>
                        </ul>
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Link className="btn btn-primary" role="button" href="/bills/pay" >Pay</Link>
                                <button className="btn btn-primary" role="button" onClick={handleButtonClick}>set remainder</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>









    )
=======
    setTimeout(() => {
      setShowRemainderAlert(false); // Redirect to another page after a certain amount of time
    }, 3000); // Change the time (in milliseconds) as per your requirement
  };

  return (
    <>
      <div className="RemainderAlert">
        {showRemainderAlert && (
          <div className="alert alert-success">
            <i className="bi bi-check-circle-fill me-2"></i>
            Remainder has been set successfully!
          </div>
        )}
      </div>

      <div className="row row-cols-md-1 row-cols-lg-3 g-4">
        {bills.map((bill, i) => (
          <div className="col" key={i}>
            <div className="card">
              <div className="card-body d-flex justify-content-center align-items-center m-2 flex-column">
                <div
                  className=" bg-body-tertiary d-flex justify-content-center align-items-center rounded-circle"
                  style={{ width: 50, height: 50 }}
                >
                  <i className={"bi bi-" + bill.icon}></i>
                </div>
                <div className="card-body w-100">
                  <h5 className="card-title text-center">{bill.name}</h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-muted">Amount:</td>
                        <td className="text-white">{bill.amount} $</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Due Date:</td>
                        <td className="text-white">
                          {bill.dueDate.toLocaleDateString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-center align-items-center">
                <div
                  className="d-flex gap-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    className="btn btn-primary"
                    role="button"
                    href="/bills/pay"
                  >
                    Pay
                  </Link>
                  <button
                    className="btn btn-info"
                    role="button"
                    onClick={handleButtonClick}
                  >
                    Set Remainder
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
>>>>>>> 7964842282d9fe3397f500786e0d9568e9bb41d8
}
