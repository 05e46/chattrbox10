import socket from'./ws-client';
import {ChatForm} from './dom';

const Form_selector= '[data-chat="chat-form"]';
const Input_selector = '[data-chat="message-input"]';

class ChatApp{
  constructor(){
    this.chatForm = new ChatForm(Form_selector,Input_selector);
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(()=>{
      this.chatForm.init(data)=>{
        let message = new ChatMessage(data);
        socket.sendMessage(message.serialize());
      });
    });
    socket.registerMessageHandler((data)=>{
      console.log(data);
    });
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
