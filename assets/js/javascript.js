
document.getElementById("start-quiz").addEventListener("click", function () {
    const quizContainer = document.getElementById("quiz-container");

    // Remove the hidden class to make quiz container visible
    quizContainer.classList.remove("hidden");

    // Styles for quiz container
    quizContainer.style.width = "90vw"; 
    quizContainer.style.height = "90vh"; 
    quizContainer.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Dark semi-transparent background
    quizContainer.style.color = "white";
    quizContainer.style.position = "fixed";
    quizContainer.style.top = "50%";
    quizContainer.style.left = "50%";
    quizContainer.style.transform = "translate(-50%, -50%)"; // To Centre the container
    quizContainer.style.display = "flex";
    quizContainer.style.justifyContent = "center";
    quizContainer.style.alignItems = "center";
    quizContainer.style.borderRadius = "10px";
    quizContainer.style.padding = "20px";
});

// Close quiz container


