"use client";
import Link from "next/link";
import { useState } from "react";

export default function Accounts() {
  const [showApproval, setShowApproval] = useState(false);
  const [showDeclination, setShowDeclination] = useState(false);
  const onClickApproved = () => {
    setShowApproval(true);
    setShowDeclination(false);
    setTimeout(() => {
      setShowApproval(false);
    }, 2000);
  };
  const onClickDeclined = () => {
    setShowApproval(false);
    setShowDeclination(true);
    setTimeout(() => {
      setShowDeclination(false);
    }, 2000);
  };
  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-xl-8 col-lg-10 col-md-12">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Registrant Info</h1>
            <form className="d-flex flex-column gap-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    disabled
                    placeholder="McLovin"
                  />
                </div>
                <div className="col">
                  <label htmlFor="middleName" className="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="middleName"
                    disabled
                    placeholder="John"
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    disabled
                    placeholder="Doe"
                  />
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
                    disabled
                    placeholder="McLovinDoe@hotmail.com"
                  />
                </div>
                <div className="col">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    disabled
                    placeholder="********"
                  />
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
                    disabled
                    placeholder="14787441440"
                  />
                </div>
                <div className="col">
                  <label htmlFor="dateOfBrith" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dateOfBrith"
                    disabled
                    placeholder="06 / 03 / 1981"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="countryOfResidence" className="form-label">
                    Country of Residence
                  </label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      id="countryOfResidence"
                      disabled
                    >
                      <option value="" disabled selected>
                        United States
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="cityOfResidence" className="form-label">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cityOfResidence"
                    disabled
                    placeholder="Honululu"
                  />
                </div>
              </div>
              <div className="row ms-1 me-1">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  disabled
                  placeholder="892 Momona St."
                />
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="nationality" className="form-label">
                    Nationality
                  </label>
                  <div className="input-group">
                    <select className="form-select" id="nationality" disabled>
                      <option value="" disabled selected>
                        American
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="nationalIDnumber" className="form-label">
                    National ID Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nationalIDnumber"
                    disabled
                    placeholder="61554673385"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <div className="input-group">
                    <select className="form-select" id="gender" disabled>
                      <option value="" disabled selected>
                        Male
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="maritalStatus" className="form-label">
                    Marital Status
                  </label>
                  <div className="input-group">
                    <select className="form-select" id="maritalStatus" disabled>
                      <option value="" disabled selected>
                        Single
                      </option>
                    </select>
                  </div>
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
                    disabled
                    placeholder="Red Cross"
                  />
                </div>
                <div className="col">
                  <label htmlFor="occupation" className="form-label">
                    Occupation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="occupation"
                    disabled
                    placeholder="Organ Donor"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="front" className="form-label">
                    ID Photo (Front)
                  </label>
                  <img src="/front.jpg" width={381}></img>
                </div>
                <div className="col">
                  <label htmlFor="back" className="form-label">
                    ID Photo (Back)
                  </label>
                  <img src="/back.jpg" width={381}></img>
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
                  disabled
                  placeholder="100098706540320"
                />
              </div>
              <div className="row">
                <div className="col">
                  <Link href="/registration/registration-approval">
                    <button
                      type="submit"
                      className="btn btn-success w-100"
                      onClick={onClickApproved}
                    >
                      Approve
                    </button>
                  </Link>
                </div>
                <div className="col">
                  <Link href="/registration/registration-approval">
                    <button
                      type="submit"
                      className="btn btn-danger w-100"
                      onClick={onClickDeclined}
                    >
                      Decline
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {showApproval && (
          <div className="row mt-3">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="alert alert-success d-flex justify-content-center align-items-center fs-6 ms-2">
                Credit Card Approved
              </div>
            </div>
          </div>
        )}
        {showDeclination && (
          <div className="row mt-3">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="alert alert-danger d-flex justify-content-center align-items-center fs-6 ms-2">
                Credit Card Declined
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
