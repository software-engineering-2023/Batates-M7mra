import Link from "next/link";
import React from "react";

export default function BankAnnouncement() {
  return (
    <div className="row h-50 d-flex justify-content-center align-items-center">
      <h1 className="card-title">Announcement</h1>
      <div className="card">
        <div className="card-body">
          <form className="d-flex flex-column ">
            <p className="announcement-content">
              Dear Valued Customers, <br />
              We are pleased to announce some exciting updates and important
              information regarding our banking services. Please take a moment
              to review the following announcements: New Feature: Mobile Banking
              App We are thrilled to introduce our new mobile banking
              application, designed to provide you with convenient and secure
              access to your accounts anytime, anywhere. The app offers a range
              of features, including balance inquiries, fund transfers, bill
              payments, and more. Download it today from [App Store/Google Play]
              and start enjoying enhanced banking on the go!
            </p>
            <p className="announcement-footer">
              If you have any further concerns or questions, please don&apos;t
              hesitate to reach out to our customer support team. We are here to
              assist you and ensure the security of your banking experience.
            </p>
            <p className="announcement-footer">
              Thank you for your patience and cooperation throughout this
              process.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link href="/" className="btn btn-primary me-md-2">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
