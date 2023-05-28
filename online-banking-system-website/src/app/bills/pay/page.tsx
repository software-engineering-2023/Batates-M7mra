"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Toast } from "bootstrap";
export default function PayBill() {
    var [toast, setToast] = useState(false);
    const toastRef = useRef<any>();

    useEffect(() => {
      var myToast = toastRef.current;
      var bsToast = Toast.getInstance(myToast);

      if (!bsToast) {
        // initialize Toast
        bsToast = new Toast(myToast, { autohide: false });
        // hide after init
        bsToast.hide();
        setToast(false);
      } else {
        // toggle
        toast ? bsToast.show() : bsToast.hide();
      }
    });
  return (
    <>
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" >
            <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..." />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>

        <form className="row g-3">
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
            <div className="col-12">
                <div className="py-2">
                    <button className="btn btn-success" onClick={() => setToast(toast => !toast)}>
                        Toast {toast ? 'hide' : 'show'}
                    </button>
                    <div className="toast position-absolute m-4" role="alert" ref={toastRef}>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>
  );
}
