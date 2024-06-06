import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addCertificate } from "../../api";
import "./index.css";

const GenerateCertificate = () => {
  const { memberId } = useParams();
  const [achievement, setAchievement] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCertificate = { member_id: memberId, achievement, date };

    await addCertificate(newCertificate);
    // const pdfFileName = response.pdfFileName;
    // const pdfUrl = `/certificates/${pdfFileName}`;

    setSuccessMessage("Certificate generated successfully!");

    // Open the generated PDF in a new tab
    // window.open(pdfUrl, "_blank");

    // Clear form fields
    setAchievement("");
    setDate("");

    // Navigate to member-certificates route after a delay
    setTimeout(() => {
      navigate(`/member-certificates/${memberId}`);
    }, 2000); // 2-second delay to display the success message
  };

  return (
    <div className="certificate-container">
      <form onSubmit={handleSubmit} className="form-certificate-container">
        <h2 className="add-certificate-heading">
          Generate Certificate for Member ID: {memberId}
        </h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="input-container">
          <span className="span-element">Achievement</span>
          <input
            type="text"
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
            placeholder="Achievement"
            required
            className="input-value"
          />
        </div>
        <div className="input-container">
          <span className="span-element">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-value"
            required
          />
        </div>

        <button type="submit" className="generate-certificate-1">
          Generate Certificate
        </button>
      </form>
    </div>
  );
};

export default GenerateCertificate;
