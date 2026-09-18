import {useEffect} from "react";
import {useState} from "react";
import StudentList from"./components/StudentList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddStudent from "./components/AddStudent";
function App(){

    const[students,setStudents]=useState([]); //empty students state we should fetch it inside 

    useEffect(()=>{
       console.log("App Rendered Sucessfully");
    },[]);

    //changing the browser tab title according to the number of students

    useEffect(()=>{
      document.title=`Students:{students.length}`;//whenever student added-> total count becomes students.length+1
    },[students])


    function addStudent(newStudent){
    setStudents([...students,newStudent]);
  }
  return (
       <>
      <Navbar/>
    
      <StudentList students={students}/>
      <AddStudent onAddStudent={addStudent} />
        <Footer/>

      
       </>

  );
}
export default App;
//1. app says i wanna display student list 