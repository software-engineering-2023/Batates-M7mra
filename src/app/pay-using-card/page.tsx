import Link from "next/link";

export default function Home() {
  return (
    <section className="gradient-custom">
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-7 col-lg-5 col-xl-4">
            <div className="card">
              <div className="card-body p-4">
                <form>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="typeText"
                        className="form-control form-control-lg"
                        size={17}
                        placeholder="1234 5678 9012 3457"
                      />
                      <label className="form-label" htmlFor="typeText">
                        Card Number
                      </label>
                    </div>
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="typeName"
                        className="form-control form-control-lg"
                        placeholder="Cardholder's Name"
                      />
                      <label className="form-label" htmlFor="typeName">
                        Cardholder&apos;s Name
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="typeExp"
                        className="form-control form-control-lg"
                        placeholder="MM/YYYY"
                        size={7}
                      />
                      <label className="form-label" htmlFor="typeExp">
                        Expiration
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                        type="password"
                        id="typeText2"
                        className="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;"
                      />
                      <label className="form-label" htmlFor="typeText2">
                        Cvv
                      </label>
                    </div>
                  </div>
                  <Link
                    type="button"
                    href=""
                    className="btn btn-info btn-lg btn-rounded"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
