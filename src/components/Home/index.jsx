import React from 'react';
import Bento from '../bento.jsx';
import Navbar from '../navbar.jsx';
import Overlay from '../Overlay.jsx';

export default function Home() {
  return (
    <>  
        <div className='overlay'>
            <Overlay />
         </div>
        
        <div>
            <Navbar />
        </div>
        <div className='grid lg:grid-cols-8 grid-cols-4 mx-2 md:mx-4 lg:mx-6 xl:mx-16 mt-20 gap-4'>
        <Bento key="welcome" cols="col-span-2" rows="row-span-1" textHeader="welcome!" headerColor="bg-[url('../public/window.jpeg')]" bodyColor="stdGray" bodyText="this is a personal site with various info and links of some stuff i like" />
        <Bento key="about" cols="col-span-2" rows="row-span-1" textHeader="about me" headerColor="bg-[url('../public/city.jpeg')]" bodyColor="stdGray" bodyText={["16 year old high school student", <br></br>, "Massachusetts native", <br></br>, "INTP 5w4 sx/sp"]} />
        <Bento key="linguistics" cols="col-span-4" rows="row-span-1" textHeader="linguistics" headerColor="bg-[url('../public/greenhouse.jpeg')]" bodyColor="stdGray" bodyText="My native language is English. I'm currently studying Japanese, and have also studied Spanish and Latin. I also love making constructed languages" />
        <Bento key="music" cols="col-span-4" rows="row-span-1" textHeader="music" headerColor="bg-[url('../public/mimosa.jpg')]" bodyColor="stdGray" bodyText="I play piano, guitar, and want to compose contemporary / produce indie rock. When I made actual finished songs I'll link them here" />
        <Bento key="dev" cols="col-span-2" rows="row-span-2" textHeader="dev" headerColor="bg-[url('../public/academ.jpeg')]" bodyColor="stdGray" bodyText={["I am experienced in both game and web design and development, in JavaScript/React, Lua, and C.", <br></br>,<br></br>, "Currently: python/cs50 in hopes of understanding machine learning, github @n0x1" ]}/>
        <Bento key="art" cols="col-span-2" rows="row-span-1" textHeader="art" headerColor="bg-[url('../public/koi.jpeg')]" bodyColor="stdGray" bodyText={["I like ", <a href="/art">painting</a>]} />
        <Bento key="writing" cols="col-span-2" rows="row-span-1" textHeader="writing" headerColor="bg-[url('../public/pond.jpeg')]" bodyColor="stdGray" bodyText={[<a href="https://phillipian.net/author/cameronmanzo/">The Phillipian </a>, <br></br>, "also like poetry (pariah link perchance)"]} />
        <Bento key="sports" cols="col-span-2" rows="row-span-1" textHeader="sports" headerColor="bg-[url('../public/yellowstone.jpg')]" bodyColor="stdGray" bodyText="avid alpine skiier and ok at golf and running" />
        <Bento key="billboard" cols="col-span-2" rows="row-span-1" textHeader="Todo" headerColor="bg-[url('../public/leaves.webp')]" bodyColor="stdGray" bodyText="get learner's permit, arcade pcb and this site" />
        <Bento key="games" cols="col-span-2" rows="row-span-1" textHeader="gamer" headerColor="bg-[url('../public/cafe.jpg')]" bodyColor="stdGray" bodyText="I like lots of fighting games, RPGs, and FPS. I recommend Persona 4 & 5, Omori, Hollow Knight, Stardew Valley" />
        <Bento key="thanks" cols="col-span-1" rows="row-span-1" textHeader="thanks" headerColor="bg-[url('../public/gjelly.jpg')]" bodyColor="stdGray" bodyText='for visiting !!'/>
        <Bento key="fash" cols="col-span-2" rows="row-span-1" textHeader="fashion" headerColor="bg-[url('../public/kinkakuji.jpeg')]" bodyColor="stdGray" bodyText={[<a href="/fashion">maybe ill make larger blog</a>]}/>

        </div>
        </>
  );
}



// make them not colors, but background images for each header