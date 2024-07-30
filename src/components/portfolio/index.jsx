import React from 'react';
import Bento from '../bento.jsx';
import Navbar from '../navbar.jsx';
import Overlay from '../Overlay.jsx';

function Portfolio() {
    const portfolioText = [
        "Kaleidoscope Aide: 3 weeks, 96 hours helping kids grade 1-5 in: learning guitar, game design (ROBLOX/unreal engine), app design, arduino, & robotics",
        "CR Discord Marshal: managed community events of 300k+ member community; worked closely with Supercell ambassadors to ship prizes to winners",
        "Phillipian digital associate: tbd",
        "Andover Launchpad: pitched a startup, Conference, a web application which enhances a peer tutoring program at our school, implemented by ASC; independently coded",
        "Launchpad chief technology officer: hosted web dev workshop",
        "Linguistics club board: tbd",
        "Sprig: created a multi-stage roguelite game on hackclub sprig, assembling and pushing to the main repo",
        "Web OS",
        "Music (self led): piano, guitar, production",
        "YDO ukulele: (6 hours) taught ukulele to kids from Lawrence",
        "once I lock in  .  putting hard classes here . tentative goals at school r linear alg, physics c sequence, ML/ related CS ",
    ];

    return (
        <>  
            <div className='overlay'>
                <Overlay />
            </div>
        
            <div>
                <Navbar />
            </div>
            <div className='grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-2 md:mx-4 lg:mx-6 xl:mx-16 mt-20 gap-4'>
                <Bento 
                    key="portfolio" 
                    cols="col-span-full" 
                    rows="row-span-1" 
                    textHeader="Portfolio" 
                    headerColor="inherit" 
                    bodyColor="bg-slate-900" 
                    bodyText={null}
                />
                {portfolioText.map((text, index) => (
                    <Bento 
                        key={index}
                        cols="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2"
                        rows="row-span-1"
                        textHeader={`・${index + 1}・`}
                        headerColor="inherit"
                        bodyColor="stdGray"
                        bodyText={text}
                    />
                ))}
            </div>
        </>
    );
}

export default Portfolio;
