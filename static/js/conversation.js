
// Scroll to the bottom of the chat container on page load
window.onload = function () {
    scrollToBottom();
};

function scrollToBottom() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}