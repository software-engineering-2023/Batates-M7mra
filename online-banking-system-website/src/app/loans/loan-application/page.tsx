export default function Home() {
  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <h1>LOAN APPLICATION FORM</h1>
            <form>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="desiredAmmount" className="form-label">
                      Desired Loan Amount ($)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="desiredAmmount"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="annualIncome" className="form-label">
                      Annual Income ($)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="annualIncome"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="loanType">
                  Loan Type
                </label>
                <select className="form-select" id="loanType">
                  <option selected>Select Type...</option>
                  <option value="1">Personal Loan</option>
                  <option value="2">Car Loan</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="reason" className="form-label">
                  Reason For Application
                </label>
                <textarea className="form-control" id="reason" />
              </div>
              <h3>Personal Information</h3>
              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">
                  Date Of Birth
                </label>
                <input type="date" className="form-control" id="birthDate" />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="maritalStatus">
                  Marital Status
                </label>
                <select className="form-select" id="maritalStatus">
                  <option selected>Choose...</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                  <option value="3">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInput2" className="form-label">
                  example
                </label>
                <input type="date" className="form-control" id="example2" />
              </div>
              <h3>Employment Information</h3>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="employer" className="form-label">
                      Present Employer
                    </label>
                    <input type="text" className="form-control" id="employer" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="occupation" className="form-label">
                      Current Occupation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="occupation"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exp" className="form-label">
                  Years Of Experience
                </label>
                <input type="number" className="form-control" id="exp" />
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="income" className="form-label">
                      Gross Monthly Income ($)
                    </label>
                    <input type="number" className="form-control" id="income" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="rent" className="form-label">
                      Monthly Rent/Mortgage ($)
                    </label>
                    <input type="number" className="form-control" id="rent" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exp" className="form-label">
                  Desired Installment Ammount ($)
                </label>
                <input type="number" className="form-control" id="exp" />
              </div>
              <div className="mb-3">
                <label htmlFor="comments" className="form-label">
                  Comments
                </label>
                <textarea className="form-control" id="comments" />
              </div>
              <h3>Bank References</h3>
              <p>Please List Here</p>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="bank" className="form-label">
                      Bank Name
                    </label>
                    <input type="text" className="form-control" id="bank" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="accountnum" className="form-label">
                      Saving Account Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountnum"
                    />
                  </div>
                </div>
              </div>
              <h4>CONSENT</h4>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I authorize prospective Credit Grantors/Lending/Leasing
                  Companies to obtain personal and credit information about me
                  from my employer and credit bureau, or credit reporting
                  agency, any person who has or may have any financial dealing
                  with me, or from any references I have provided. This
                  information, as well as that provided by me in the
                  application, will be referred to in connection with this lease
                  and any other relationships we may establish from time to
                  time. Any personal and credit information obtained may be
                  disclosed from time to time to other lenders, credit bureaus
                  or other credit reporting agencies.
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
