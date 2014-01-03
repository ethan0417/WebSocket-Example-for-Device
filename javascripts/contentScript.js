// Set element to HTML
var node = document.createElement("div");
    node.style.position = "absolute";
    node.style.width = "20px";
    node.style.height = "20px";
    node.style.backgroundColor = "red";
document.body.appendChild(node);
// Get X and Y message from websocket.js
chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
  var win_width = window.innerWidth,
      win_height = window.innerHeight,
      new_width,
      new_height;
  new_width = win_width * message.x;
  new_height = win_height * message.y;
  node.style.top = new_height + "px";
  node.style.left = new_width + "px";
});
