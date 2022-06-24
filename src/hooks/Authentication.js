import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthenticationContext = createContext(null)

const useAuthentication = () => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [userDB, setUserDB] = useState(null)
    const [isLoggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const embedUser = require("../utils/users.json")
        setUserDB(embedUser)
        const localUser = localStorage.getItem("user")
        if (localUser !== null) {
            setUser(JSON.parse(localUser))
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }, [])

    const doRegisterUser = (user) => {
        setUserDB(prev => [
            ...prev, { id: String(Date.now()), ...user }
        ])
    }

    const doLoginUser = (user) => {
        const filteredUser = userDB.filter(item => item.email === user.email)
        if (filteredUser.length < 1) return false
        if (filteredUser[0].password === user.password) {
            setLoggedIn(true)
            setUser(filteredUser[0])
            const userString = JSON.stringify(filteredUser[0])
            localStorage.setItem("user", userString)
            return true
        } else {
            return false
        }
    }

    // const setUserState = (user) => {
    //     setUser(user)
    // }

    // const setRoleState = (role) => {
    //     setRole(role)
    // }

    const doLogout = () => {
        setUser(null)
        setRole(null)
        localStorage.removeItem("user")
        setLoggedIn(false)
        return true
    }

    return { user, role, isLoggedIn, doRegisterUser, doLoginUser, doLogout }
}

export {
    useAuthentication, AuthenticationContext
}