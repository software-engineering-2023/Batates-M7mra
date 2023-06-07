export default function Announcement() {
  return (
    <div className="row h-100 d-flex justify-content-center align-items-center">
      <div className="col-xl-8 col-lg-10 col-md-13">
        <h1 mb-3>
          Announcements <i className="bi bi-bell"></i>
        </h1>
        <div className="list-group ">
          <a
            href="/announcement/details"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Maintenance</div>A scheduled maintenance
              on our online banking system on <strong>June 15th, 2023</strong>
            </div>
            <small>
              2 hours ago<i className="bi bi-envelope-fill ms-2"></i>
            </small>
          </a>
          <a
            href="/announcement/details"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Ahmed Gomaa</div>
              meen ahmed gomaa da?
            </div>
            <small>
              3 days ago <i className="bi bi-envelope-open-fill"></i>
            </small>
          </a>
          <a
            href="/announcement/details"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">New Bank Interest Rate</div>
              We are excited to inform you that starting from next month
            </div>
            <small>
              21 days ago <i className="bi bi-envelope-open-fill"></i>
            </small>
          </a>
          <a
            href="/announcement/details"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Report 6401 Resolved</div>
              Your report has been solved succesfully review now !
            </div>
            <small>
              3 days ago <i className="bi bi-envelope-open-fill"></i>
            </small>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-xl-8 col-lg-10 col-md-13">
          <h1 mb-3>
            Reports <i className="bi bi-flag"></i>
          </h1>
          <div className="list-group ">
            <a
              href="/announcement/details"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Stolen Card</div>
                We have caught el 7aramy go check who is the theft!
              </div>
              <small>
                3 minutes ago <i className="bi bi-envelope-open-fill"></i>
              </small>
            </a>
            <a
              href="/announcement/details"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Website freeze</div>A scheduled
                maintenance on our online banking system on{" "}
                <strong>June 15th, 2023</strong> to solve this problem
              </div>
              <small>
                2 hours ago<i className="bi bi-envelope-fill ms-2"></i>
              </small>
            </a>

            <a
              href="/announcement/details"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Report 6401 Resolved</div>
                Your report has been solved succesfully review now !
              </div>
              <small>
                3 days ago <i className="bi bi-envelope-open-fill"></i>
              </small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
