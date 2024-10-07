
// Question bank containing sample questions
const questionBank = {
    Maths: {
        beginner: [
            { question: "What is the value of 5 + 5", options: ["10", "20", "13"], answer: 0 },
            { question: "What is the value of tan45?", options: ["1", "1/2", "0"], answer: 1 },
            { question: "What is the value of tan45?", options: ["1", "1/2", "0"], answer: 1 },
            { question: "What is the value of tan45?", options: ["1", "1/2", "0"], answer: 1 },
            { question: "What is the value of tan45?", options: ["1", "1/2", "0"], answer: 1 },
            { question: "What is the value of tan45?", options: ["1", "1/2", "0"], answer: 1 },
            { question: "What is the value of tan45?", options: ["1", "1/2", "0"], answer: 1 },

        ],
        intermediate: [
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },

        ],
        advanced: [
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
            { question: "What the value of 3*4", options: ["12", "15", "75", "18"], answer: 1 },
        ]
    },
    Computer_Science: {
        beginner: [
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },

        ],
        intermediate: [
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },

        ],
        advanced: [
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },
            { question: "What is C++", options: ["Object Oriented language", "Machine Language", "Assembly Language"], answer: 1 },

        ]
    }
};


document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const topics = Array.from(document.getElementById('topics').selectedOptions).map(option => option.value);
    const difficulty = document.getElementById('difficulty').value;

    const numQuestions = parseInt(document.getElementById('num-questions').value);

    const selectedQuestions = [];
    topics.forEach(topic => {
        const questions = questionBank[topic][difficulty];
        selectedQuestions.push(...questions);
    });

    const quizQuestions = selectRandomQuestions(selectedQuestions, numQuestions);
    displayQuiz(quizQuestions);
});

function selectRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    let score = 0;

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        questionElement.innerHTML = `
            <h3>Question ${index + 1}:</h3>
            <p>${question.question}</p>`;

        question.options.forEach((option, i) => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';

            optionElement.name = `question${index}`;
            optionElement.value = i;
            optionElement.addEventListener('change', () => {
                if (parseInt(optionElement.value) === question.answer) {
                    score++;
                }
            });


            const label = document.createElement('label');
            label.textContent = option;

            questionElement.appendChild(optionElement);
            questionElement.appendChild(label);

            questionElement.appendChild(document.createElement('br'));
            
        });
        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');

    submitButton.textContent = 'Submit Quiz';

    submitButton.addEventListener('click', () => {

        let per =( score / questions.length )* 100;
        quizContainer.appendChild(document.createElement('br'));

        quizContainer.innerHTML += `<p>Your Score: ${score} out of ${questions.length}</p>`;

        quizContainer.appendChild(document.createElement('br'));
        if(per < 33){
            quizContainer.innerHTML += `<p>Fail!!!, Work Hard</p>`;
        }

        if(per < 50 && per >= 33){
            quizContainer.innerHTML += `<p>Pass but Poor Performance, Need Improvement</p>`;
        }
        if(per > 50 && per < 70){
            quizContainer.innerHTML += `<p>Good Performance</p>`;
        }
        if(per > 70 ){
            quizContainer.innerHTML += `<p>Excellent Performance</p>`;
        }
    });
    quizContainer.appendChild(submitButton);
}
