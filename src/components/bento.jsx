import React from "react";

const Bento = ({ width, textHeader, headerColor, bodyColor, bodyText }) => {
    return (
        <>
    <div className={`${width} ${bodyColor} h-fit shadow-lg rounded-md mx-4 mb-4`}>
        <div className={`flex-shrink-0 rounded-t-md z-50 top-0 mx-auto p-4 ${headerColor}`}> 
            <h1 className="self-center text-2xl">{textHeader}</h1>
        </div>

        <div className={` max-h-32 flex-grow p-4 overflow-scroll`}>
            <p>{bodyText}!</p>
        </div>
    </div>
        </>
    );
};

export default Bento;

//u can change the bg color and header in app.jsx