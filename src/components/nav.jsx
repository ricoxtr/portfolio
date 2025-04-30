import React from 'react';
import { Link } from 'react-router';

 export function Navbar() {

    return(
        <nav>
          
                <h2> hello I am the mighty pumpkin</h2>
                <Link to="/gis"><p>work</p></Link>
                <Link to="/aboutme">about me</Link>
        
        </nav>
    );
 }