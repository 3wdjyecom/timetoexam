// quiz.js
const questions = [
    {
        question: "2.第一自然段讲述菲尔普斯的故事有什么作用",
        keywords: ["概括","吸引读者,激发读者阅读兴趣","引出本文中心论点","作为事实论据证明中心论点"]
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
    