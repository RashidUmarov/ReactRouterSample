import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <p>This is a demo website about React-router-dom library</p>
            <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
        </div>
    )
}

export {About}