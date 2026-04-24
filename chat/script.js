// script.js
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
   if (e.key === 'Enter') sendMessage();
});
function sendMessage() {
   const chatInput = document.getElementById('chat-input');
   const message = chatInput.value.trim();
   if (message !== "") {
       const chatBox = document.getElementById('chat-box');
       const messageElement = document.createElement('div');
       messageElement.classList.add('message', 'user-message');
       messageElement.textContent = message;
       chatBox.appendChild(messageElement);
       chatBox.scrollTop = chatBox.scrollHeight;
       chatInput.value = '';
   }
}
