import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMember } from "../../api";
import "./index.css";

const AddMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMember = {
      name,
      email,
      membership_status: membershipStatus,
      renewal_date: renewalDate,
    };

    try {
      await addMember(newMember);
      setSuccessMessage("Member added successfully!");
      // Clear form fields
      setName("");
      setEmail("");
      setMembershipStatus("");
      setRenewalDate("");
      // Navigate to view-members route after a delay
      setTimeout(() => {
        navigate("/view-members");
      }, 2000); // 2-second delay to display the success message
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  return (
    <div className="add-members-container">
      <h1 className="add-member-heading">Add Member to memberhub</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <span className="span-element">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="input-value"
          />
        </div>
        <div className="input-container">
          <span className="span-element">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input-value"
            required
          />
        </div>
        <div className="input-container">
          <span className="span-element">Membership Status</span>
          <select
            className="input-value"
            value={membershipStatus}
            onChange={(e) => setMembershipStatus(e.target.value)}
            required
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="input-container">
          <span className="span-element">Renewal Date</span>
          <input
            type="date"
            value={renewalDate}
            onChange={(e) => setRenewalDate(e.target.value)}
            placeholder="Renewal Date"
            className="input-value"
            required
          />
        </div>

        <button type="submit" className="add-member">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMember;
