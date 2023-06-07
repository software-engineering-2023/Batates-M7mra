import Link from "next/link";

export default function contact() {
  return (
    <div className="card">
      <div className="card-body" style={{ padding: 30, paddingTop: 60 }}>
        <div className="container">
          <div className="mb-5">
            <h2 className="fs-1">Contact Us</h2>
            <p className="w-responsive">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>
          </div>

          <div className="row gx-5">
            <div className="col-md-8">
              <form className="d-flex flex-column gap-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex flex-column gap-2">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-column gap-2">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-column gap-2">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-column gap-2">
                      <label htmlFor="message">Your Message</label>

                      <textarea
                        id="message"
                        name="message"
                        className="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <Link className="btn btn-primary btn-lg w-25" href="/thank-you">
                  Send
                </Link>
              </form>
            </div>

            <div className="col-md-4">
              <div className="card bg-body-tertiary">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3 bg-body-tertiary">
                      <i className="bi bi-geo-fill me-3"></i>
                      Cairo, CA 94126, Egypt
                    </li>

                    <li className="list-group-item p-3 bg-body-tertiary">
                      <i className="bi bi-phone me-3"></i>
                      +2 103041412
                    </li>

                    <li className="list-group-item p-3 bg-body-tertiary">
                      <i className="bi bi-envelope me-3"></i>
                      contact@btatesM7amara.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
