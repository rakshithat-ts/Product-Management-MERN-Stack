import React from "react";

function App() {
  const busPass = {
    name: "John Doe",
    passType: "Monthly",
    route: "Route 25",
    expiry: "31 March 2026",
  };
  
  return (
    <div>
      <h1>Bus Pass Management System</h1>
      <p>Welcome to Bus Pass Portal</p>

      <h2>Bus Pass Details</h2>
      <ul>
        <li><strong>Name:</strong> {busPass.name}</li>
        <li><strong>Pass Type:</strong> {busPass.passType}</li>
        <li><strong>Route:</strong> {busPass.route}</li>
        <li><strong>Expiry Date:</strong> {busPass.expiry}</li>
      </ul>

      <button>Renew Pass</button>
      <button>View All Passes</button>
    </div>
  );
}

export default App;