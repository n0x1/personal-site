import React from 'react';
import Bento from '../bento.jsx';
import Navbar from '../navbar.jsx';
import Overlay from '../Overlay.jsx';

function Home() {
  return (
    <>  
        <div className='overlay'>
            <Overlay />
         </div>
        
        <div>
            <Navbar />
        </div>
        <div className='grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 mx-2 md:mx-4 lg:mx-6 xl:mx-16 mt-20 gap-4'>
         <Bento key="welcome" cols="col-span-2" rows="row-span-1" textHeader="Welcome" headerColor="bg-[url('../public/window.jpeg')]" bodyColor="stdGray" bodyText="Hi!!" />
        <Bento key="games" cols="col-span-2" rows="row-span-2" textHeader="Games" headerColor="bg-[url('../public/cafe.jpg')]" bodyColor="stdGray" bodyText="I like lots of fighting games, RPGs, and FPS" />
        <Bento key="linguistics" cols="col-span-2" rows="row-span-1" textHeader="Linguistics" headerColor="bg-[url('../public/greenhouse.jpeg')]" bodyColor="stdGray" bodyText="Conlangs & studying Japanese" />
        <Bento key="music" cols="col-span-2" rows="row-span-1" textHeader="Music" headerColor="bg-[url('../public/mimosa.jpg')]" bodyColor="stdGray" bodyText="I play piano, guitar, and want to compose contemporary / produce indie rock" />
        <Bento key="about" cols="col-span-2" rows="row-span-2" textHeader="About Me" headerColor="bg-[url('../public/city.jpeg')]" bodyColor="stdGray" bodyText="16 year old high school student" />
        <Bento key="art" cols="col-span-2" rows="row-span-1" textHeader="Art" headerColor="bg-[url('../public/koi.jpeg')]" bodyColor="stdGray" bodyText={["I like ", <a href="/art">painting</a>]} />
        <Bento key="art" cols="col-span-2" rows="row-span-1" textHeader="Writing" headerColor="bg-[url('../public/pond.jpeg')]" bodyColor="stdGray" bodyText={[<a href="">The Phillipian</a>]} />
        <Bento key="dev" cols="col-span-2" rows="row-span-2" textHeader="Skills" headerColor="bg-[url('../public/yellowstone.jpg')]" bodyColor="stdGray" bodyText="I am experienced in both game and web design and development, in JavaScript/React, Lua, and C." />
        </div>
        </>
  );
}

export default Home;

// make them not colors, but background images for each header