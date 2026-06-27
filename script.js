function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // User message
    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);

    input.value = "";

    // Automatic bot reply
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "message bot";

        if (message.toLowerCase().includes("hello")) {
            botMessage.innerText = "Hello! 👋 Welcome to our support chat.";
        } else if (message.toLowerCase().includes("price")) {
            botMessage.innerText = "💰 Please visit our pricing page or contact our sales team.";
        } else if (message.toLowerCase().includes("help")) {
            botMessage.innerText = "😊 I'm here to help! Please tell me your issue.";
        } else {
            botMessage.innerText = "✅ Thank you for your message. Our support team will contact you soon.";
        }

        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}