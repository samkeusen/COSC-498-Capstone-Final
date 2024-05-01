import React from 'react';

const Documentation = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/document.pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
        type="application/pdf"
        title="Document"
      />
    </div>
  );
};

export default Documentation;