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
                    bodyText="Tbd revision"
                />
        </div>
        </>
  );
}

export default Fashion;

// make them not colors, but background images for each header
