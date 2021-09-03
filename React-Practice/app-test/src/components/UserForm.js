import React from 'react'
//import ValidatorForm from "./ValidatorForm"
//import 'bootstrap/dist/css/bootstrap.min.css'

const UserForm = (props) => {
    const [username, setUsername] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        const newUser = { username, email, password }
        console.log("Welcome, newUser")
        setUsername(newUser)
        setPassword(newUser)
        setEmail(newUser)

        setHasBeenSubmitted(true)
    }


    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form"
        } else {
            return "Welcome, please submit the form"
        }
    }

    return (
        <form onSubmit={createUser}>
            <h3>{formMessage}</h3>
            <div>
                <lebel>User Name</lebel>
                <input type="text" onchange={(e) => setUsername(e.target.value)} />
            </div>
            <br></br>
            <div>
                <lebel>Email Adress</lebel>
                <input type="text" onchange={(e) => setEmail(e.target.value)} />
            </div>
            <br></br>
            <div>
                <lebel>Password</lebel>
                <input type="text" onchange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User"></input>
        </form>
    )


}

export default UserForm
