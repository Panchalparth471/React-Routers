import React from "react";
import { useNavigate } from "react-router-dom";
function Lab() {

     const navigate = useNavigate();
    function ClickHandler() {
        //Move to about page
        navigate("/about");
    
    }

    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
            <div>Labs</div>
            <button onClick={ClickHandler}>Move to About Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
      
    );
}

export default Lab;