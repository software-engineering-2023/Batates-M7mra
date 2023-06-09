import Link from "next/link";

export default function Report() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Reports Status</h1>

      <div className="table-responsive">
        <table className="table table-success table-dark table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Report ID</th>
              <th scope="col">Report title</th>
              <th scope="col">Report Category</th>
              <th scope="col">Report Date</th>
              <th scope="col">Report Status</th>
              <th scope="col">View Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>52-7516</td>
              <td>balabizo</td>
              <td>Fraudulent Activity</td>
              <td>2023-05-25</td>
              <td>
                <span className="badge text-bg-warning">Pending</span>
              </td>
              <td>
                <Link
                  href="/report/banker/details"
                  className="btn btn-outline-primary btn-sm"
                >
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>52-7516</td>
              <td>balabizo</td>
              <td>Fraudulent Activity</td>
              <td>2023-05-26</td>
              <td>
                <span className="badge text-bg-success">Resolved</span>
              </td>
              <td>
                <Link
                  href="/report/banker/details"
                  className="btn btn-outline-primary btn-sm"
                >
                  View
                </Link>
              </td>
            </tr>
            <tr>
              <td>52-7516</td>
              <td>balabizo</td>
              <td>other</td>
              <td>2023-05-25</td>
              <td>
                <span className="badge text-bg-secondary">In Progress</span>
              </td>
              <td>
                <Link
                  href="/report/banker/details"
                  className="btn btn-outline-primary btn-sm"
                >
                  View
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
