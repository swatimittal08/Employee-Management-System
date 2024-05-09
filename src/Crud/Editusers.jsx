import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useParams , useNavigate } from 'react-router-dom'


const Editusers = () => {
    let [name , setName] = useState("")
    let [contact , setContact] = useState("")
    let [email , setEmail] = useState("")
    let [designation , setDesignation] = useState("")
    let [salary , setSalary] = useState("")
    let [company , setCompany] = useState("")

    let navigate = useNavigate()
    let {index} = useParams()
    console.log(index)

    useEffect(() => {
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp) => {
            console.log(resp.data)
            setName(resp.data.name)
            setContact(resp.data.contact)
            setEmail(resp.data.email)
            setDesignation(resp.data.designation)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    }, [])

    let nameData = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    let contactData = (e) => {
        e.preventDefault()
        setContact(e.target.value)
    }

    let emailData = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    let designationData = (e) => {
        e.preventDefault()
        setDesignation(e.target.value)
    }

    let salaryData = (e) => {
        e.preventDefault()
        setSalary(e.target.value)
    }

    let companyData = (e) => {
        e.preventDefault()
        setCompany(e.target.value)
    }


    let formHandle = (e) => {
        e.preventDefault()
        let payrole = {name , contact , email, designation, salary, company}
        axios.put(`http://localhost:3000/content/${index}`,payrole)
        
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
                <th colSpan="2"><h3>UPDATE EMPLOYEE DETAILS</h3></th>
            </tr>
            <tr>
                <td><label>Name : </label></td>
                <td><input type="text" value={name} onChange={nameData} required/></td>
            </tr>

            <tr>
                <td><label>Contact</label></td>
                <td><input type="text" value={contact} onChange={contactData} required/></td>
            </tr>

            <tr>
                <td><label>Email</label></td>
                <td><input type="text" value={email} onChange={emailData} required/></td>
            </tr> 

            <tr>
                <td><label>Designation</label></td>
                <td><input type="text" value={designation} onChange={designationData} required/></td>
            </tr>

            <tr>
                <td><label>Salary</label></td>
                <td><input type="text" value={salary} onChange={salaryData} required/></td>
            </tr>

            <tr>
                <td><label>Company</label></td>
                <td><input type="text" value={company} onChange={companyData} required/></td>
            </tr> <br />

            <tr>
                <th colSpan="2"><button onClick={formHandle}>Update</button></th>
            </tr>
        </table>
    </div>
  )
}

export default Editusers 
