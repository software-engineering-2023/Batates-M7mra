import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="mt-5"></div>
        <div className="mt-5">
          <div className="jumbotron text-center mt-5">
            <h1 className="display-3">Thank You!</h1>
            <p className="lead">
              <strong>Please check your email</strong> for any new updates if
              you have subscribed to our newsletter.
            </p>
            <p>
              Having trouble? <Link href="/contact-us">Contact us</Link>
            </p>
            <p className="lead">
              <Link className="btn btn-primary btn-sm" href="/" role="button">
                HomePage
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-5 mb-5"></div>
        <div className="card bg-body-tertiary">
          <div className="row mt-3 mb-1"></div>
          <section>
            <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
            <p className="text-center mb-5">
              Find the answers for the most frequently asked questions below
            </p>
            ``{" "}
            <div className="container mx-auto" style={{ width: "90%" }}>
              <div className="row ms-2">
                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-primary">
                    <i className="far fa-paper-plane text-primary pe-1"></i>
                    Is this a real bank?
                  </h6>
                  <p>
                    <strong>
                      <u></u>
                    </strong>{" "}
                    Not in the meantime, but we are working on it.
                  </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-primary">
                    <i className="fas fa-pen-alt text-primary pe-2"></i> A
                    question that is longer then the previous one?
                  </h6>
                  <p>
                    <strong>
                      <u>Yes, it is possible!</u>
                    </strong>{" "}
                    Ahmed Gomaa (37-18268) is looking into it right now.
                  </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-primary">
                    <i className="fas fa-user text-primary pe-2"></i>
                    Do we offer special promotions to clients?
                  </h6>
                  <p>
                    We currently only offer promotions on buying big macs and
                    laundry detergent.
                  </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-primary">
                    <i className="fas fa-rocket text-primary pe-2"></i>
                    Can i calculate the monthly payment of a loan?
                  </h6>
                  <p>
                    Yes. Go to the loans section of your dashboard and you will
                    find a loan calculator that doesn't work.
                  </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-primary">
                    <i className="fas fa-home text-primary pe-2"></i>
                    who's the best member on this team?
                  </h6>
                  <p>
                    <strong>Everyone is equally as good.</strong> (Rafeek).
                  </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                  <h6 className="mb-3 text-primary">
                    <i className="fas fa-book-open text-primary pe-2"></i>
                    Cereal before milk or milk before cereal?
                  </h6>
                  <p>Cereal first, obviously.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
