import React from 'react';
import { Card } from './projects';
import "../home.css";
export function HomePage() {

    return(
        <div>
            <h1> Portfolio in progress</h1>
            <p> I will not owe anyone money!!!</p>

            <div class="projects">
                <Card title= "sup" description= "this will be project description" image= "./public/download.jpg" tags = {["js", "react"]}/>
                <Card title="second" description= "2nd project description" image= "./public/download.jpg" tags = {["js, react"]} />
            </div>
        </div>
        

    );

}