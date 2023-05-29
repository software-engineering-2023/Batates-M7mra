import Link from "next/link";

export default function Welcome() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-9">
          <div className="p-5 mb-4 bg-body-tertiary rounded-3 h-100 d-flex flex-column justify-content-center">
            <div
              className=" bg-secondary d-flex justify-content-center align-items-center rounded-circle p-4 mb-5"
              style={{ width: 100, height: 100 }}
            >
              <i className="bi bi-bank display-5"></i>
            </div>
            <h1 className="display-5 fw-2 mb-5">Welcome to Nextech!</h1>
            <div className="row">
              <p className="col-md-8 fs-4">
                Nextech is a banking system that allows you to manage your
                accounts and transactions.
              </p>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-1 mt-5 g-2">
              <div className="col">
                <div className="card" style={{ height: 400 }}>
                  <div className="card-body d-flex justify-content-around flex-column align-items-center gap-3">
                    <div
                      className=" bg-secondary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className="bi bi-currency-exchange"></i>
                    </div>
                    <div className="card-title">
                      Convenient banking experience
                    </div>
                    <p>
                      Nextech provides a plethora of features designed to
                      simplify and enhance the banking experience. It offers
                      secure and convenient access to bank account information.
                      Users can check their account balances, view transaction
                      history, and track their expenses in real-time, allowing
                      individuals to stay on top of their finances and make
                      informed financial decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ height: 400 }}>
                  <div className="card-body d-flex justify-content-around flex-column align-items-center gap-3">
                    <div
                      className=" bg-secondary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className="bi bi-currency-exchange"></i>
                    </div>
                    <div className="card-title">
                      Streamlined bill management
                    </div>
                    <p>
                      Nextech includes bill payment functionalities. Users can
                      effortlessly pay their bills directly from the app,
                      eliminating the hassle of writing checks or visiting
                      physical locations. The app provides a streamlined
                      platform where users can set up automatic bill payments,
                      schedule future payments, and receive reminders for due
                      dates. This feature saves time and ensures bills are paid
                      on time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card" style={{ height: 400 }}>
                  <div className="card-body d-flex justify-content-around flex-column align-items-center gap-3">
                    <div
                      className=" bg-secondary d-flex justify-content-center align-items-center rounded-circle"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className="bi bi-currency-exchange"></i>
                    </div>
                    <div className="card-title">Enhanced Security</div>
                    <p>
                      Nextech includes bill payment functionalities. Users can
                      effortlessly pay their bills directly from the app,
                      eliminating the hassle of writing checks or visiting
                      physical locations. The app provides a streamlined
                      platform where users can set up automatic bill payments,
                      schedule future payments, and receive reminders for due
                      dates. This feature saves time and ensures bills are paid
                      on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="card w-100">
            <div className="card-body d-flex flex-column gap-4" >
              <Link href="/auth/login" className="btn btn-primary btn-lg w-100 d-flex justify-content-center align-items-center" style={{ height: 200 }}>
                <i className="bi bi-box-arrow-in-right me-3"></i> Login
              </Link>
              <Link href="/auth/registration" className="btn btn-primary btn-lg w-100 d-flex justify-content-center align-items-center" style={{ height: 200 }}>
                <i className="bi bi-person-fill-add me-3"></i> Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
