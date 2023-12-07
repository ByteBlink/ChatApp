// Dummy data for computer-generated messages
const computerMessages = [
    "Hi! What can I do for you right now?",
    "This chat app is pretty straightforward.",
    "Ask me anything you want.",
    "I hope you like using this!",
    
];

// Function to generate a random computer message
function generateComputerMessage() {
    return computerMessages[Math.floor(Math.random() * computerMessages.length)];
}

// Function to post a message (user or computer) to the chat.I wrote it with help of AI(chatgtb)
function postMessage(message, messageType) {
    const timestamp = new Date().toLocaleString();
    const messageHTML = `<div class="message ${messageType}">${message}<br><small>${timestamp}</small></div>`;
    $('#chatContainer').append(messageHTML);
    $('#userMessage').val('');
    scrollChatToBottom();
}

// Function to scroll the chat container to the bottom 
//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
function scrollChatToBottom() {
    // Get the chat container element
    const chatContainer = document.getElementById('chatContainer');

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function handleKeyPress(event) {
    // i check if enter is pressed
    if (event.key === "Enter") {
        // get user's message from input 
        const userMessage = document.getElementById('userMessage').value;

        // check that user message is not empty
        if (userMessage !== '') {
            // show user message in the chat
            postMessage(userMessage, 'user-message');

            //   computer response 
            setTimeout(function() {
                // Generate a random computer message
                const computerMessage = generateComputerMessage();

                // show computer message in the chat
                postMessage(computerMessage, 'computer-message');
            }, 1000);
            console.log('userMessage:', userMessage);
        }
    }
}

