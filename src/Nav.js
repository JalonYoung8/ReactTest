import React from 'react';
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav>
            <Link exact to={"/"}>Container</Link>
            <Link to={"/data"}>Info</Link>
            <Link to={"/cool"}>Cool</Link>
        </nav>
    )
}

export default Nav;