export default function Accounts() {
  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-xl-8 col-lg-10 col-md-12">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Registration</h1>
            <form className="d-flex flex-column gap-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="firstName" required/>
                </div>
                <div className="col">
                  <label htmlFor="middleName" className="form-label">
                    Middle Name
                  </label>
                  <input type="text" className="form-control" id="middleName" required/>
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="lastName" required/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="emailAddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailAddress"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="text" className="form-control" id="password" required/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="dateOfBrith" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBrith"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="counttry" className="form-label">
                    Country
                  </label>
                  <input type="text" className="form-control" id="country" required/>
                </div>
                <div className="col">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="city" required/>
                </div>
              </div>
              <div className="row ms-1 me-1">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" required/>
              </div>
              <div className="row ms-1 me-1">
                <label htmlFor="nationalIDnumber" className="form-label">
                  National ID Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nationalIDnumber"
                  required
                />
              </div>
              <div className="row">
                <div className="input-group ">
                  <label className="input-group-text" htmlFor="maritalStatus">
                    Marital Status
                  </label>
                  <select className="form-select" id="maritalStatus" required>
                    <option value="" disabled selected>Select your option</option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button" className="btn btn-primary w-100">
                    Upload Photo of ID (Front)
                  </button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-primary w-100">
                    Upload Photo of ID (Back)
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="currentEmployer" className="form-label">
                    Current Employer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="currentEmployer"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="occupation" className="form-label">
                    Occupation
                  </label>
                  <input type="text" className="form-control" id="occupation" required/>
                </div>
              </div>
              <div className="row ms-1 me-1">
                <label htmlFor="accountNumber" className="form-label">
                  Account Number (Only if You Have an Account in the Bank)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                />
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
                  I agree to all my information being sold to major corporations
                  to feed their algorithms & help them with ad placement so they
                  can make more & more money from advertising on their platforms
                  or help them buy the right ads on the right platforms
                </label>
              </div>
              <button type="submit" className="btn btn-primary ms-1 me-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
