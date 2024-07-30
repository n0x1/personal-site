import React from 'react';
import Bento from '../bento.jsx';
import Navbar from '../navbar.jsx';
import Overlay from '../Overlay.jsx';

function Art() {
  return (
    <>  
        <div className='overlay'>
<Overlay />
    </div>
        
        <div>
            <Navbar />
        </div>
       
        </>
  );
}

export default Art;

// make them not colors, but background images for each header