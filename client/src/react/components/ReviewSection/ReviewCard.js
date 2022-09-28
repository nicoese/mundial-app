import {Rating} from "@material-ui/lab";
import {IconButton} from "@material-ui/core";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import React from "react";

export const ReviewCard = ({title, rating, content, img, username, date, likes, dislikes}) => {


    return <>
        <h4 className={"font-['Lato'] font-bold mb-1"}>{title}</h4>
        <Rating className={'self-center'} readOnly={true} value={rating} size={'small'}/>

        <div className={'flex'}>
            <p className={'max-w-[55%] font-["Lato"] text-lg py-5'}>
                {content}
            </p>
            <img className={'self-center px-10 rounded-[50%] w-32'}
                 src={img}  alt={title}/>
        </div>
        <p className={'font-semibold text-zinc-500'}>{username} | {date}</p>
        <div className={'flex justify-center'}>
            <IconButton aria-label={'delete'}>
                <ThumbUpOffAltIcon />
            </IconButton>
            <p className={'self-center'}>{likes}</p>
            <IconButton aria-label={'delete'}>
                <ThumbDownOffAltIcon />
            </IconButton>
            <p className={'self-center'}>{dislikes}</p>

        </div>
        <hr className={'flex self-center max-w-[85%] mb-10'}/>
    </>
}