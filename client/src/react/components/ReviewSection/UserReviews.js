import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";


export const UserReviews = () => {

    const {user} = useAuth0()
    const dispatch = useDispatch()
    const {userReviews} = useSelector(state => state)

    useEffect(() => {

        // user && dispatch(getReviewsByUserEmail(user.email))

        return () => {
        };
    }, []);


    return <>

        <div className={'flex flex-col mt-32'}>

            <h2 className={"font-['Lato'] font-semibold text-2xl my-2 text-red-800"}>MIS RESEÑAS <span
                className={'text-black font-thin'}>({userReviews.length})</span></h2>

            { userReviews.length > 0 ? userReviews.map(e => {
                return e
            })
            : <div>No tenes reviews</div>
            }

        </div>

    </>
}