const quizData = [
    {
        question: "What diseases are linked to contaminated water and poor sanitation?",
        choices: ["Diabetes and Hypertension", "Cholera and Dysentery", "Asthma and Bronchitis", "Obesity and Anemia"],
        correct: 1
    },
    {
        question: "What is one of the most critical tasks to address water scarcity?",
        choices: ["Building more dams", "Educating people about water conservation", "Increasing water imports", "Relying on bottled water"],
        correct: 1
    },
    {
        question: "Which country is leading in recycling wastewater for reuse?",
        choices: ["USA", "India", "Singapore", "Brazil"],
        correct: 2
    },
    {
        question: "How much time do women and girls spend daily carrying water?",
        choices: ["50 million hours", "100 million hours", "200 million hours", "500 million hours"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a way to help with the water crisis?",
        choices: ["Donating to water projects", "Spreading awareness", "Wasting water in daily activities", "Volunteering for clean water initiatives"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultsContainer = document.getElementById("results");

function loadQuestion() {
    quizContainer.innerHTML = `
        <h2>${quizData[currentQuestion].question}</h2>
        <ul>
            ${quizData[currentQuestion].choices.map((choice, index) => 
                `<li onclick="selectAnswer(${index})">${choice}</li>`
            ).join("")}
        </ul>
    `;
}

function selectAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    const choices = document.querySelectorAll("li");
    
    choices.forEach((choice, index) => {
        choice.style.pointerEvents = "none"; // Disable further clicks
        if (index === correctIndex) {
            choice.classList.add("correct");
        } else if (index === selectedIndex) {
            choice.classList.add("wrong");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

submitBtn.addEventListener("click", () => {
    resultsContainer.innerHTML = `<h3>Your Score: ${score} / ${quizData.length}</h3>`;
});

loadQuestion();
