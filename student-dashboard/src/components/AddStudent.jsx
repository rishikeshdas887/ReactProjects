import { useState } from "react";
function AddStudent({onAddStudent}) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // handles browser's normal form reload
    console.log(name);

    const newStudent = {
        id:Date.now(),
name,
course,
 marks,
    };
    console.log(newStudent);
    onAddStudent(newStudent);  //enables child-> parent communication
    
  }
  return (
    //useState+input

    <form onSubmit={handleSubmit}>
      {/* runs when form is submitted */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {/* e.target.value mans what the user has typed handle it  */}

      <input
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Course"
      />
      <input
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        placeholder="Marks"
      />

      <button type="submit">Add Student</button>
    </form>
  );
}
export default AddStudent;
