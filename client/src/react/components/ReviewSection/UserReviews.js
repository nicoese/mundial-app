import {useAuth0} from "@auth0/auth0-react";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllReviewsByUserEmail} from "../../../redux/actions";
import {ReviewCard} from "./ReviewCard";


export const UserReviews = () => {

    const {user} = useAuth0()
    const dispatch = useDispatch()
    const {userReviews} = useSelector(state => state)

    useEffect(() => {

        user && dispatch(getAllReviewsByUserEmail(user.email))

        return () => {
        };
    }, [user]);


    return <>

        <div className={'flex flex-col mt-20 p-20'}>

            <h2 className={"font-['Lato'] font-semibold text-2xl my-2 text-red-800"}>MIS RESEÑAS <span
                className={'text-black font-thin'}>({userReviews.length})</span></h2>

            {
                userReviews.length > 0 ? userReviews.map(e => {
                return <ReviewCard

                    title={e.title}
                    rating={e.rating}
                    content={e.content}
                    username={user && user.name}
                    date={e.date}
                    likes={e.likes}
                    dislikes={e.dislikes}
                    product={e.productId}

                />
            })
            : <div className={'py-20'}>No tenes reviews</div>
            }

        </div>

    </>
}