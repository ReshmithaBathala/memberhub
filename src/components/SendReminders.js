import React from "react";

const SendReminders = () => {
  const sendReminders = () => {
    fetch("http://localhost:3000/send-reminders", { method: "POST" })
      .then((response) => response.json())
      .then((data) => console.log("Reminders sent:", data))
      .catch((error) => console.error("Error sending reminders:", error));
  };

  return (
    <div>
      <h2>Send Reminders</h2>
      <button onClick={sendReminders}>Send Reminders</button>
    </div>
  );
};

export default SendReminders;
