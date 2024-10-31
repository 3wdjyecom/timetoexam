// quiz.js
const questions = [
    {
        question: "4.第二三四段使用了哪种论证方法，作用是什么?",
        keywords: ["举例论证，具体地论证了","从而有力地证明了中心论点"]
    },
        // 添加更多问题...
    ];
    
    let currentQuestionIndex = 0;
    
    function displayQuestion() {
        const questionElement = document.getElementById('question');
        questionElement.textContent = questions[currentQuestionIndex].question;
    }
    
    function submitAnswer() {
        const answer = document.getElementById('answer').value.toLowerCase();
        const keywords = questions[currentQuestionIndex].keywords;
        let score = 0;
    
        keywords.forEach(keyword => {
            if (answer.includes(keyword)) {
                score += 1;
            }
        });
    
        if (score === keywords.length) {
            score = 3;
        }
    
        alert(`你的得分是：${score}`);
        document.getElementById('result').textContent = `你的得分是：${score}`;
        document.getElementById('keywords').textContent = `关键词：${keywords.join(', ')}`;
    
        document.getElementById('result-container').style.display = 'block';
        document.getElementById('question-container').style.display = 'none';
    }
    
    window.onload = function() {
        displayQuestion();
    };
    