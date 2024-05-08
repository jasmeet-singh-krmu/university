import { useEffect, useState } from "react"

// Packages
import axios from "axios";

function DepartmentsPage() {

  const [departments, setDepartments] = useState([])

    useEffect(()=>{
      axios.get('https://university.demoapi.xyz/api/departments')
      .then((response)=>{
        console.log(response)
        // console.log(departments)
        setDepartments(response.data.data)
      })
      .catch((error)=>{
        console.log(error)
      })
      return ()=>{}
    },[])

    return(
      <>
        <h1>Departments</h1>

        <ul>
        {
          departments.map((department, index)=>(
              <li key={index}>
                { department.attributes.name }
              </li>
          ))
        }
        </ul>

      </>
    )
  }

export default DepartmentsPage