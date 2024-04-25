import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// Import PDF file here
import pdfFile from '../../data/document.pdf';

const Documentation = () => {
    return (
        <div>
            <h1>Documents</h1>
            <div style={{ height: '750px' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfFile} />
                </Worker>
            </div>
        </div>
    );
}

export default Documentation;
