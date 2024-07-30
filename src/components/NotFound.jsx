import React from 'react';
import Bento from './bento.jsx';
import Navbar from './navbar.jsx';
import Overlay from './Overlay.jsx';

function NotFound() {
  return (
    <>  
        <div className='overlay'>
<Overlay />
    </div>
        
        <div>
            <Navbar />
        </div>
        <div className='grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 mx-2 md:mx-4 lg:mx-6 xl:mx-8 mt-20 gap-4'>
            <Bento key="404" cols="col-span-8" rows="pb-2" textHeader="Lonely Enclave" headerColor="bg-[url('../public/leaves.webp')]" bodyColor="stdGray" bodyText={[<i><h1 className='text-center'>404 not found</h1></i>, <div className='text-center'><a href='/'>Return home</a></div>]}/>
        </div>
        </>
  );
}

export default NotFound;

// make them not colors, but background images for each header