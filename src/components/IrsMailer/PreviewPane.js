// PreviewPane.js
import React from 'react';



const PreviewPane = ({ content,  stringdescription}) => {

  const irsNoticeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IRS Notice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 700px;
            margin: 30px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            text-align: start;
        }
        .logo {
            margin-bottom: 20px;
        }
        .logo object {
            max-height: 100px;
            width: auto;
        }
        @media screen and (max-width: 600px) {
            .logo object {
                max-height: 80px;
            }
        }
        @media screen and (max-width: 400px) {
            .logo object {
                max-height: 60px;
            }
        }
        .content {
            text-align: left;
        }
        .signature {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
         <object data="https://chyjlcmkbpkuniircbch.supabase.co/storage/v1/object/public/IRS/irs-logo%20(2).svg?t=2024-12-10T14%3A48%3A54.248Z" type="image/svg+xml" aria-label="IRS Logo"></object>
                 </div>
        <div class="content">
           ${content}
            <p class="signature">
                Thank you for your co-operation.<br>
                Sincerely,<br>
                Heather Maloy<br>
                Director, Of Taxpayer First ActTreasury<br>
                Internal Revenue Service
            </p>
        </div>
    </div>
</body>
</html>

`;

  return (
    <div className="irs-mailer__preview">
      <h2 className="irs-mailer__preview-title">Preview</h2>
      <div
        className="irs-mailer__preview-content"
        // dangerouslySetInnerHTML={{ __html: content }}
        dangerouslySetInnerHTML={{ __html: irsNoticeHTML }}
      />
    
    </div>
  );
};

export default PreviewPane;