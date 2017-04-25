import socket from'./ws-client.js';
class ChatApp{
  constructor(){
    socket.init('ws://localhost:3001');
  }
}

class ChatMessage(){
  constructor(){
    message: m,
    user: u='batman',
    timestamp: t=(new Date()).getTime()
  }){
    this.message = m;
    this.user = u;
    this.timeStamp = t;
  }
  serialize(){
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timeStamp
    };
  }
}

export default ChatApp;
