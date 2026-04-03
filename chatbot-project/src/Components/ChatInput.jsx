import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

 export function ChatInput ({chatMessages, setChatMessages,isLoading, setIsLoading}) {
   const [inputText, setInputText] = useState ('')

   function saveInputText (event) {
       setInputText(event.target.value) // get the in value of placeholder
   }
   function handlekeyDown (event) { // if enter key is pressen then call the sendmsg function
        if (event.key === 'Enter'){
         sendmessage ()
        } else if (event.key === 'Escape'){ //clear msg in keyboard
         setInputText("")
        }
   }
  async function sendmessage () {
   if (isLoading || inputText.trim() === "") return;
   setIsLoading(true);
     const  newChatMessages = ([  // set new value
        ...chatMessages, // spreader creating duplicate and the updating
        {
           message:inputText, // show value that we written in textbox
           sender:'user',
           id: crypto.randomUUID()
        },
        {
         message: 'Loading...',
         sender: 'robot',
         id: crypto.randomUUID()
      }
      ])
      setChatMessages(newChatMessages);   // yha par pass kardena hai
      setInputText('') ; // to set the placeholder empty
      
      
      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages ([  // set new value
        ...newChatMessages.slice(0, -1), // last "Loading..." remove
        { message:response, // chatbot defined response
           sender:'robot',
           id: crypto.randomUUID()
        }
      ])
      setIsLoading(false);
   } // as we cannot use flex with fragment
   return(
       <div className = "chat-input-container"> 
        <input 
           className = "chat-input"
           disabled={isLoading}
            placeholder = "send a message to chat bot" 
            size = "30"
            onChange = {saveInputText}
            value = {inputText}
            onKeyDown = {handlekeyDown}/>  
        <button className ="send-button" disabled={isLoading} onClick = {sendmessage}>send</button>
       </div>
   )
  }