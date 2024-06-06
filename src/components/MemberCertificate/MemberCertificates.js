import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMemberCertificates } from "../../api";
import "./index.css";

const MemberCertificates = () => {
  const { memberId } = useParams();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const certificates = await getMemberCertificates(memberId);
        setCertificates(certificates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, [memberId]);

  return (
    <div className="all-certificates-container">
      <h2 className="certificates-list-heading">
        Certificates for Member ID: {memberId}
      </h2>
      {loading ? (
        <div className="loading-spinner"></div>
      ) : certificates.length === 0 ? (
        <p className="loading">No achievements yet.</p>
      ) : (
        <ul className="certificates-ul-container">
          {certificates.map((certificate) => (
            <li key={certificate.id} className="certificates-li-type">
              Achievement: {certificate.achievement} <br />
              <br /> Date: {certificate.date}
              <a
                href={`https://backendmemberhubdeploylink.onrender.com/view-certificate/${certificate.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate-1"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MemberCertificates;
