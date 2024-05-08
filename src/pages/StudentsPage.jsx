import { useEffect, useState, useContext } from "react"
import LoginContext from "../contexts/LoginContext"

// Packages
import axios from "axios";

function StudentsPage() {

  const loginContext = useContext(LoginContext)

  const [students, setStudents] = useState([])

    useEffect(()=>{

      /*************************/
      // This is the only new statement added so that the first useless call to the api is not made until
      // 1. The value of loginContext.token is changed (mentioned in array at end of this useEffect)
      // 2. The value of loginContext.token is true (mentioned in the if statement just below this comment)
      if( loginContext.token ) {
      /*************************/

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
        
      }
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