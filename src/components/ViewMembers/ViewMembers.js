import React, { useEffect, useState } from "react";
import { getMembers } from "../../api";
import { Link } from "react-router-dom";
import "./index.css";

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const members = await getMembers();
        setMembers(members);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching members:", error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="all-members-container">
      <h2 className="members-list-heading">Members List</h2>
      {loading ? ( // Show loading indicator while fetching
        <div className="loading-spinner"></div>
      ) : (
        <ul className="members-ul-container">
          {members.map((member) => (
            <li key={member.id} className="member-li-type">
              <p className="name">{member.name}</p>
              <p className="email">
                <span className="user-span">Mail: </span>
                <a href={member.email} className="email-anchor">
                  {member.email}
                </a>
              </p>
              <p className="membership-status">
                <span className="user-span">Membership status: </span>
                {member.membership_status}
              </p>
              <p className="membership-status">
                <span className="user-span">Renewal Date: </span>
                {member.renewal_date}
              </p>
              <Link
                to={`/generate-certificate/${member.id}`}
                className="generate-certificate"
              >
                Generate Certificate
              </Link>

              <Link
                to={`/member-certificates/${member.id}`}
                className="view-certificate"
              >
                View Certificates
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewMembers;
