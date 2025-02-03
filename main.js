document.addEventListener("DOMContentLoaded", function(){
    const timerDiplay = document.getElementById("time");
    const testForm = document.getElementById("testForm");
    let timeLeft = 600;

    function startTimer (){
        const timerInterval = setInterval(() =>{
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDiplay.textContent = `${minutes}: ${seconds < 10 ? "0" : ""} ${seconds}`;

            if (timeLeft <= 0){
                clearInterval(timerInterval);
                alert("Time's up!");
                testForm.submit();
            } else{
                timeLeft--;
            }
    }, 1000);
    }
    startTimer();

    testForm.addEventListener("submit", function (event){
        event.preventDefault();

        correctAnswers = {
            q1: "b",
            q2: "b",
            q3: "c",
            q4: "b",
            q5: "a",
            q6: "b",
            q7: "a",
            q8: "c",
            q9: "c",
            q10: "d",
        };

        let score = 0;
        for (const question in correctAnswers){
            const selectedAnswer = testForm.querySelector(`input[name="${question}"]:checked`);

            if (selectedAnswer && selectedAnswer.value === correctAnswers[question]){
                score++;
            }
        }
        alert(`Test submitted!\nStudent Name: ${testForm.studentName.value}\nYour score: ${score} out of ${Object.keys(correctAnswers).length}`);
        testForm.requestFullscreen();
    });
});