import { useState } from "react";
function StudentCard({name, course ,marks}){

   const[currentMarks,setCurrentMarks]=useState(marks);
   
 return(
<div> 
     {/* /*recieving props*/ }
    <h2>{name}</h2> 
    <p>Course: {course}</p>
    <p>Marks: {currentMarks}</p>


    {currentMarks>=80 ?(  //ternary operator
       <p> Excellent</p>// conditional rendering based on marks 
    ):(<p> Needs Improvement</p>)//good for either or choices inline 
    
    }
    <button onClick={()=>setCurrentMarks(currentMarks+1)}>Increase Marks</button>
{/* //calling function */}
<button onClick={()=>setCurrentMarks(currentMarks-1)}>Decrease Marks</button>

    </div>
);
}
export default StudentCard;


// props marks
//     ↓
// useState
//     ↓
// currentMarks
//     ↓
// button click
//     ↓
// setCurrentMarks()
//     ↓
// component re-renders
//     ↓
// new marks displayed