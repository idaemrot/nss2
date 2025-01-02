export const defaultTemplate = {
  name: 'Basic Template',
  html_template: `
    <div style="
      width: 100%;
      height: 100%;
      padding: 48px;
      background: linear-gradient(135deg, #f6f8fa 0%, #ffffff 100%);
      border: 2px solid #1a365d;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: 'Times New Roman', serif;
    ">
      <h1 style="
        font-size: 48px;
        color: #1a365d;
        margin-bottom: 24px;
      ">Certificate of Completion</h1>
      
      <p style="
        font-size: 24px;
        color: #4a5568;
        margin-bottom: 48px;
      ">This is to certify that</p>
      
      <h2 style="
        font-size: 36px;
        color: #2d3748;
        margin-bottom: 24px;
      ">{{recipient_name}}</h2>
      
      <p style="
        font-size: 24px;
        color: #4a5568;
        margin-bottom: 24px;
      ">has successfully completed the course</p>
      
      <h3 style="
        font-size: 32px;
        color: #2d3748;
        margin-bottom: 48px;
      ">{{course_title}}</h3>
      
      <p style="
        font-size: 20px;
        color: #4a5568;
      ">Completed on {{completion_date}}</p>
    </div>
  `
};