"use client";
import React, { useState } from "react";
export default function BankAnnouncement() {
  const [showTextBox, setShowTextBox] = useState(false);

  return (
    <form className="mt-4">
      {showTextBox && (
        <div className="alert alert-success" role="alert">
          Announcement Sent succesfully !
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="reportTitle" className="form-label">
          Announcement Title
        </label>
        <input
          type="text"
          className="form-control"
          id="reportTitle"
          placeholder="Enter Announcement title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reportDescription" className="form-label">
          Announcement Description
        </label>
        <textarea
          className="form-control"
          id="reportDescription"
          rows={5}
          placeholder="Enter Announcement Details"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reportDescription" className="form-label">
          Select Receiver
        </label>

        <ul className="list-group col-xl-2 col-lg-2 col-md-2">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="firstCheckbox"
            />
            <label className="form-check-label" htmlFor="firstCheckbox">
              Banker
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="secondCheckbox"
            />
            <label className="form-check-label" htmlFor="secondCheckbox">
              Vip Client
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="thirdCheckbox"
            />
            <label className="form-check-label" htmlFor="thirdCheckbox">
              Client
            </label>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <label htmlFor="reportAttachment" className="form-label">
          {" "}
        </label>
        <input
          type="file"
          className="form-control "
          id="reportAttachment"
          style={{ width: 300 }}
        />
      </div>

      <div className="d-flex justify-content-center align-items-centerd mt-2">
        <button
          type="button"
          onClick={() => {
            setShowTextBox(true);
            setTimeout(() => {
              setShowTextBox(false);
            }, 3000);
          }}
          className="btn btn-primary"
          id="liveAlertBtn"
        >
          Send Announcement
        </button>
      </div>
    </form>
  );
}
