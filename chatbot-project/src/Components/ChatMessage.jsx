import  Robotimg  from '../assets/robot.png';
import  Userimg  from '../assets/robot.png';
import './ChatMessage.css'

export function ChatMessage ({message , sender}) {
//    const sender = props.sender
//     const message = props.msg;
   // const { message , sender}= props;
   
   /*
   if(sender === 'robot'){
       return(
       <div>
       {message}
        <img src="robot.png" width ="30"/>
       </div>
   )
   }
   */
   return(
       <div className = {
         sender === 'user'
         ? 'chat-message-user'
         : 'chat-message-robot'
       }>
       {sender === 'robot' && <img src={Robotimg} width ="50" className ="chat-msg-profile"/>} 
       <div className ='chat-message-text'>
         {message}
       </div>
       {sender === 'user' && <img src={Userimg} width ="50" className ="chat-msg-profile"/>} 
       </div>
   )
  }