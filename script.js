// Load questions from the questions array
let currentQuestion = 0; // Starting at question 1 (index 0)
let userAnswers = {};
let timeRemaining = 9000; // 2:30:00 in seconds (150 minutes = 9000 seconds)
let timerInterval;
let examStarted = false;

// Initialize the exam
document.addEventListener('DOMContentLoaded', function() {
    if (typeof questions !== 'undefined' && questions.length > 0) {
        initializeExam();
        // Display initial time but don't start counting
        updateTimerDisplay();
    } else {
        console.error('Questions not loaded');
    }
});

function startExam() {
    if (!examStarted) {
        examStarted = true;
        startTimer();
        
        // Hide the Start Exam button
        const startBtn = document.getElementById('startExamBtn');
        if (startBtn) {
            startBtn.style.display = 'none';
        }
        
        // Enable all exam controls
        enableExamControls();
        
        // Update status bar to show exam is in progress
        updateStatusBar();
    }
}

function updateStatusBar() {
    const statusContent = document.querySelector('.status-content');
    
    if (statusContent) {
        if (examStarted) {
            statusContent.innerHTML = `
                <span class="status-icon">📝</span> Exam in Progress — Score: <span id="score">0</span> / <span id="total">120</span> (<span id="percentage">0%</span>) | Answered: <span id="answered">0</span> / <span id="totalQuestions">120</span>
            `;
        }
        // Update the stats after changing the HTML
        updateStats();
    }
}

function initializeExam() {
    // Generate question navigation grid
    generateQuestionGrid();
    
    // Display first question
    displayQuestion(currentQuestion);
    
    // Update stats
    updateStats();
    
    // Set total questions
    document.getElementById('totalQuestions2').textContent = questions.length;
    
    // Disable all interactive elements until exam starts
    disableExamControls();
}

function disableExamControls() {
    // Add disabled class to all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn, .mobile-nav-btn');
    navButtons.forEach(btn => {
        btn.classList.add('exam-not-started');
    });
    
    // Add disabled class to show answer button
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    if (showAnswerBtn) {
        showAnswerBtn.classList.add('exam-not-started');
    }
    
    // Add disabled class to all question grid buttons
    const questionBtns = document.querySelectorAll('.question-btn');
    questionBtns.forEach(btn => {
        btn.classList.add('exam-not-started');
    });
    
    // Add disabled class to all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('exam-not-started');
    });
}

function enableExamControls() {
    // Remove disabled class from all elements
    const disabledElements = document.querySelectorAll('.exam-not-started');
    disabledElements.forEach(element => {
        element.classList.remove('exam-not-started');
    });
}

function generateQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    const mobileGrid = document.getElementById('questionGridMobile');
    
    // Clear both grids
    if (grid) grid.innerHTML = '';
    if (mobileGrid) mobileGrid.innerHTML = '';
    
    for (let i = 0; i < questions.length; i++) {
        // Create button for desktop grid
        if (grid) {
            const btn = document.createElement('button');
            btn.className = 'question-btn';
            btn.textContent = i + 1;
            btn.onclick = () => goToQuestion(i);
            
            // Set button state
            if (i === currentQuestion) {
                btn.classList.add('current');
            } else if (userAnswers[i] !== undefined) {
                btn.classList.add('answered');
            } else {
                btn.classList.add('unanswered');
            }
            
            grid.appendChild(btn);
        }
        
        // Create button for mobile grid
        if (mobileGrid) {
            const mobileBtn = document.createElement('button');
            mobileBtn.className = 'question-btn';
            mobileBtn.textContent = i + 1;
            mobileBtn.onclick = () => goToQuestion(i);
            
            // Set button state
            if (i === currentQuestion) {
                mobileBtn.classList.add('current');
            } else if (userAnswers[i] !== undefined) {
                mobileBtn.classList.add('answered');
            } else {
                mobileBtn.classList.add('unanswered');
            }
            
            mobileGrid.appendChild(mobileBtn);
        }
    }
}

function displayQuestion(index) {
    const question = questions[index];
    
    // Update question number and text
    document.getElementById('questionNumber').textContent = index + 1;
    document.getElementById('currentQuestionNum').textContent = index + 1;
    document.getElementById('questionText').textContent = question.text;
    
    // Update course name
    document.getElementById('courseName').textContent = question.course;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // Check if this option is selected
        if (userAnswers[index] === i) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.onclick = () => selectOption(index, i);
        
        optionDiv.innerHTML = `
            <div class="option-radio"></div>
            <span class="option-label">${String.fromCharCode(97 + i)}.</span>
            <span class="option-text">${option}</span>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Hide answer explanation by default
    document.getElementById('answerExplanation').style.display = 'none';
    document.getElementById('showAnswerBtn').textContent = 'Show Answer & Explanation';
    
    currentQuestion = index;
    generateQuestionGrid();
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const clearBtn = document.getElementById('clearBtn');
    
    // Mobile buttons
    const mobilePrevBtn = document.getElementById('mobileePrevBtn');
    const mobileNextBtn = document.getElementById('mobileNextBtn');
    const mobileClearBtn = document.getElementById('mobileClearBtn');
    
    // Update Previous buttons
    const isPrevDisabled = currentQuestion === 0;
    if (prevBtn) prevBtn.disabled = isPrevDisabled;
    if (mobilePrevBtn) mobilePrevBtn.disabled = isPrevDisabled;
    
    // Update Next buttons
    const isNextDisabled = currentQuestion === questions.length - 1;
    if (nextBtn) nextBtn.disabled = isNextDisabled;
    if (mobileNextBtn) mobileNextBtn.disabled = isNextDisabled;
    
    // Update Clear buttons
    const isClearDisabled = userAnswers[currentQuestion] === undefined;
    if (clearBtn) clearBtn.disabled = isClearDisabled;
    if (mobileClearBtn) mobileClearBtn.disabled = isClearDisabled;
}

function selectOption(questionIndex, optionIndex) {
    // Only allow selection if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    userAnswers[questionIndex] = optionIndex;
    displayQuestion(questionIndex);
    updateStats();
}

function clearAnswer() {
    // Only allow clearing if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    if (userAnswers[currentQuestion] !== undefined) {
        delete userAnswers[currentQuestion];
        displayQuestion(currentQuestion);
        updateStats();
    }
}

// Show/Hide Answer and Explanation
function toggleAnswer() {
    // Only allow showing answer if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    const answerDiv = document.getElementById('answerExplanation');
    const showBtn = document.getElementById('showAnswerBtn');
    const question = questions[currentQuestion];
    
    if (answerDiv.style.display === 'none') {
        // Show answer
        const correctOption = String.fromCharCode(97 + question.answer);
        const correctText = question.options[question.answer];
        
        // Create explanation (you can add more detailed explanations to questions data)
        const explanation = question.explanation || "This is the correct answer based on the course material.";
        
        answerDiv.innerHTML = `
            <div class="correct-answer">
                <strong>Correct Answer: ${correctOption}. ${correctText}</strong>
            </div>
            <div class="explanation-text">
                <strong>Explanation:</strong> ${explanation}
            </div>
        `;
        
        answerDiv.style.display = 'block';
        showBtn.textContent = 'Hide Answer';
    } else {
        // Hide answer
        answerDiv.style.display = 'none';
        showBtn.textContent = 'Show Answer & Explanation';
    }
}

// Submit Exam Functions
function submitExam() {
    // Only allow submission if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    const answeredCount = Object.keys(userAnswers).length;
    const unansweredCount = questions.length - answeredCount;
    
    document.getElementById('answeredCount').textContent = answeredCount;
    
    if (unansweredCount > 0) {
        document.getElementById('unansweredWarning').textContent = 
            `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`;
    } else {
        document.getElementById('unansweredWarning').textContent = '';
    }
    
    document.getElementById('submitModal').style.display = 'block';
}

function closeSubmitModal() {
    document.getElementById('submitModal').style.display = 'none';
}

function confirmSubmit() {
    // Calculate final score
    let correctAnswers = 0;
    const totalQuestions = questions.length;
    const answeredCount = Object.keys(userAnswers).length;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update results modal
    document.getElementById('finalScore').textContent = correctAnswers;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('percentageScore').textContent = percentage + '%';
    document.getElementById('totalAnswered').textContent = answeredCount;
    document.getElementById('totalUnanswered').textContent = totalQuestions - answeredCount;
    
    // Close submit modal and show results
    closeSubmitModal();
    document.getElementById('resultsModal').style.display = 'block';
    
    // Update the status bar
    document.getElementById('score').textContent = correctAnswers;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('answered').textContent = answeredCount;
}

function closeResultsModal() {
    document.getElementById('resultsModal').style.display = 'none';
}

function goToQuestion(index) {
    // Only allow navigation if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    displayQuestion(index);
}

function updateStats() {
    const answered = Object.keys(userAnswers).length;
    const answeredElement = document.getElementById('answered');
    const totalQuestionsElement = document.getElementById('totalQuestions');
    
    if (answeredElement) answeredElement.textContent = answered;
    if (totalQuestionsElement) totalQuestionsElement.textContent = questions.length;
    
    // Calculate score (for demo - would only show after submission)
    let score = 0;
    Object.keys(userAnswers).forEach(qIndex => {
        if (userAnswers[qIndex] === questions[qIndex].answer) {
            score++;
        }
    });
    
    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');
    const percentageElement = document.getElementById('percentage');
    
    if (scoreElement) scoreElement.textContent = score;
    if (totalElement) totalElement.textContent = questions.length;
    if (percentageElement) percentageElement.textContent = ((score / questions.length) * 100).toFixed(1) + '%';
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            // Auto-submit exam
            alert('Time is up! Exam will be submitted.');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    
    const timeString = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timeDisplay').textContent = timeString;
}

// Navigation functions
function previousQuestion() {
    // Only allow navigation if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    if (currentQuestion > 0) {
        displayQuestion(currentQuestion - 1);
    }
}

function nextQuestion() {
    // Only allow navigation if exam has started
    if (!examStarted) {
        alert('Please click "Start Exam" button to begin the exam.');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        displayQuestion(currentQuestion + 1);
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        previousQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        if (optionIndex < questions[currentQuestion].options.length) {
            selectOption(currentQuestion, optionIndex);
        }
    }
});
