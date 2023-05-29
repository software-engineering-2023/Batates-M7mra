import Link from "next/link";

export default function Accounts() {
  return (
    <>
      <h1 className="card-title">Pending Credit Card Approvals</h1>
      <table className="table table-striped table-hover table-dark table-responsive">
        <thead>
          <tr>
            <th scope="col" className="fs-3">
              #
            </th>
            <th scope="col" className="fs-3">
              Name
            </th>
            <th scope="col" className="fs-3">
              Age
            </th>
            <th scope="col" className="fs-3">
              Gender
            </th>
            <th scope="col" className="fs-3">
              Card Type
            </th>
            <th scope="col" className="fs-3">
              Applicant Info
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>McLovin Doe</td>
            <td>42</td>
            <td>Male</td>
            <td>Platinum</td>
            <td>
              <Link href="/credit-cards/open/open-approval/open-approval-info">
                <button type="button" className="btn btn-secondary btn-sm w-50">
                  View
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>John Doe</td>
            <td>33</td>
            <td>Male</td>
            <td>Gold</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jane Doe</td>
            <td>25</td>
            <td>Female</td>
            <td>Silver</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Makin Doe</td>
            <td>22</td>
            <td>Male</td>
            <td>Platinum</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Bakin Doe</td>
            <td>18</td>
            <td>Female</td>
            <td>Silver</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Chasin Doe</td>
            <td>21</td>
            <td>Female</td>
            <td>Gold</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Eatin Doe</td>
            <td>50</td>
            <td>Female</td>
            <td>Platinum</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Fakin Doe</td>
            <td>52</td>
            <td>Female</td>
            <td>Silver</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Justin Doe</td>
            <td>25</td>
            <td>Male</td>
            <td>Gold</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Lovin Doe</td>
            <td>40</td>
            <td>Male</td>
            <td>Platinum</td>
            <td>
              <button type="button" className="btn btn-secondary btn-sm w-50">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
