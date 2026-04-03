import { useRef,useEffect } from 'react'; 
import {ChatMessage} from './ChatMessage'
import './ChatMessages.css'

 function ChatMessages ({chatMessages}) { // so passing the array
   const chatMessagesRef = useRef(null); // container ka refernce le liya
    // Hook add scroll feature
   useEffect(()=> { // useefeect run code after updation
     const containerElem =chatMessagesRef.current
     if(containerElem) {
       containerElem.scrollTop = containerElem.scrollHeight;
     }
   },[chatMessages]);
    return(
       <div className="chat-message-container" ref ={chatMessagesRef}>
           {chatMessages.map((chatMessage) => { // here chatMessages array acess is needed
               return(
                   <ChatMessage
                   message = {chatMessage.message}
                   sender ={chatMessage.sender}
                   key ={chatMessage.id} />
               );
           })
       
   }  </div>
) }

export default ChatMessages;