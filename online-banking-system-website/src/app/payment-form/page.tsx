import Link from "next/link"
import { CreditCard } from "../credit-cards/page";

export default function contact() {
  return (
    <section>
      <div className="mt-5"></div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1 ms-5">Eligible</h4>
          <span className="me-5">Pay</span>
        </div>
        <Link href="/">Cancel and return to homepage </Link>
      </div>
      <div className="row ms-4  ">
        <div className="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
          <div className="card">
            <h5 className="mb-0 text-success mt-3 ms-2 mb-3">$85.00</h5>
            <h5 className="mb-3 ms-2">Bill Due Payment</h5>
            <div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row mt-1 ms-2">
                  <h6>Insurance Responsibility</h6>
                  <h6 className="fw-bold text-success ms-1">$71.76</h6>
                </div>
                <div className="d-flex flex-row align-items-center text-primary">
                  <span className="ms-1 me-2">Add Insurer card</span>
                </div>
              </div>
              <p className="ms-2">
                Insurance claim and all neccessary dependencies will be
                submitted to your insurer for the covered portion of this payment.
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row mt-1 ms-2">
                  <h6>Account Balance</h6>
                  <h6 className="fw-bold text-success ms-1">$71250.57</h6>
                </div>
                <div className="d-flex flex-row align-items-center text-primary">
                  <span className="ms-1 me-1">Add Payment card</span>
                </div>
              </div>
              <p>
                
              </p>
              {/* <div className="d-flex flex-column mb-3">
                <div
                  className="btn-group-vertical"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option1"
                  />
                  <label
                    className="btn btn-outline-primary btn-lg"
                    htmlFor="option1"
                  >
                    <div className="d-flex justify-content-between">
                      <span>VISA </span>
                      <span>**** 5436</span>
                    </div>
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="option2"
                    checked
                  />
                  <label
                    className="btn btn-outline-primary btn-lg"
                    htmlFor="option2"
                  >
                    <div className="d-flex justify-content-between">
                      <span>MASTER CARD </span>
                      <span>**** 5038</span>
                    </div>
                  </label>
                </div> */}
              {/* </div> */}
              <ul className="list-group">
              <li className="list-group-item">
              <div className="form-check d-flex justify-content-evenly align-items-center">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
              <CreditCard name="Rafeek Bassem" number="01206457557109" endYear={26} endMonth={10}/>
              </label>
              </div>
              </li>
               <li className="list-group-item p-3">
               <div className="form-check d-flex justify-content-evenly align-items-center">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
              <CreditCard name="Rafeek Bassem" number="16098760129367" endYear={30} endMonth={11}/>
               </label>
               </div>
               </li>
               </ul>
              <Link className="btn btn-primary btn-lg d-flex justify-content-center mt-2 mb-2 ms-2 me-2 " href="/thank-you">
                Proceed
              </Link>
            </div>
            </div>
          </div>
        <div className="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-1">
          <div className="card">
            <div className="p-3">
              <span className="fw-bold">Payment</span>
              <div className="d-flex justify-content-between mt-2">
                <span>contracted Price</span> <span>$186.86</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Amount Deductible</span> <span>$0.0</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Coinsurance(0%)</span> <span>+ $0.0</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Copayment </span> <span>+ 40.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span className="lh-sm">
                  Total Deductible,
                  <br />
                  Coinsurance and copay
                </span>
                <span>$40.00</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span className="lh-sm">
                  Maximum out-of-pocket <br />
                  on insurance policy
                </span>
                <span>$40.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span>Insurance Responsibility </span> <span>$71.76</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Patient Balance </span> <span>$13.24</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span>Total </span> <span className="text-success">$85.00</span>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
