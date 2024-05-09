import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section id={style.nav}>
      <Link to="/">Employee</Link>
      <Link to="/user">User</Link>
    </section>
  )
}

export default Homepage 
