import {useAuth0} from "@auth0/auth0-react";


export const Profile = () => {

    const {user} = useAuth0()

    console.log(user)

    return <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <img src={user.picture} alt=""/>
    </div>
}