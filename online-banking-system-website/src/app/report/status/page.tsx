
export default function Report() {
   
    return (
        <div className="container">
          <h1 className="text-center">Report Status</h1>
          
            <div className="table-responsive">
              <table className="table table-success table-dark table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Report ID</th>
                    <th scope="col">Report title</th>
                    <th scope="col">Report Category</th>
                    <th scope="col">Report Date</th>
                    <th scope="col">Report Status</th>
                  </tr>
                </thead>
                <tbody>
    <tr>
      <td>52-7516</td>
      <td>balabizo</td>
      <td>Technical Issues</td>
      <td>'2023-05-25'</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>52-7516</td>
      <td>balabizo</td>
      <td>Fraudulent Activity</td>
      <td>'2023-05-26'</td>
      <td>Resolved</td>
    </tr>
    <tr>
      <td>52-7516</td>
      <td>balabizo</td>
      <td>Technical Issues</td>
      <td>'2023-05-25'</td>
      <td>In Progress</td>
    </tr>
  </tbody>
              </table>
            </div>
           
          <div className="position-absolute top-100 start-50 translate-middle">
          <a href="http://localhost:3000/report" className="btn btn-primary btn-lg">Go to Report Page</a>
          </div>
          </div>
          
       
      );


}
       
    
