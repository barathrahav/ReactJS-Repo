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
                <h1 className="fw-bolder text-primary">KGiSL Micro College</h1>
                <h3 className="fw-bold text-danger">Full Stack Developer</h3>
                <label>Course Joining Date :</label>
                <input type="date" name="" id="date" /><br /><br />
                <label>Course Complition Date : {output}</label><br /><br />
                <input type="button" value="Check" className="border rounded-3 bg-info" onClick={Check} />
            </div>
        </>
    );
}
export default DateFunction;