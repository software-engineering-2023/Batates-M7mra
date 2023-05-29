import Link from 'next/link';
import React from 'react';

export default function BankAnnouncement() {
  return (
    <div className="row h-50 d-flex justify-content-center align-items-center">
        <h1 className="card-title">Stolen Card</h1>
    <div className="card">
        
          <div className="card-body">
            
            <form className="d-flex flex-column ">
      <p className="announcement-content">
        Dear Client, <br />
        We are pleased to inform you that we have successfully resolved the issue regarding your stolen card. Our dedicated team has taken immediate action to secure your account and prevent any unauthorized transactions.

Rest assured that your compromised card has been deactivated, and we have initiated the process of issuing a new card to you. You can expect to receive your new card within the next few business days.




      </p>
      <p className="announcement-footer">
      If you have any further concerns or questions, please don't hesitate to reach out to our customer support team. We are here to assist you and ensure the security of your banking experience.
      </p>
      <p className="announcement-footer">
      Thank you for your patience and cooperation throughout this process.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
<Link href="http://localhost:3000/report/banker" className="btn btn-primary me-md-2">Back</Link>
</div>
      </form>
    </div>
    </div>
    </div>
  );
}
