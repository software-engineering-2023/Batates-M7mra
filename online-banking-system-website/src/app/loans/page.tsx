import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div>
      <div className="row mb-5">
        <div className="col-3"></div>
        <div className="col-5">
          <div className="d-grid gap-2">
            <Link
              className="btn btn-primary btn-lg w-100 h-100"
              type="button"
              href="/loans/loan-application"
            >
              Apply For A Loan
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col ms-4 mt-3">
              <div className="card-title">Active Loans</div>
            </div>
          </div>
          <div className="card-body">
            <div className="row h-100 d-flex">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">Loan Info</div>
                    <h4>احمد جمعة استلف من البنك فلوس</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">Installments</div>
                    <h4>رجع الللى عليك يا جمعة</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row h-100 d-flex">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">Loan Info</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">Installments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row h-100 d-flex">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">Loan Info</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">Installments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div className="card">
      <div className="row">
        <div className="col-md-6 mx-auto calculate-form">
          <div className="card card-body text-center mt-5">
            <h1 className="heading display-5 pb-3">Loan Calculator</h1>
            <form id="loan-form">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="Loan Amount"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">%</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="interest"
                    placeholder="Interest"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="years"
                  className="form-control"
                  placeholder="Years To Repay"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Calculate"
                  className="btn btn-block btn-primary btn-lg w-75 mt-2 mb-2"
                />
              </div>
            </form>
            {/* <div id="loading">
              <img
                src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"
                alt=""
              />
            </div> */}
            <div id="result">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Monthly Payment</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="monthly-payment"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Total Payment</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="total-payment"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Total Interest</span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="total-interest"
                    disabled
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
