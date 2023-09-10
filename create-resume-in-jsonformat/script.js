const fs = require('fs');

let resumeData = {
    "name": "M.Mohana priyadharshini",
    "contact": {
      "email": "priyadharshinim1308@gmail.com",
      "phone": "7010687898",
      "address": "2/131A,balaji nagar,2nd street,vandiyur Madurai-625020"
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "university": "Ambiga College of arts and science for women",
        "year": "2017-2020"
      },
      {
        "degree": "Master of Science in Data Science",
        "school": "The American College",
        "year": "2020-2022"
      }
    ],
    "experience": [
      {
        "position": "RPA Developer",
        "company": "Aparajitha corprate service private limited",
        "startDate": "August 2022",
        "endDate": "Present",
        "responsibilities": [
          "Developin new automation flow in microsoft power automate tool and python with selenium automation ",
          "Monitor the bots and fix the production bugs",
          "Testing and debugging code"
        ]
      },
    ],
    "skills": [
      "JavaScript",
      "HTML",
      "CSS",
      "python",
      "selenium automation",
      "MYSQL",
      "Microsoft power automate tool"
    ]
  };  

let jsonResume = JSON.stringify(resumeData, null, 2);

fs.writeFile('resume.json', jsonResume, (err) => {
  if (err) throw err;
  console.log('Resume data saved to resume.json');
});
