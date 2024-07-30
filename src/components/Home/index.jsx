import React from 'react';
import Bento from '../bento.jsx';

function Home() {
  return (

        <div className='grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 mx-2 md:mx-4 lg:mx-6 xl:mx-8 mt-4 gap-4'>
         <Bento key="welcome" cols="col-span-2" rows="row-span-2" textHeader="Welcome" headerColor="bg-blue-500" bodyColor="stdGray" bodyText="Hi!!" />
            <Bento key="games" cols="col-span-2" rows="row-span-2" textHeader="Games" headerColor="bg-red-500" bodyColor="stdGray" bodyText="I like lots of fighting games, RPGs, and FPS" />
        <Bento key="linguistics" cols="col-span-2" rows="row-span-2" textHeader="Linguistics" headerColor="bg-purple-500" bodyColor="stdGray" bodyText="Conlangs & studying Japanese" />
        <Bento key="music" cols="col-span-2" rows="row-span-1" textHeader="Music" headerColor="bg-green-500" bodyColor="stdGray" bodyText="I play piano, guitar, and want to compose contemporary / produce indie rock" />
        <Bento key="about" cols="col-span-2" rows="row-span-1" textHeader="About Me" headerColor="bg-orange-500" bodyColor="stdGray" bodyText="16 year old high school student" />
        <Bento key="art" cols="col-span-2" rows="row-span-1" textHeader="Art/Writing" headerColor="bg-yellow-500" bodyColor="stdGray" bodyText={["I like ", <a href="">painting</a>]} />
        <Bento key="dev"cols="col-span-2" rows="row-span-1" textHeader="Skills" headerColor="bg-yellow-500" bodyColor="stdGray" bodyText="I am experienced in both game and web design and development, in JavaScript/React, Lua, and C." />
        </div>


  );
}

export default Home;