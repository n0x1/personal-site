import React from 'react';
import Bento from '../bento.jsx';
import Navbar from '../navbar.jsx';
import Overlay from '../Overlay.jsx';

function Contact() {
    const contactText = [
        ["Instagram", "@cammanzo"],
        ["Email", <a href="mailto:ctmanzo3@icloud.com">ctmanzo3@icloud.com</a>],
        ["Slack", "noxi"],
        ["Github", "npxi"]
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
                    key="contact" 
                    cols="col-span-full" 
                    rows="row-span-1" 
                    textHeader="Contact" 
                    headerColor="inherit" 
                    bodyColor="bg-slate-900" 
                    bodyText={null}
                />
                {contactText.map((text, index) => (
                    <Bento 
                        key={index}
                        cols="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2"
                        rows="row-span-1"
                        textHeader={text[0]}
                        headerColor="inherit"
                        bodyColor="stdGray text-center"
                        bodyText={text[1]}
                    />
                ))}
            </div>
        </>
    );
}

export default Contact;
