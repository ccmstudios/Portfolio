import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import { Document, Page } from 'react-pdf';
import File from '../assets/pdf/resume.pdf'

class Resume extends React.Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
  
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
  
    render() {
      const { pageNumber, numPages } = this.state;
  
      return (
        <div>
          <Document
            file="http://localhost:3000/src/assets/pdf/resume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
    }
  }

export default Resume;
         