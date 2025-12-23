import React from "react";

export default function SmartDeskLanding() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1e56a0", color: "white", padding: "20px" }}>
        <h1>Smart Desk IT Support</h1>
        <p>Fast. Professional. Trusted.</p>
      </div>

      {/* Hero Section */}
      <div style={{ padding: "30px" }}>
        <h2>Reliable Onsite IT Support in Kanpur</h2>
        <p>
          We provide professional IT support services including desktop,
          laptop, printer, networking and AMC services for offices and
          businesses.
        </p>

        <p>
          📞 <b>Call:</b> 7266076506 <br />
          📧 <b>Email:</b> ankurvermashivam11d@gmail.com
        </p>

        <button
          style={{
            padding: "10px 20px",
            background: "#1e56a0",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Request IT Support
        </button>
      </div>

      {/* Services */}
      <div style={{ background: "#f3f6f9", padding: "30px" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Desktop & Laptop Support</li>
          <li>Printer & Scanner Installation</li>
          <li>LAN & Networking Support</li>
          <li>New Employee System Setup</li>
          <li>AMC (Annual Maintenance Contract)</li>
          <li>Remote IT Support</li>
        </ul>
      </div>

      {/* Rate Card */}
      <div style={{ padding: "30px" }}>
        <h2>Rate Card</h2>
        <ul>
          <li>Onsite Visit: ₹500 – ₹700</li>
          <li>Urgent Visit: ₹700 – ₹900</li>
          <li>Full Day Engineer: ₹1,800 – ₹2,200</li>
          <li>Remote Support: ₹500 per session</li>
        </ul>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#1e56a0",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Smart Desk IT Support – Kanpur
      </div>
    </div>
  );
}