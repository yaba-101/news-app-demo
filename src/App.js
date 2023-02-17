import React from "react";
import Header from "./components/Header";
import './App.css'
import Post from "./components/Post";
import photo from './photo.png'
import bitcoin from './bitcoin.png'
import vpn from './vpn.png'
import elon from './elon.png'
import gpt from './gpt.png'
import sponge from './sponge.jpg'

function App() {
  return (
    <main>
      <div className="">
        <Header />
        <div className="border-b border-gray-500"></div>
        <h2 className="text-gray-400 font-bold p-2 text-[25px]">YESTERDAY</h2>
      </div>
      <div className="body__post">
          
          <Post img={sponge}
            title="Sponge Bob"
            description="A yellow sea sponge named SpongeBob SquarePa"
          />
          <Post img={photo}
            title="Scheme"
            description="Stay focused and beat procrastination on your 
            stay focused and beat "
          />
          <Post img={gpt}
            title="Chat GPT"
            description="ChatGPT is a chatbot developed by OpenAI and
             launched in November 2022. It is built ."
          />
          <Post img={vpn}
            title="Nord VPN"
            description="NordVPN is a VPN service provided by company ..."
          />
          <Post img={elon}
            title="Elon Musk"
            description="Stay focused and beat procrastination on your Ma"
          />
          <Post img={bitcoin}
            title="Crypto News"
            description="Bitcoin is a protocol which implements a highly "
          />
          <Post img={sponge}
            title="Sponge Bob"
            description="A yellow sea sponge named SpongeBob SquarePa"
          />
          <Post img={photo}
            title="Effort"
            description="Stay focused and beat procrastination on your M"
          />
          
      </div>
    </main>
  );
}

export default App;
