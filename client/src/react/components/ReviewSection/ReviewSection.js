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

    useEffect(() => {

        // dispatch(getProductReviews(details.id))

        return () => {
            // dispatch(clearProductReviews())
        };
    }, [ProductDetail]);


    return <>
        <div className={'flex flex-col px-20 mb-10'}>
            <div className={'flex justify-between max-w-[65%] mb-16'}>
                <h2 className={"font-['Lato'] font-semibold text-2xl my-2 text-red-800"}>RESEÑAS <span className={'text-black font-thin'}>(1)</span></h2>
                <div className={'flex self-center text-lg'}>
                    <Rating className={'self-center'} readOnly={true} value={4} color={'black'}/>
                    <p className={'ml-1'} >(4)</p>
                </div>
            </div>


            {/*{reviews > 0 ? reviews.map(e => {*/}
            {/*    return <ReviewCard*/}
            {/*        title={e.title}*/}
            {/*        rating={e.rating}*/}
            {/*        content={e.content}*/}
            {/*        img={e.img}*/}
            {/*        username={e.username}*/}
            {/*        date={e.date}*/}
            {/*        likes={e.likes}*/}
            {/*        dislikes={e.dislikes}*/}
            {/*    />*/}
            {/*})*/}
            {/*: 'Este producto aun no tiene valoraciones'*/}
            {/*}*/}

            <div>
                <h4 className={"font-['Lato'] font-bold mb-1"}>Titulo de la valoracion</h4>
                <Rating className={'self-center'} readOnly={true} value={4} size={'small'}/>

                <div className={'flex'}>
                    <p className={'max-w-[55%] font-["Lato"] text-lg py-5'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi natus nesciunt
                        numquam, obcaecati quidem vel velit. Ab cum deserunt, doloremque error fugiat harum
                        impedit, nobis possimus provident quidem rerum saepe.
                    </p>
                    <img className={'self-center px-10 rounded-[50%] w-32'}
                         src={ProductDetail && ProductDetail.img}  alt={ProductDetail && ProductDetail.name}/>
                </div>
                <p className={'font-semibold text-zinc-500'}>username | fecha</p>
                <div className={'flex justify-center'}>
                    <IconButton aria-label={'delete'}>
                        <ThumbUpOffAltIcon />
                    </IconButton>
                    <p className={'self-center'}>4</p>
                    <IconButton aria-label={'delete'}>
                        <ThumbDownOffAltIcon />
                    </IconButton>
                    <p className={'self-center'}>0</p>

                </div>
                <hr className={'flex self-center max-w-[85%] mb-10'}/>

            </div>



        </div>

    </>
}