import React from 'react';
import Profile from './components/profile/Profile';
import Home from './components/home/home.js';
import Login from './components/login/login.js';
// import ReactDom from "react-dom";
import CreateAccount from './components/signup/signup.js';
import Chat from './components/chatlist/chatlist.js';
import Chatname from './components/chat/chat.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>

      <Router>
        <Routes>  
          <Route path="/" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my_pro" element={<Profile />} />
          <Route path="/my_login" element={<index />} />
          <Route path="my_chat" element={<Chat />} />
          <Route path="my_chatname" element={<Chatname />} />

          {/* <Route path="/" element={ <Post/> } /> */}
          {/* <Route path="/my_pro" element={ <Profile/> } /> */}

        </Routes>
      </Router>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <>

//         {/* <Profile /> */}
//         {/* <Post /> */}
//       </>
//     </div>
//   );
// }

export default App;