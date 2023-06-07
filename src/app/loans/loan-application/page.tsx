"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Accounts() {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-xl-8 col-lg-10 col-md-12">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Loan Application Form</h1>
            <form className="d-flex flex-column gap-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="desiredAmmount" className="form-label">
                    Desired Loan Amount ($)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="desiredAmmount"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="netAnnualIncome" className="form-label">
                    Net Annual Income ($)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="annualIncome"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <span className="input-group-text">Loan Type</span>
                <select className="form-select" id="loanType" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="1">Personal Loan</option>
                  <option value="2">Car Loan</option>
                </select>
              </div>
              <label htmlFor="reason" className="form-label">
                Reason for Application
              </label>
              <textarea className="form-control" id="reason" required />
              <h3>Personal Information</h3>
              <label htmlFor="birthDate" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="birthDate"
                required
              />
              <div className="input-group">
                <span className="input-group-text">Marital Status</span>
                <select className="form-select" id="maritalStatus" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                  <option value="3">Other</option>
                </select>
              </div>
              <h3>Employment Information</h3>
              <div className="row">
                <div className="col">
                  <label htmlFor="employer" className="form-label">
                    Present Employer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="employer"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="occupation" className="form-label">
                    Current Occupation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="occupation"
                    required
                  />
                </div>
              </div>
              <label htmlFor="exp" className="form-label">
                Years of Experience
              </label>
              <input type="number" className="form-control" id="exp" required />
              <div className="row">
                <div className="col">
                  <label htmlFor="income" className="form-label">
                    Net Monthly Income ($)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="income"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="rent" className="form-label">
                    Monthly Rent/Mortgage ($)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rent"
                    required
                  />
                </div>
              </div>
              <label htmlFor="exp" className="form-label">
                Desired Installment Ammount ($)
              </label>
              <input type="number" className="form-control" id="exp" required />
              <label htmlFor="comments" className="form-label">
                Comments
              </label>
              <textarea className="form-control" id="comments" />
              <h3>Bank References</h3>
              <div className="row">
                <div className="col">
                  <label htmlFor="bank" className="form-label">
                    Bank Name
                  </label>
                  <input type="text" className="form-control" id="bank" />
                </div>
                <div className="col">
                  <label htmlFor="accountnum" className="form-label">
                    Saving Account Number
                  </label>
                  <input type="text" className="form-control" id="accountnum" />
                </div>
              </div>
              <h4>Terms and Conditions</h4>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I authorize prospective credit grantors/lending/leasing
                  companies to obtain personal and credit information about me
                  from my employer and credit bureau, or credit report agency,
                  any person who has or may have any financial dealing with me,
                  or from any references I have provided. This information, as
                  well as that provided by me in the application, will be
                  referred to in connection with this lease and any other
                  relationships we may establish from time to time. Any personal
                  and credit information obtained may be disclosed from time to
                  time to other lenders, credit bureaus or other credit
                  reporting agencies.
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setShowAlert(true);
                  setTimeout(() => {
                    router.push("/loans");
                  }, 3000);
                }}
              >
                Submit
              </button>

              {showAlert && (
                <div className="alert alert-success mt-2">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Registered successfully. Redirecting to loans page...
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
