import { BrowserRouter , Routes , Route } from "react-router-dom"
import Homepage from "./Crud/Homepage"
import Employee from "./Crud/Employee"
import User from "./Crud/User"
import Editusers from "./Crud/Editusers"

const App = () => {
    return(        
        <div>
            <BrowserRouter>
                <Homepage />
                <Routes>
                    <Route path="/" element={<Employee/>} />
                    <Route path="/user" element={<User/>}/>
                    <Route path="/editusers/:index" element={<Editusers/>}/>
                </Routes>
            </BrowserRouter> 
        </div>
    )
} 

export default App 