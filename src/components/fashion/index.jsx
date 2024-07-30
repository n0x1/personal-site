import React from 'react';
import Bento from '../bento.jsx';
import Navbar from '../navbar.jsx';
import Overlay from '../Overlay.jsx';

function Fashion() {
  return (
    <>  
        <div className='overlay'>
<Overlay />
    </div>
        
        <div>
            <Navbar />
        </div>
        <div>
        <Bento 
                    key="fashion" 
                    cols="col-span-full" 
                    rows="row-span-1 mt-20" 
                    textHeader="fashion" 
                    headerColor="inherit" 
                    bodyColor="bg-slate-900" 
                    bodyText="i like fashion more than 99% of CS ppl /  my favs: earthy tones, zipper hoodies, chunky jewlery. i have kinda a mix of capsule and thrifted statement stuff. i wanna go back to harajuku i would wear more fem stuff if i wasnt afriad of being judged but i like the options. my style now is more andro iwould say and i wear a mix of mens and womens but still baggy stuff and not experimenting. it feels extremely limiting when u dont wanna be out of place yet also show your indiviuality"
                />
        </div>
        </>
  );
}

export default Fashion;

// make them not colors, but background images for each header