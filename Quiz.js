function displayQuiz() {
  const questions = [
    {
      question:
        "Do you imagine designing a space for hosting gatherings and meeting new people?",
      choices: ["Yes", "No"],
      weights: [
        { Extraversion: +1, Introversion: 0 },
        { Extraversion: 0, Introversion: +1 },
      ],
    },
    {
      question:
        "Do you feel shy about sharing and promoting your space design ideas to strangers?",
      choices: ["Yes", "No"],
      weights: [
        { Extraversion: 0, Introversion: +1 },
        { Extraversion: +1, Introversion: 0 },
      ],
    },
    {
      question: "Are you comfortable starting conversations with new people?",
      choices: ["Yes", "No"],
      weights: [
        { Extraversion: +1, Introversion: 0 },
        { Extraversion: 0, Introversion: +1 },
      ],
    },
    {
      question:
        "Do you prefer spending time in your cozy space alone rather than with others? ",
      choices: ["Yes", "No"],
      weights: [
        { Extraversion: 0, Introversion: +1 },
        { Extraversion: +1, Introversion: 0 },
      ],
    },
    {
      question:
        "Do you prefer unique and complex design over minimal or simple ones?",
      choices: ["Yes", "No"],
      weights: [
        { sensing: 0, intuition: +1 },
        { sensing: +1, intuition: 0 },
      ],
    },
    {
      question:
        "Do you find discussing different design interpretations boring?",
      choices: ["Yes", "No"],
      weights: [
        { sensing: +1, intuition: 0 },
        { sensing: 0, intuition: +1 },
      ],
    },
    {
      question:
        "Are you always searching for new ideas and knowledge to enhance your dream space?",
      choices: ["Yes", "No"],
      weights: [
        { sensing: 0, intuition: +1 },
        { sensing: +1, intuition: 0 },
      ],
    },
    {
      question:
        " Are discussions about abstract ideas generally not interesting to you?",
      choices: ["Yes", "No"],
      weights: [
        { sensing: +1, intuition: 0 },
        { sensing: 0, intuition: +1 },
      ],
    },
    {
      question:
        "Do you choose designs that you feel a strong emotional connection to, even if they're not practical?",
      choices: ["Yes", "No"],
      weights: [
        { thinking: 0, feeling: +1 },
        { thinking: +1, feeling: 0 },
      ],
    },
    {
      question:
        " Do you prioritize practicality over feelings when planning your space?",
      choices: ["Yes", "No"],
      weights: [
        { thinking: +1, feeling: 0 },
        { thinking: 0, feeling: +1 },
      ],
    },
    {
      question:
        "Does the nostalgic value of a space matter more to you than its practical use?",
      choices: ["Yes", "No"],
      weights: [
        { thinking: 0, feeling: +1 },
        { thinking: +1, feeling: 0 },
      ],
    },
    {
      question:
        "Do you care more about proving your point in disagreements than others' feelings?",
      choices: ["Yes", "No"],
      weights: [
        { thinking: +1, feeling: 0 },
        { thinking: 0, feeling: +1 },
      ],
    },
    {
      question:
        "Do you always keep your living or working space clean and organized?",
      choices: ["Yes", "No"],
      weights: [
        { judging: +1, perceiving: 0 },
        { judging: 0, perceiving: +1 },
      ],
    },
    {
      question: "Do you often go through your day without a schedule?",
      choices: ["Yes", "No"],
      weights: [
        { judging: 0, perceiving: +1 },
        { judging: +1, perceiving: 0 },
      ],
    },
    {
      question: "Do you plan and finish tasks early?",
      choices: ["Yes", "No"],
      weights: [
        { judging: +1, perceiving: 0 },
        { judging: 0, perceiving: +1 },
      ],
    },
    {
      question: " Do you usually finish tasks at the last minute?",
      choices: ["Yes", "No"],
      weights: [
        { judging: 0, perceiving: +1 },
        { judging: +1, perceiving: 0 },
      ],
    },
    {
      question:
        "Do you prefer busy and bustling spaces over quiet and intimate ones?",
      choices: ["Yes", "No"],
      weights: [
        { Extraversion: +1, Introversion: 0 },
        { Extraversion: 0, Introversion: +1 },
      ],
    },
    {
      question:
        " Do you like exploring new ideas and perspectives for your space?",
      choices: ["Yes", "No"],
      weights: [
        { sensing: 0, intuition: +1 },
        { sensing: +1, intuition: 0 },
      ],
    },
    {
      question:
        "Do you follow your heart when practicality and emotions clash?",
      choices: ["Yes", "No"],
      weights: [
        { thinking: 0, feeling: +1 },
        { thinking: +1, feeling: 0 },
      ],
    },
    {
      question:
        "If interrupted while answering these questions, do you focus on getting back on track right away?",
      choices: ["Yes", "No"],
      weights: [
        { judging: +1, perceiving: 0 },
        { judging: 0, perceiving: +1 },
      ],
    },

    {
      question: "Processing your Results...",
      choices: ["Collect my MBTI Personality!"],
      weights: [
        { Extroversion: 0, Introversion: 0 },
        { Introversion: 0, Extroversion: 0 },
      ],
    },
  ];

  //Variables for scores
  let currentQuestionIndex = 0;
  let Introversion = 0;
  let Extroversion = 0;
  let judging = 0;
  let perceiving = 0;
  let sensing = 0;
  let intuition = 0;
  let thinking = 0;
  let feeling = 0;

  function displayQuestionImage(questionIndex) {
    const imageURLs = [
      "images/Q1.jpg",
      "images/Q2.jpg",
      "images/Q3.jpg",
      "images/Q4.jpg",
      "images/Q5.jpg",
      "images/Q6.jpg",
      "images/Q7.jpg",
      "images/Q8.jpg",
      "images/Q9.jpg",
      "images/Q10.jpg",
      "images/Q11.jpg",
      "images/Q12.jpg",
      "images/Q13.jpg",
      "images/Q14.jpg",
      "images/Q15.jpg",
      "images/Q16.jpg",
      "images/Q17.jpg",
      "images/Q18.jpg",
      "images/Q19.jpg",
      "images/Q20.jpg",
      "images/processing.gif",
    ];
    const questionImageElement = document.getElementById("question-image");
    questionImageElement.src = imageURLs[questionIndex];
  }

  document.getElementById("begin-quiz").addEventListener("click", function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
  });

  //Function to display the current question and choices
  function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const choiceContainers = document.getElementById("choices");

    choiceContainers.innerHTML = "";

    questionElement.textContent = currentQuestion.question;

    displayQuestionImage(currentQuestionIndex);

    currentQuestion.choices.forEach((choice, index) => {
      //Buttons for choices
      if (choice === "Collect my MBTI Personality!") {
        choiceContainers.style.display = "none";
        setTimeout(()=> handleChoiceClick(index),4000); 
      }else{
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choices");
        button.addEventListener("click", () => handleChoiceClick(index));
        choiceContainers.appendChild(button);
      }
    });
  }


  //Function to handle choice click
  function handleChoiceClick(choiceIndex) {
    // Update scores based on user response
    const currentQuestion = questions[currentQuestionIndex];
    const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
    console.log("Selected choice weight:", selectedChoiceWeight);

    //Update scores based on weight of selected choice
    if (selectedChoiceWeight.hasOwnProperty("Introversion")) {
      Introversion += selectedChoiceWeight.Introversion;
    }
    if (selectedChoiceWeight.hasOwnProperty("Extroversion")) {
      Extroversion += selectedChoiceWeight.Extroversion;
    }
    if (selectedChoiceWeight.hasOwnProperty("judging")) {
      judging += selectedChoiceWeight.judging;
    }
    if (selectedChoiceWeight.hasOwnProperty("perceiving")) {
      perceiving += selectedChoiceWeight.perceiving;
    }
    if (selectedChoiceWeight.hasOwnProperty("sensing")) {
      sensing += selectedChoiceWeight.sensing;
    }
    if (selectedChoiceWeight.hasOwnProperty("intuition")) {
      intuition += selectedChoiceWeight.intuition;
    }
    if (selectedChoiceWeight.hasOwnProperty("thinking")) {
      thinking += selectedChoiceWeight.thinking;
    }
    if (selectedChoiceWeight.hasOwnProperty("feeling")) {
      feeling += selectedChoiceWeight.feeling;
    }

    //Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
    } else {
      calculateMBTITypeAndDisplayImage();
    }
  }

  const formLinks = {
    "ENTJ": "https://forms.gle/link_for_ENTJ",
    "INTJ": "https://forms.gle/link_for_INTJ",
    "ENTP": "https://forms.gle/link_for_ENTP",
    "INTP": "https://forms.gle/link_for_INTP",
    "ENFJ": "https://forms.gle/link_for_ENFJ",
    "INFJ": "https://forms.gle/link_for_INFJ",
    "ENFP": "https://forms.gle/link_for_ENFP",
    "INFP": "https://forms.gle/link_for_INFP",
    "ESFJ": "https://forms.gle/link_for_ESFJ",
    "ISFJ": "https://forms.gle/link_for_ISFJ",
    "ESTJ": "https://forms.gle/link_for_ESTJ",
    "ISTJ": "https://forms.gle/link_for_ISTJ",
    "ESTP": "https://forms.gle/link_for_ESTP",
    "ISTP": "https://forms.gle/link_for_ISTP",
    "ESFP": "https://forms.gle/link_for_ESFP",
    "ISFP": "https://forms.gle/link_for_ISFP",
  };

  //Function to calculate MBTI type based on scores and display image
  function calculateMBTITypeAndDisplayImage() {
    const introextro = Introversion > Extroversion ? "I" : "E";
    const sensint = sensing > intuition ? "S" : "N";
    const thinkfeel = thinking > feeling ? "T" : "F";
    const judgeper = judging > perceiving ? "J" : "P";
    const mbtiTypeString = introextro + sensint + thinkfeel + judgeper;

    console.log("MBTI Type:", mbtiTypeString);
    userPersonality = mbtiTypeString;
    formLink = formLinks[mbtiTypeString.toString()] || "https://forms.gle/F3NSKAKM3p3Zvo9t6";
    console.log("FormLink:", formLink);

    // Hide the quiz-related elements from the DOM
    const questionElement = document.getElementById("question");
    const choiceContainers = document.getElementById("choices");
    const quizContainer = document.getElementById("quiz");
    const thumbnailImage = document.querySelector('img[src="images/processing.gif"]');

    if (questionElement) questionElement.remove();
    if (choiceContainers) choiceContainers.remove();
    if (quizContainer) quizContainer.remove();
    if (thumbnailImage) thumbnailImage.remove();

    displayImage(mbtiTypeString);

    document.getElementById("results").style.display = "block";
  }

  //Function to calculate MBTI type and return image URL
  function getMBTIImageUrl(mbtiTypeString) {
    const MBTIImageUrls = {
      ENTJ: "images/COMMANDER.gif",
      INTJ: "images/COMMANDER.gif",//architect
      ENTP: "images/COMMANDER.gif",//debator
      INTP: "images/COMMANDER.gif",//thinker
      ENFJ: "images/COMMANDER.gif",//giver
      INFJ: "images/COMMANDER.gif",//advocate
      ENFP: "images/COMMANDER.gif",//champion
      INFP: "images/COMMANDER.gif",//mediator
      ESFJ: "images/COMMANDER.gif",//caregiver
      ISFJ: "images/COMMANDER.gif",//protector
      ESTJ: "images/COMMANDER.gif",//director
      ISTJ: "images/COMMANDER.gif",//inspector
      ESTP: "images/COMMANDER.gif",//persuade
      ISTP: "images/COMMANDER.gif",//crafter
      ESFP: "images/COMMANDER.gif",//performer
      ISFP: "images/COMMANDER.gif",//artist
    };
    return MBTIImageUrls[mbtiTypeString] || "";
  }

  //Display image
  function displayImage(mbtiTypeString) {
    const imageURL = getMBTIImageUrl(mbtiTypeString);
    const mbtiImageContainer = document.getElementById('mbti-image');
    if (mbtiImageContainer) {
      const imageElement = document.createElement('img');
      imageElement.src = imageURL;
      mbtiImageContainer.appendChild(imageElement);
    }
  }

  //Display the first question when the quiz starts
  displayCurrentQuestion();
  document.addEventListener('DOMContentLoaded', () => {
    const choiceContainers = document.querySelectorAll('.choice-container');
    choiceContainers.forEach((container) => {
      const choices = container.querySelectorAll('button');
      choices.forEach((choice, choiceIndex) => {
        choice.addEventListener('click', () => {
          handleChoiceClick(choiceIndex);
        });
      });
    });
  });
}

// Constants
let formLink = "";
let adminEmailId = "yourdesign.spatially@gmail.com";
let userPersonality = "";

// API URL
const API_URL = "https://j7fjckf107.execute-api.ap-south-1.amazonaws.com/send-mail";

//Call function to start the quiz
displayQuiz();

// Add event listener for the button click
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("back-to-home");
  backButton.addEventListener("click", function () {
    // Redirect to the home page or perform any other action you want
    window.location.href = ""; // Replace 'home.html' with the actual URL of your home page
  });
});

// Function to navigate back to the home page
function navigateToHomePage() {
  // Reset quiz state if needed
  resetQuiz(); // Assuming you have a resetQuiz() function defined

  // Hide quiz page and show the home page
  document.getElementById("home").style.display = "block";
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("form-page").style.display = "none";
}

document.getElementById("get-more-info").addEventListener("click", () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("form-page").style.display = "block";
});


document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const number = document.getElementById('number').value.trim();
  const email = document.getElementById('email').value.trim();
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  if (!name || !number || !email) {
    alert('Please fill in all fields.');
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate phone number (simple validation for demonstration)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(number)) {
    alert('Please enter a valid phone number (10 digits).');
    return;
  }

  try {

    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    const userResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject: 'We need more preferences of yours!',
        html: getUserEmailTemplate(name, formLink),
      }),
    });

    const adminResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        to: adminEmailId,
        subject: 'New User Submission',
        html: getAdminEmailTemplate(name, number, email, userPersonality),
      }),
    });

    const userData = await userResponse.json();
    const adminData = await adminResponse.json();

    if (!userData.success || !adminData.success) {
      return alert(`Error: ${userData.message || adminData.message}`);
    }

    alert('Email sent successfully!');
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('form-page').style.display = 'none';
    window.location.reload();
  } catch (error) {
    console.log(error);
    alert('Something went wrong. Please try again later.');
  } finally {
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
  }
});


const getUserEmailTemplate = (name, formLink) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
              color: #333;
          }
          .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 10px 0;
              border-radius: 8px 8px 0 0;
          }
          .content {
              padding: 20px;
          }
          .content h1 {
              color: #4CAF50;
          }
          .content p {
              font-size: 16px;
              line-height: 1.5;
          }
          .button-container {
              text-align: center;
              margin-top: 20px;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              color: #ffffff;
              background-color: #4CAF50;
              border: none;
              border-radius: 4px;
              text-decoration: none;
          }
          .footer {
              text-align: center;
              font-size: 14px;
              color: #777;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <div class="header">
              <h1>Hello, ${name}!</h1>
          </div>
          <div class="content">
              <h1>Hi ${name}!</h1>
              <p>We need more preferences of yours. Please fill out the form using the link below:</p>
              <div class="button-container">
                  <a href="${formLink}" class="button">Fill Out the Form</a>
              </div>
          </div>
          <div class="footer">
              <p>Thank you for your time and feedback!</p>
          </div>
      </div>
  </body>
  </html>
  `;
};

const getAdminEmailTemplate = (name, number, email, personality) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New User Submission</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
              color: #333;
          }
          .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 10px 0;
              border-radius: 8px 8px 0 0;
          }
          .content {
              padding: 20px;
          }
          .content h1 {
              color: #4CAF50;
          }
          .content p {
              font-size: 16px;
              line-height: 1.5;
          }
          .footer {
              text-align: center;
              font-size: 14px;
              color: #777;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <div class="header">
              <h1>New User Submission</h1>
          </div>
          <div class="content">
              <h1>User Information</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone Number:</strong> ${number}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Personality:</strong> ${personality}</p>
          </div>
          <div class="footer">
              <p>This is an automated message. Please do not reply.</p>
          </div>
      </div>
  </body>
  </html>
  `;
};