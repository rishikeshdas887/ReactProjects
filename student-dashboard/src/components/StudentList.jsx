import StudentCard from"./StudentCard";
function StudentList({students}){
//its own const students are removed App.jsx-> StudentList->StudentCard
    return(
        <div>

{students.map((student)=>(
    <StudentCard 
key={student.id}
name={student.name}
course={student.course}
course={student.marks}


/>
))}


</div>
    );
}
export default StudentList;
//it passess data through props name ,course and marks
//decides how many students

//data+.map()+props