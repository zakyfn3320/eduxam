import React, { useContext } from 'react'
import { AuthenticationContext } from '../hooks/Authentication'
import DashbaordStudent from './DashboardStudent'
import DashboardAdmin from './DashboardAdmin'

const component = {
    "student": <DashbaordStudent />,
    "teacher": <DashboardAdmin />
}

const Dashboard = () => {
    const authentication = useContext(AuthenticationContext)
    // console.log('authentication', authentication)
    const user = authentication.user
    // const [user, setUser] = useState(null)
    // useEffect(() => {
    //     setUser(authentication.user)
    // }, [authentication])

    return user === null
        ? <span>Loading</span>
        : component[user.role]
}

export default Dashboard