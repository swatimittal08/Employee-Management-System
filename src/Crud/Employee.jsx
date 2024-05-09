import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./home.module.css"
import { useState } from "react"
import axios from 'axios'

const Employee = () => {
    let [name , setName] = useState("")
    let [contact , setContact] = useState("")
    let [email , setEmail] = useState("")
    let [designation , setDesignation] = useState("")
    let [salary , setSalary] = useState("")
    let [company , setCompany] = useState("")

    let navigate = useNavigate()

    let nameData = (e) => {
        setName(e.target.value)
    }

    let contactData = (e) => {
        setContact(e.target.value)
    }

    let emailData = (e) => {
        setEmail(e.target.value)
    }

    let designationData = (e) => {
        setDesignation(e.target.value)
    }

    let salaryData = (e) => {
        setSalary(e.target.value)
    }

    let companyData = (e) => {
        setCompany(e.target.value)
    }

    let formHandle = (e) => {
        e.preventDefault()
        let payload = {name , contact , email, designation}
        axios.post("http://localhost:3000/content",payload)
        
        .then(() => {
            console.log("DATA HAS BEEN ADDED")
        })

        .catch(() => { 
            console.log("SOMETHING IS WRONG")
        })

        navigate("/user")
    }

  return (
    <div id={style.myform}>
        <table className={style.table}>
            <tr>
                <th colSpan="2"><h3>EMPLOYEE DETAILS</h3></th>
            </tr> <br />

            <tr>
                <td><label>Name</label></td>
                <td><input type="text" value={name} onChange={nameData} required/></td>
            </tr>

            <tr><td><label>Contact</label></td>
                <td><input type="text" value={contact} onChange={contactData} required/></td>
            </tr>

            <tr><td><label>Email</label></td>
                <td><input type="text" value={email} onChange={emailData} required/></td>
            </tr> 

            <tr><td><label>Designation</label></td>
                <td><input type="text" value={designation} onChange={designationData} required/></td>
            </tr> 

            <tr><td><label>Salary</label></td>
                <td><input type="text" value={salary} onChange={salaryData} required/></td>
            </tr>

            <tr><td><label>Company</label></td>
                <td><input type="text" value={company} onChange={companyData} required/></td>
            </tr><br />

            <tr>
                <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
            </tr>

        </table>
    </div>
  )
}

export default Employee
