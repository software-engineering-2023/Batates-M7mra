"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Toast } from 'bootstrap';

export default function PayBill() {
    const [showPaymentAlert, setShowPaymentAlert] = useState(false);

    const handleButtonClick = () => {
        setShowPaymentAlert(true);

        setTimeout(() => {
            window.location.href = '/bills'; // Redirect to another page after a certain amount of time
        }, 3000); // Change the time (in milliseconds) as per your requirement
    }
    return (
        <>

            <form className="row g-3">
                {showPaymentAlert && (
                    <div className="alert alert-success">Paid successfully!</div>
                )}
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">Card id</label>
                    <input type="text" className="form-control" id="validationDefault01" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">cvv</label>
                    <input type="text" className="form-control" id="validationDefault02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationDefault03" className="form-label">due date</label>
                    <input type="text" className="form-control" id="validationDefault03" required />
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label" htmlFor="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleButtonClick}
                >
                    Pay
                </button>

            </form >

    </>
  );
}
