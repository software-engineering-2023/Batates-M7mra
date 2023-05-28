import Link from "next/link";

export default function Report() {
   
    return (
        <div className="container mt-4" >
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
                  </tr>
                </thead>
                <tbody>
    <tr>
      <td>52-7516</td>
      <td>balabizo</td>
      <td>Technical Issues</td>
      <td>'2023-05-25'</td>
      <td><span className="badge text-bg-warning">Pending</span></td>
    </tr>
    <tr>
      <td>52-7516</td>
      <td>balabizo</td>
      <td>Fraudulent Activity</td>
      <td>'2023-05-26'</td>
      <td><span className="badge text-bg-success">Resolved</span></td>
    </tr>
    <tr>
      <td>52-7516</td>
      <td>balabizo</td>
      <td>Technical Issues</td>
      <td>'2023-05-25'</td>
      <td><span className="badge text-bg-secondary">In Progress</span></td>
    </tr>
  </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center align-items-centerd mt-2">
            <Link href="http://localhost:3000/report" className="btn btn-primary btn-lg">Submit a new Report</Link>
           
            </div>
         
         
          </div>
          
       
      );


}
       
    
