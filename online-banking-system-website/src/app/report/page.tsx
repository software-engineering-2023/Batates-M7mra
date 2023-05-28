export default function Report() {
    
    return(
        <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="reportTitle" className="form-label">Report Title</label>
          <input type="text" className="form-control" id="reportTitle" placeholder="Enter report title" />
        </div>
      
        <div className="mb-3">
          <label htmlFor="reportDescription" className="form-label">Report Description</label>
          <textarea className="form-control" id="reportDescription" rows={5} placeholder="Enter report description"></textarea>
        </div>
      
        <div className="mb-3">
          <label htmlFor="reportCategory" className="form-label">Report Category</label>
          <select className="form-control" id="reportCategory">
            <option>Select a category</option>
            <option>Technical Issues</option>
            <option>Account Inquiries</option>
            <option>Fraudulent Activity</option>
            <option>Card Issues</option>
            <option>Other</option>
          </select>
        </div>
      
        <div className="mb-3">
          <label htmlFor="reportAttachment" className="form-label"> </label>
          <input type="file" className="form-control " id="reportAttachment" style={{width:300}}/>
        </div>
      
        <div className="d-flex justify-content-center">
        <a href="http://localhost:3000/report/status" className="btn btn-primary">Submit Report</a>
        </div>
      </form>
      

    )
}