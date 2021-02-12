import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () => {

    return (
        <ChatEngine
            height="100vh"
            projectID="fd3609b6-5680-4e0c-9597-30fd17364dbf"
            userName="admin"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
            />
        );
}

export default App;