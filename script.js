// script.js

document.addEventListener("DOMContentLoaded", function () {
    const chatList = document.querySelector(".chat-list");
    const messageInput = document.getElementById("message-input");

    // Function to create a new chat and add it to the list
    function createNewChat() {
        const chat = document.createElement("div");
        chat.classList.add("chat");
        chat.textContent = "New Chat";
        chatList.appendChild(chat);
    }

    

    
    function createNewChat() {
        var folderName = prompt("Enter the folder name for the new chat:");
        if (folderName !== null && folderName.trim() !== '') {
            // Create a new chat folder with the provided folderName
            var chatList = document.querySelector('.chat-list');
            var chatFolder = document.createElement('div');
            chatFolder.className = 'chat';
            chatFolder.textContent = folderName;
            chatList.appendChild(chatFolder);
        }
    }
    

    // Function to display a user message in the chat
    function displayUserMessage(message) {
        const chatMessages = document.querySelector(".chat-messages");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
    }


    // Event listener for the New Chat button
    const newChatButton = document.querySelector(".new-chat-button");
    newChatButton.addEventListener("click", createNewChat);


     // Event listener for the Send button
     const sendButton = document.querySelector(".send-button");
     sendButton.addEventListener("click", function () {
         const message = messageInput.value;
         if (message.trim() !== "") {
             displayUserMessage(message);
             messageInput.value = "";
         }

         const hidePaneButton = document.getElementById('hide-pane-btn');
    const leftPane = document.querySelector('.left-pane');
    let leftPaneVisible = true; // Initially, left pane is visible

    hidePaneButton.addEventListener("click", function () {
        if (leftPaneVisible) {
            leftPane.style.display = 'none';
            leftPaneVisible = false;
        } else {
            leftPane.style.display = 'block';
            leftPaneVisible = true;
            
        }
        

        
     });
    });
});
