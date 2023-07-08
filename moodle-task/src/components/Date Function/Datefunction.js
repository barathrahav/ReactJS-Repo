import React, { useState } from "react";

function DateFunction(){
    const[output,setOutput] = useState("");
    function Check(){
        var date = document.getElementById("date").value;
        var d = new Date(date);
        d.setDate(d.getDate(date)+90);
        var output = d.getDate()+"/"+(d.getMonth()+1) +"/" +d.getFullYear();
        setOutput(output)
    }
    return(
        <>
            <div className="m-5 text-center">
                <label>Corse Joining Date :</label>
                <input type="date" name="" id="date" /><br /><br />
                <label>Corse Complition Date : {output}</label><br /><br />
                <input type="button" value="Check" onClick={Check} />
            </div>
        </>
    );
}
export default DateFunction;