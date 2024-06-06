import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddMember from "./components/AddMember/AddMember";
import ViewMembers from "./components/ViewMembers/ViewMembers";
import GenerateCertificate from "./components/GenerateCertificate/GenerateCertificate";
import MemberCertificates from "./components/MemberCertificate/MemberCertificates";
// import SendReminders from "./components/SendReminders";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="member-hub-main-container">
        <nav className="nav-container">
          <ul className="member-ul-container">
            <li className="member-li-container">
              <a href="/add-member" className="anchor-link">
                Add Member
              </a>
            </li>
            <li className="member-li-container">
              <a href="/view-members" className="anchor-link">
                View Members
              </a>
            </li>
            {/* <li className="member-li-container">
              <a href="/send-reminders" className="anchor-link">
                Send Remainders
              </a>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/view-members" element={<ViewMembers />} />
          <Route
            path="/generate-certificate/:memberId"
            element={<GenerateCertificate />}
          />
          <Route
            path="/member-certificates/:memberId"
            element={<MemberCertificates />}
          />
          {/* <Route
            path="/view-certificate/:certificateId"
            component={ViewCertificate}
          /> */}
          {/* <Route path="/send-reminders" element={<SendReminders />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
