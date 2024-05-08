import { useEffect, useState, useContext } from "react"
import LoginContext from "../contexts/LoginContext"

// Packages
import axios from "axios";

function StudentsPage() {

  const loginContext = useContext(LoginContext)

  const [students, setStudents] = useState([])

    useEffect(()=>{


      axios.get(
        'https://university.demoapi.xyz/api/students',
        {
          headers: {
            Authorization: 'Bearer ' + loginContext.token
          }
        }
      )
      .then((response)=>{
        console.log(response)
        // console.log(students)
        setStudents(response.data.data)
      })
      .catch((error)=>{
        console.log(error)
      })
      return ()=>{}
    },[loginContext.token])

    return(
      <>
        <h1>Students</h1>

        <ul>
        {
          students.map((student, index)=>(
              <li key={index}>
                { student.attributes.name }
              </li>
          ))
        }
        </ul>

      </>
    )
  }

export default StudentsPage