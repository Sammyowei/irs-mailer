// IrsMailer.js
import React, { useState } from 'react';
import QuillEditor from './QuillEditor';
import PreviewPane from './PreviewPane';
import Button from './Button';
import Input from './Input';
import './IrsMailer.css';
import axios  from 'axios';

const IrsMailer = () => {
  const [targetEmail, setTargetEmail] = useState('');
 
  const [quillContent, setQuillContent] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [quillJsonContent, setQuillJsonContent] = useState('')

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillContent(content);
    setQuillJsonContent(editor.getContents())



  };

  const handleSend = async () => {
    setIsSending(true);

    // Simulate sending the email
    const API_URL = 'https://email-server-5yc7.onrender.com/send-email';


   



    // console.log('Email sent successfully:', response.data);
    
    console.log('Target Email:', targetEmail);
    console.log('Quill Content:',quillJsonContent);
    try {


      const payload = {
        email: targetEmail,
        subject: emailSubject,
        content: quillContent,
      }
      const response = await axios.post(API_URL, payload);
      setIsSending(false);
      setShowPreview(false);
      setEmailSubject('');
      setTargetEmail('');
      setQuillContent('');
      alert(`Message Sent  Successfully:  ${response.data}` )
      return response.data;

  } catch (error) {
      console.error('Error sending email:', error.response?.data || error.message);
      alert(`Message Sent  Failed:  ${error.response?.data || error.message}` )
      setIsSending(false);
      setShowPreview(false);
      throw error;
  }

   

  

  };

  return (
    <div className="irs-mailer">
      <h1 className="irs-mailer__title">IRS MAILER</h1>
      <div className="irs-mailer__input-wrapper">
        <Input
          type="email"
          placeholder="Enter email address (Required)"
          value={targetEmail}
          onChange={setTargetEmail}
        ></Input>
              <Input
          type="text"
          placeholder="Email Subject"
          value={emailSubject}
          onChange={setEmailSubject}
          
        ></Input>

      </div>
      <QuillEditor value={quillContent} onChange={handleQuillChange}></QuillEditor>
      {showPreview && (
        <PreviewPane content={quillContent} ></PreviewPane>
      )}
      <div className="irs-mailer__actions">
        <Button
          onClick={() => setShowPreview(!showPreview)}
          className={showPreview ? 'irs-mailer__preview-button--active' : ''}
        >
          {showPreview ? 'Hide Preview' : 'Preview'}
        </Button>
        <Button
          onClick={handleSend}
          className={`irs-mailer__send-button ${
            isSending ? 'irs-mailer__send-button--sending' : ''
          }`}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  );
};

export default IrsMailer;