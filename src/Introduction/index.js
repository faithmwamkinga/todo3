import React from "react";
import './style.css';
import  {FaBeer}  from 'react-icons/fa';



const Introduction=()=>{
    return(
    <div>
        <FaBeer/>
        <h1 className="heading">What I learned in React</h1>
        <p className="paragraph">React is a JavaScript</p>
        <p className="paragraph">My classmates love JavaScript programming language</p>
        <p className="paragraph">Students at <span className="school">AkiraChix</span> learn five rogramming languages</p>

        <div className="image">
        <img  src="https://res-console.cloudinary.com/duowl24eo/thumbnails/v1/image/upload/v1688057563/Y2xkLXNhbXBsZS00/preview"></img>
        <img  src="https://res.cloudinary.com/duowl24eo/image/upload/v1688057561/cld-sample.jpg"></img>
        <img src="https://res.cloudinary.com/duowl24eo/image/upload/v1688057559/samples/balloons.jpg"></img>
        <img  src="https://res-console.cloudinary.com/duowl24eo/thumbnails/v1/image/upload/v1688057563/Y2xkLXNhbXBsZS00/preview"></img>
        </div>
    </div>

    )

}


export default Introduction;






