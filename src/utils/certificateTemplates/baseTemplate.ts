export const baseTemplate = {
    name: 'Basic Certificate',
    html_template: `<div style="
    width: 100%;
    height: 100%;
    padding: 3rem;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: double 6px #234876;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Crimson Text', 'Palatino', serif;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 0 100px rgba(43, 108, 176, 0.05);
  ">
    <!-- Decorative corner elements -->
    <div style="
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      border-top: 3px solid #234876;
      border-left: 3px solid #234876;
    "></div>
    <div style="
      position: absolute;
      top: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-top: 3px solid #234876;
      border-right: 3px solid #234876;
    "></div>
    <div style="
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      border-bottom: 3px solid #234876;
      border-left: 3px solid #234876;
    "></div>
    <div style="
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-bottom: 3px solid #234876;
      border-right: 3px solid #234876;
    "></div>
  
    <div style="max-width: 85%; width: 100%; position: relative;">
      <!-- Decorative line -->
      <div style="
        width: 120px;
        height: 3px;
        background: #234876;
        margin: 0 auto 1.5rem;
      "></div>
  
      <h1 style="
        font-size: min(2.5rem, 5.5vw);
        color: #234876;
        margin-bottom: 1rem;
        font-family: 'Trajan Pro', 'Cinzel', serif;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
      ">Certificate of Achievement</h1>
      
      <p style="
        font-size: min(1.25rem, 3vw);
        color: #4a5568;
        margin-bottom: 1.5rem;
        font-style: italic;
      ">This certifies that</p>
      
      <h2 style="
        font-size: min(2.25rem, 4.5vw);
        color: #1a365d;
        margin-bottom: 1rem;
        font-family: 'Pinyon Script', 'Brush Script MT', cursive;
        line-height: 1.2;
      ">{{recipient_name}}</h2>
      
      <p style="
        font-size: min(1.25rem, 3vw);
        color: #4a5568;
        margin-bottom: 1rem;
        font-style: italic;
      ">has successfully completed</p>
      
      <h3 style="
        font-size: min(1.75rem, 4vw);
        color: #1a365d;
        margin-bottom: 1.5rem;
        font-family: 'Trajan Pro', 'Cinzel', serif;
        font-weight: 600;
      ">{{course_title}}</h3>
      
      <p style="
        font-size: min(1.125rem, 2.75vw);
        color: #4a5568;
        margin-bottom: 2.5rem;
      ">Awarded on {{completion_date}}</p>
  
      <!-- Decorative line -->
      <div style="
        width: 80px;
        height: 2px;
        background: #234876;
        margin: 0 auto 2rem;
      "></div>
  
      <div style="
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        margin-top: auto;
        padding-top: 2rem;
      ">
        <div style="text-align: center; flex: 1; max-width: 200px; margin: 0 1rem;">
          <div style="
            width: 100%;
            height: 45px;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin-bottom: 0.75rem;
          "></div>
          <div style="
            width: 100%;
            border-top: 2px solid #234876;
            padding-top: 0.75rem;
          ">
            <p style="
              font-size: min(1.125rem, 2.75vw);
              color: #1a365d;
              margin: 0;
              font-family: 'Trajan Pro', 'Cinzel', serif;
              font-weight: 600;
            ">Course Instructor</p>
          </div>
        </div>
        
        <div style="text-align: center; flex: 1; max-width: 200px; margin: 0 1rem;">
          <div style="
            width: 100%;
            height: 45px;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin-bottom: 0.75rem;
          "></div>
          <div style="
            width: 100%;
            border-top: 2px solid #234876;
            padding-top: 0.75rem;
          ">
            <p style="
              font-size: min(1.125rem, 2.75vw);
              color: #1a365d;
              margin: 0;
              font-family: 'Trajan Pro', 'Cinzel', serif;
              font-weight: 600;
            ">Director of Education</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
  };