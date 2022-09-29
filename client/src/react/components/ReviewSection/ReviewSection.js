import {Rating} from "@material-ui/lab";
import {IconButton} from "@material-ui/core";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReviewCard} from "./ReviewCard";

export const ReviewSection = () => {

    const dispatch = useDispatch()
    const {reviews, ProductDetail} = useSelector(state => state)

    const reviews0 = [
        {
            title: 'title 1',
            rating: 1,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut" +
                " culpa eligendi eos " +
                "error est fugit maxime minima nihil non odio officia, quia, ratione reprehenderit" +
                "similique ullam velit, " +
                " vero",
            img: ProductDetail.img,
            username: 'user 1',
            date: new Date().toLocaleString(),
            likes: 10,
            dislikes: 1
        },
        {
            title: 'title 2',
            rating: 5,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut" +
                " culpa eligendi eos " +
                "error est fugit maxime minima nihil non odio officia, quia, ratione reprehenderit" +
                "similique ullam velit, " +
                " vero",
            img: ProductDetail.img,
            username: 'user 2',
            date: new Date().toLocaleString(),
            likes: 9,
            dislikes: 145
        },
        {
            title: 'title 3',
            rating: 4,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut" +
                " culpa eligendi eos " +
                "error est fugit maxime minima nihil non odio officia, quia, ratione reprehenderit" +
                "similique ullam velit, " +
                " vero",
            img: ProductDetail.img,
            username: 'user 3',
            date: new Date().toLocaleString(),
            likes: 950,
            dislikes: 45
        },

    ]

    useEffect(() => {

        // dispatch(getProductReviews(details.id))

        return () => {
            // dispatch(clearProductReviews())
        };
    }, [ProductDetail]);

    console.log()


    return <>

        <div className={'flex flex-col px-20 mb-10'}>
            <div className={'flex justify-between max-w-[65%] mb-16'}>
                <h2 className={"font-['Lato'] font-semibold text-2xl my-2 text-red-800"}>RESEÑAS <span
                    className={'text-black font-thin'}>({reviews0.length})</span></h2>
                <div className={'flex self-center text-lg'}>
                    <Rating className={'self-center'} readOnly={true} value={
                        reviews0.map((a) => a.rating).reduce((a,b) => a + b)/reviews0.length
                    } color={'black'}/>
                    <p className={'ml-1'}>({
                        Math.round(reviews0.map((a) => a.rating)
                            .reduce((a,b) => a + b)/reviews0.length)
                    })</p>
                </div>
            </div>

            {reviews0.length > 0 ? reviews0.map(e => {
                    return <ReviewCard
                        title={e.title}
                        rating={e.rating}
                        content={e.content}
                        img={e.img}
                        username={e.username}
                        date={e.date}
                        likes={e.likes}
                        dislikes={e.dislikes}
                    />
                })
                : 'Este producto aun no tiene valoraciones'
            }
        </div>
    </>
}
