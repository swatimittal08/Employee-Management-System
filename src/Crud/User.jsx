import React from 'react'
import style from "./home.module.css"
import { useState , useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {
  let [data , setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/content")
    .then((response) => {
      setData(response.data)
    })

    .catch((response) => {
      console.log("DIDN'T GET");
    })
  },[])

  let deletedata=(id)=>{
    axios.delete(`http://localhost:3000/content/${id}`) 
    window.location.assign("/user")
  }

  return (
    <div id={style.myuser}>
      {data.map((x) => {
        return(
          <div id={style.card}>
            <table>
            <tr>
              <th colSpan='2'><h3>EMPLOYEE {x.id}</h3></th>
            </tr> <br />

            <tr>
              <td>Name</td>
              <td>: {x.name}</td>
            </tr>

            <tr>
              <td>Contact</td>
              <td>: {x.contact}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>: {x.email}</td>
            </tr>

            <tr>
              <td>Designation</td>
              <td>: {x.designation}</td>
            </tr>

            <tr>
              <td>Salary</td>
              <td>: {x.salary}</td>
            </tr>

            <tr>
              <td>Company</td>
              <td>: {x.company}</td>
            </tr>            

            <tr>
              <td><button><Link to={`/editusers/${x.id}`}>Edit</Link></button></td>
              <td><button onClick={()=>{deletedata(x.id)}}>Delete</button></td>
            </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default User
