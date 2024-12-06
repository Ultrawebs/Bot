document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.querySelector('.chat-messages');
    const modelToggle = document.querySelector('.model-toggle');
    const modelDropdown = document.querySelector('.model-dropdown');
    
    let selectedModel = "Model 1";  // Default model selection

    // Function to simulate AI response
    function getAIResponse(userMessage) {
        // Simulate AI responses based on the model selected
        const responses = {
            "Model 1": "AI Model 1 Response to: " + userMessage,
            "Model 2": "AI Model 2 Response to: " + userMessage,
            "Model 3": "AI Model 3 Response to: " + userMessage,
        };

        return responses[selectedModel];
    }

    // Send message functionality
    sendButton.addEventListener('click', function() {
        const userMessage = messageInput.value.trim();
        if (userMessage !== "") {
            // Append user message
            const userMessageContainer = document.createElement('div');
            userMessageContainer.classList.add('user-message');
            userMessageContainer.textContent = userMessage;
            chatMessages.appendChild(userMessageContainer);

            // Get AI response and append
            const aiResponse = getAIResponse(userMessage);
            const aiMessageContainer = document.createElement('div');
            aiMessageContainer.classList.add('ai-message');
            aiMessageContainer.textContent = aiResponse;
            chatMessages.appendChild(aiMessageContainer);

            // Clear the input field
            messageInput.value = '';

            // Scroll to the bottom of the chat
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    // Model dropdown toggle functionality
    modelToggle.addEventListener('click', function() {
        modelDropdown.classList.toggle('show');
    });

    // Close dropdown if the user clicks outside
    document.addEventListener('click', function(event) {
        if (!modelToggle.contains(event.target)) {
            modelDropdown.classList.remove('show');
        }
    });

    // Change the model when selecting from dropdown
    modelDropdown.addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV') {
            selectedModel = event.target.textContent;
            modelToggle.textContent = selectedModel; // Update model name on the button
            modelDropdown.classList.remove('show'); // Hide dropdown after selection
        }
    });
});
