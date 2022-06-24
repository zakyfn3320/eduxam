import { createContext, useEffect, useState } from "react"

const AuthenticationContext = createContext(null)

const useAuthentication = () => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
    const [userDB, setUserDB] = useState(null)

    useEffect(() => {
        const embedUser = require("../utils/users.json")
        setUserDB(embedUser)
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

    const setUserState = (user) => {
        setUser(user)
    }

    const setRoleState = (role) => {
        setRole(role)
    }

    const removeUserState = () => {
        setUser(null)
        setRole(null)
    }

    return { user, role, setUserState, setRoleState, removeUserState, doRegisterUser }
}

export {
    useAuthentication, AuthenticationContext
}