import Link from "next/link";

export default function contact() {
  return (
    <div className="mb-4">
      <h2 className="h1-responsive font-weight-bold my-4 ms-5">
        Contact us
      </h2>

      <p className="w-responsive mx-auto mb-5 ms-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="row ms-5">
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name" className="">
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email" className="mb-3">
                    Your email
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label htmlFor="subject" className="mb-3">
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control md-textarea"
                  ></textarea>
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <Link className="btn btn-primary btn-lg w-25" href="/thank-you">
              Send
            </Link>
          </div>
          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Cairo, CA 94126, Egypt</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+2 103041412</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@btatesM7amara.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
