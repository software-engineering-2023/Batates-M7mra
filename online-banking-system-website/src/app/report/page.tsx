'use client';
import React, { ChangeEvent, useState } from 'react';

export default function Report() {
  const [showTextBox, setShowTextBox] = useState(false);

  const handleCategoryChange = (event: { target: { value: string; }; }) => {
    if (event.target.value === 'Card Issues') {
      setShowTextBox(true);
    } else {
      setShowTextBox(false);
    }
  };

    
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
          <select className="form-control" id="reportCategory" onChange={handleCategoryChange}>
            <option>Select a category</option>
            <option>Technical Issues</option>
            <option>Account Inquiries</option>
            <option>Fraudulent Activity</option>
            <option>Card Issues</option>
            <option>Other</option>
          </select>
          {showTextBox && (
        <div className="mb-3 mt-3">
        <div className="mb-3">
          <label htmlFor="reportCategory" className="form-label">Please select a Card</label>
          <select className="form-control" id="reportCategory" >
            <option>Select a card</option>
            <option>1234-5678-9012-3456</option>
            <option>9012-5678-1234-5678</option>
            <option>5678-9012-3456-1234</option>
            
          </select>
          </div>
        <div className="form-check mt-2 ms-1 ">
  <input className="form-check-input me-1 " type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label " htmlFor="flexCheckDefault">
     Apply for a replacement
  </label>
</div>
      </div>
      )}
        </div>
      
        <div className="mb-3">
          <label htmlFor="reportAttachment" className="form-label"> </label>
          <input type="file" className="form-control " id="reportAttachment" style={{width:300}}/>
        </div>
      
        <div className="d-flex justify-content-center">
        <a href="/report/status" className="btn btn-primary">Submit Report</a>
        </div>
      </form>
      

    )
}