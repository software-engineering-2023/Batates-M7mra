"use client";
import Link from "next/link";
import { useState } from "react";



export default function Bills() {
    const [showRemainderAlert, setShowRemainderAlert] = useState(false);
    const handleButtonClick = () => {
        setShowRemainderAlert(true);

        setTimeout(() => {
            setShowRemainderAlert(false); // Redirect to another page after a certain amount of time
        }, 3000); // Change the time (in milliseconds) as per your requirement
    }


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
}
