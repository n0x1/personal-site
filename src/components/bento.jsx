import React from "react";

const Bento = ({ cols, rows, textHeader, headerColor, bodyColor, bodyText }) => {

    return (
        <>
    <div className={`${cols} ${rows} ${bodyColor} transition-all ease-in bg-inherit h-fill hover:-translate-y-1 hover:scale-105 justify-center shadow-lg rounded-md mx-2`}>
        <div className={`flex-shrink-0 rounded-t-md z-50 p-4 ${headerColor}`}> 
            <h1 className="self-center text-2xl text-center">{textHeader}</h1>
        </div>  
        <div className={`flex-grow p-2 md:p-4 overflow-scroll`}>
            <p>{bodyText}!</p>
        </div>
    </div>
        </>
    );
};

export default Bento;

//u can change the bg color and header in app.jsx , width is now grid span