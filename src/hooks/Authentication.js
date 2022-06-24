import { createContext, useEffect, useState } from "react"

const AuthenticationContext = createContext(null)

const useAuthentication = () => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [userDB, setUserDB] = useState(null)
    const [isLoggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const embedUser = require("../utils/users.json")
        setUserDB(embedUser)
        const localUser = localStorage.getItem("user")
        if (localUser !== null) {
            setUser(JSON.parse(localUser))
            setLoggedIn(true)
        }
    }, [])

    useEffect(() => {
        console.log('userDB', userDB)
    }, [userDB])

    const doRegisterUser = (user) => {
        console.log('user', user)
        setUserDB(prev => [
            ...prev, { id: String(Date.now()), ...user }
        ])
    }

    const doLoginUser = (user) => {
        console.log('user', user)
        const filteredUser = userDB.filter(item => item.email === user.email)
        console.log('filteredUser', filteredUser)
        if (filteredUser.length < 1) return false
        if (filteredUser[0].password === user.password) {
            setLoggedIn(true)
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
    }

    return { user, role, isLoggedIn, doRegisterUser, doLoginUser, doLogout }
}

export {
    useAuthentication, AuthenticationContext
}