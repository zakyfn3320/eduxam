import { createContext, useState } from "react"

const AuthenticationContext = createContext(null)

const useAuthentication = () => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)

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

    return { user, role, setUserState, setRoleState, removeUserState }
}

export {
    useAuthentication, AuthenticationContext
}