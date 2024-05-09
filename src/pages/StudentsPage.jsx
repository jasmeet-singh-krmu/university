import { useEffect, useState, useContext } from "react"
import LoginContext from "../contexts/LoginContext"

import { useNavigate } from "react-router-dom";

// Packages
import axios from "axios";

function StudentsPage() {

  const navigate = useNavigate()

  const loginContext = useContext(LoginContext)

  const [students, setStudents] = useState([])

    useEffect(()=>{


      /*************************/
      // This as been added so that the first useless call to the api is not made until both:
      // 1. The value of loginContext.localStorageRead is changed (mentioned in array at end of this useEffect)
      // 2. The value of loginContext.localStorageRead is true (mentioned in the if statement just below this comment)
      if( ! loginContext.localStorageRead ) { // This is a flag that tells if LocalStorage has been once read or not
        return
      }
      
      // Redirect to login page if not logged in
      if( ! loginContext.loggedIn ) {
        navigate('/login')
        return
      }
      
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
    },[loginContext.localStorageRead]) // Because localStorageRead always changes even if nothing was found in the localStorage

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