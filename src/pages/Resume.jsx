function Resume () {
    return (
      <div className="main-content">
        <h1>Resume</h1>
        <p>Click below to view or download my resume:</p>
        <a
          href="/CMurillo_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#77bbbb",
            textDecoration: "underline",
            fontSize: "18px"
          }}
        >
          View My Resume (PDF)
        </a>            
      </div>
    );
}


export default Resume;