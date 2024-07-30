import React from "react";

const Navbar = () => {
    return(
        <div className="fixed flex w-dvw navbar top-0 py-0.5">
                <a href='/' className="hover:cursor-pointer no-underline"><img className="w-16 h-16" src="../public/favicon.png"/></a>

                <div className="nav">
                 <a href='/xhere' className="hover:cursor-pointer no-underline">Portfolio</a>
                 <a href='/xhere' className="hover:cursor-pointer no-underline">Contact</a>
                </div>
                

        </div>
    )
}

export default Navbar