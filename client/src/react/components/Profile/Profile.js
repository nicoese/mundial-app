import {useAuth0} from "@auth0/auth0-react";


export const Profile = () => {

    const {user} = useAuth0()

    return <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <img className={'rounded-full'} src={user.picture} alt=""/>
    </div>
}