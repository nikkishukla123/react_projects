
import {useState} from 'react'; 
import {ChatInput} from './Components/ChatInput'
import ChatMessages from './Components/ChatMessages'
import './App.css'





 

  


function App () {
  const [chatMessages, setChatMessages] = useState(
      [{
      message:'hello chatbot',
      sender:'user',
      id:'id1'
   },{
      message:'Hello! How can I help you?',
      sender:'robot',
      id:'id2'
   },{
      message:'date today',
      sender:'user',
      id:'id3'
   },{
      message:'today is february four',
      sender:'robot',
      id:'id4'
   },]
  )
  const [isLoading, setIsLoading] =useState(false);
  // const [chatMessages, setChatMessages] = array; // even more shorcut in upper is writeen
  // const chatMessages = array[0]; // current value
  // const setChatMessages = array[1]; // updater value
      return(
      <div className ="app-container">
      <ChatMessages
      chatMessages ={chatMessages}/>
      <ChatInput
      chatMessages ={chatMessages}
      setChatMessages = {setChatMessages}
      isLoading = {isLoading}
      setIsLoading = {setIsLoading}/> 
      </div>)
 }

export default App
