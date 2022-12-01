import React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";



const Projects = () => {
    const { url } = useRouteMatch();

    return (
        <div>
            <h1>Projects</h1>

            <p>I'll be documenting all my small projects here</p>

            <ul>
                <li>
                    <NavLink to={`${url}/todo-app`}>Todo List</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/food-gallery`}>Food Gallery</NavLink>
                </li>
            </ul>

            {/* <ol>
                <li>A fashion news website using HTML and CSS</li>
                <li>A chilli webpage using JavaScript</li>
                <li>A JavaScript webpage with weather api and the game Rock, Paper, Scrissor</li>
            </ol> */}
            

        </div>
        
    );
};

export default Projects;