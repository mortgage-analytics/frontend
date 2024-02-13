const Data = () => {
    return (
        <div>
             
<header>
        <h1 style={{ textAlign: "centre" }}>Bottlenecks</h1>
      </header>
      <main style={{ marginTop: "20px", marginLeft: "100px", textAlign: "center" }}>
        <p style={{ textAlign: "left" }}>Red</p>
        <ul style={{ textAlign: "left" }}>
          <li>Credit History and Score</li>
          <li>Income Verification</li>
          <li>Debt to Income Ratio</li>
        </ul>
        <p style={{ textAlign: "left" }}><span className="yellow-underline"><span className="black-highlight">Yellow</span></span></p>
        <ul style={{ textAlign: "left" }}>
          <li>Property Appraisal</li>
          <li>Documentation Requirements</li>
          <li>Market Conditions</li>
        </ul>
        <p style={{ textAlign: "left" }}><span className="green-underline">Green</span></p>
        <ul style={{ textAlign: "left" }}>
          <li>Regulatory Compliance</li>
          <li>Applicant Work History</li>
          <li>Down Payment Issues</li>
          <li>Stringent Underwriting Standards</li>
        </ul>
      </main>
        </div>
    );
};

export default Data;
