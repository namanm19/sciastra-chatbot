document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.getElementById("chat-container");
  const chatBox = document.getElementById("chat-box");
  const messageInput = document.getElementById("message-input");
  const sendBtn = document.getElementById("send-btn");
  const closeBtn = document.getElementById("close-btn");

  const questions = [
    "What's SciAstra's mission?",
    "How can I contribute to research?",
    "Tell me about SciAstra's team.",
    "SciAstra's research focus?",
    "Apply for a position at SciAstra?",
    "Upcoming events by SciAstra?",
    "SciAstra's collaborations?",
    "Latest achievements at SciAstra?",
    "Ethical conduct in research?",
    "SciAstra's educational programs?",
    "Internship opportunities?",
    "SciAstra's sustainable research?",
    "Stay updated on SciAstra?",
    "Impact of SciAstra's research?",
    "Future goals of SciAstra?",
  ];

  const answers = [
    "The mission of SciAstra is to advance scientific knowledge and contribute to societal well-being through innovative research.",
    "To contribute to SciAstra's research projects, you can explore our open positions on the Careers page or reach out to us directly with your research proposal.",
    "SciAstra is powered by a diverse team of scientists, researchers, and professionals with expertise in various fields.",
    "SciAstra focuses on research in areas such as [list key focus areas], addressing challenges and creating positive impacts.",
    "You can find and apply for positions at SciAstra on our Careers page. Make sure to submit your application and CV as instructed.",
    "Check our Events page for information on upcoming conferences, workshops, and other events organized by SciAstra.",
    "SciAstra collaborates with various organizations to amplify research impact. Explore our Partnerships page for more details.",
    "Our latest achievements and breakthroughs are regularly updated on our News page. Stay tuned for exciting updates!",
    "SciAstra is committed to ethical research practices, ensuring transparency, integrity, and responsible conduct in all our projects.",
    "Explore our Educational Programs page to learn about academic courses, workshops, and training opportunities offered by SciAstra.",
    "We offer internship opportunities for students. Visit our Careers page for information on available intern positions.",
    "SciAstra is dedicated to sustainable and responsible research practices, minimizing environmental impact and promoting ethical standards.",
    "Stay updated on SciAstra's latest developments by following us on social media and subscribing to our newsletter.",
    "SciAstra's research aims to positively impact society by [describe specific impacts].",
    "Our future goals include [list specific goals and plans] to continue advancing scientific knowledge and societal well-being.",
  ];

  function displayMessage(message, sender, isAnswer = false) {
    const messageElement = document.createElement("div");
    messageElement.className =
      sender === "user"
        ? "user-message"
        : isAnswer
        ? "answer-box"
        : "bot-message";
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function handleUserInput() {
    const userMessage = messageInput.value;
    displayMessage(userMessage, "user");

    const botResponse = generateBotResponse(userMessage);
    displayMessage(botResponse, "bot", true);

    messageInput.value = "";
  }

  function generateBotResponse(userMessage) {
    const index = questions.findIndex((question) =>
      userMessage.toLowerCase().includes(question.toLowerCase())
    );
    return index !== -1
      ? answers[index]
      : "I'm sorry, I don't have a response for that question.";
  }

  function displayAnswer(index) {
    const answer = answers[index];
    displayMessage(answer, "bot", true);
  }

  function createClickableQuestions() {
    questions.forEach((question, index) => {
      const questionElement = document.createElement("div");
      questionElement.className = "clickable-question";
      questionElement.textContent = question;

      questionElement.addEventListener("click", () => displayAnswer(index));

      chatBox.appendChild(questionElement);
    });
  }

  function closeChat() {
    chatContainer.style.display = "none";
  }

  sendBtn.addEventListener("click", handleUserInput);
  messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });

  closeBtn.addEventListener("click", closeChat);

  displayMessage("Hello! How can I help you today?", "bot");

  createClickableQuestions();
});
