import React from 'react';
import { Link } from 'react-router';

 export function Navbar() {

    return(
        <nav>
          <div class= "leftNav">
            <h2> rico</h2>
          </div>
                
          <div class= "midNav">
             <Link to="/gis"><p>work</p></Link>
             <Link to="/aboutme">about me</Link>
          </div>

          <div class= "rightNav">
            <p> -- Contacts --</p>
          </div>

        
        </nav>
    );
 }