document.addEventListener('DOMContentLoaded', () => {
    const examSelector = document.getElementById('exam-selector');
    const quizContainer = document.getElementById('quiz-container');

    // Initialize exam selector
    function init() {
        if (typeof exams === 'undefined') {
            console.error('Exam data not loaded.');
            return;
        }

        exams.forEach(exam => {
            const option = document.createElement('option');
            option.value = exam.id;
            option.textContent = exam.title;
            examSelector.appendChild(option);
        });

        examSelector.addEventListener('change', handleExamSelect);
    }

    // Handle exam selection
    function handleExamSelect(e) {
        const selectedExamId = e.target.value;
        const exam = exams.find(ex => ex.id === selectedExamId);
        
        if (exam) {
            renderExam(exam);
        }
    }

    // Render the selected exam
    function renderExam(exam) {
        quizContainer.innerHTML = '';
        quizContainer.classList.remove('hidden');

        exam.questions.forEach((question, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.id = `question-${question.id}`;

            const qTypeLabel = question.type === 'single' ? 'Single Choice' : 'Multiple Choice';

            questionCard.innerHTML = `
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="question-type">${qTypeLabel}</span>
                </div>
                <h3 class="question-text">${question.text}</h3>
                <div class="options-container" id="options-${question.id}">
                    ${question.options.map(opt => `
                        <label class="option-label" id="label-${question.id}-${opt.id}">
                            <input type="${question.type === 'single' ? 'radio' : 'checkbox'}" 
                                   name="q-${question.id}" 
                                   value="${opt.id}">
                            <span class="option-text">${opt.text}</span>
                        </label>
                    `).join('')}
                </div>
                <button class="evaluate-btn" id="btn-${question.id}">Evaluate</button>
                <div class="feedback-container" id="feedback-${question.id}"></div>
            `;

            quizContainer.appendChild(questionCard);

            // Add event listener to evaluate button
            const evalBtn = questionCard.querySelector(`#btn-${question.id}`);
            evalBtn.addEventListener('click', () => evaluateQuestion(question));
        });
    }

    // Evaluate a single question
    function evaluateQuestion(question) {
        const optionsContainer = document.getElementById(`options-${question.id}`);
        const inputs = optionsContainer.querySelectorAll('input');
        const feedbackContainer = document.getElementById(`feedback-${question.id}`);
        const evalBtn = document.getElementById(`btn-${question.id}`);

        let selectedValues = [];
        inputs.forEach(input => {
            if (input.checked) {
                selectedValues.push(input.value);
            }
        });

        if (selectedValues.length === 0) {
            alert('Please select at least one option before evaluating.');
            return;
        }

        // Disable inputs and button
        inputs.forEach(input => {
            input.disabled = true;
            input.parentElement.classList.add('disabled');
        });
        evalBtn.disabled = true;

        // Check correctness
        const isCorrect = checkAnswer(selectedValues, question.correctAnswers);

        // Apply styles to options
        question.options.forEach(opt => {
            const label = document.getElementById(`label-${question.id}-${opt.id}`);
            const isSelected = selectedValues.includes(opt.id);
            const isActuallyCorrect = question.correctAnswers.includes(opt.id);

            if (isSelected) {
                if (isActuallyCorrect) {
                    label.classList.add('correct');
                } else {
                    label.classList.add('incorrect');
                }
            } else if (isActuallyCorrect && !isCorrect) {
                // Highlight missed correct answers if they got it wrong
                label.classList.add('correct');
                label.style.opacity = '1';
                label.style.borderStyle = 'dashed';
            }
        });

        // Render Feedback
        let feedbackHTML = '';
        if (isCorrect) {
            feedbackHTML = `
                <div class="feedback-callout feedback-success">
                    <div class="feedback-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Correct!
                    </div>
                    ${question.explanation ? `<div class="feedback-explanation">${question.explanation}</div>` : ''}
                </div>
            `;
        } else {
            const correctText = question.options
                .filter(opt => question.correctAnswers.includes(opt.id))
                .map(opt => `• ${opt.text}`)
                .join('<br>');

            feedbackHTML = `
                <div class="feedback-callout feedback-error">
                    <div class="feedback-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        Incorrect
                    </div>
                    <div class="correct-reveal">
                        Correct Answer(s):<br>
                        ${correctText}
                    </div>
                    ${question.explanation ? `<div class="feedback-explanation"><strong>Explanation:</strong> ${question.explanation}</div>` : ''}
                </div>
            `;
        }

        feedbackContainer.innerHTML = feedbackHTML;
    }

    // Helper to compare arrays
    function checkAnswer(selected, correct) {
        if (selected.length !== correct.length) return false;
        const sortedSelected = [...selected].sort();
        const sortedCorrect = [...correct].sort();
        return sortedSelected.every((val, index) => val === sortedCorrect[index]);
    }

    init();
});
