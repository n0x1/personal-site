import React from "react";

const Bento = ({ cols, rows, textHeader, headerColor, bodyColor, bodyText }) => {
    let paddingStyles = bodyText ? { padding: '0.3rem 0.8rem 0.7rem' } : { padding: '0' };

    return (
        <>
    <div className={`${cols} ${rows} ${bodyColor} z-50 transition-all ease-in bg-inherit h-fill hover:-translate-y-1 hover:scale-105 justify-center shadow-lg rounded-md`}>
        <div className={`flex-shrink-0 rounded-t-md p-4 bg-cover ${headerColor}`}> 
            <h1 className="self-center drop-shadow stroke-2 stroke-inherit text-2xl text-center">{textHeader}</h1>
        </div>  
        <div  style={paddingStyles} className={`flex-grow p-2 md:p-4 overflow-scroll`}>
            <p>{bodyText}</p>
        </div>
    </div>
        </>
    );
};

export default Bento;

//u can change the bg color and header in app.jsx , width is now grid span