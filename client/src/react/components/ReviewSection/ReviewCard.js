import {Rating} from "@material-ui/lab";
import {IconButton} from "@material-ui/core";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import React, {useState} from "react";

export const ReviewCard = ({title, rating, content, img, username, date, likes, dislikes, product}) => {


    const [state, setState] = useState({
        liked: false,
        disliked: false,
        likes: likes,
        dislikes: dislikes
    });


    const handleClick = (ev, value, name, name2xd) => {

        if (ev === 'add') {
            setState({
                ...state,
                [name2xd]: state[name2xd]++
            })
        }
        if (ev === 'subtract') {
            setState({
                ...state,
                [name2xd]: state[name2xd]--
            })
        }

        setState({
            ...state,
            [name]: value
        })
    }


    return <>
        {product && <h4 className={'text-xl my-10 text-zinc-700 font-thin'}>Compraste {product.name}</h4>}
        <h4 className={"font-['Lato'] font-bold mb-1"}>{title}</h4>
        <Rating className={'self-end mr-[10%]'} readOnly={true} value={rating} size={'small'}/>

            <p className={'max-w-[80%] font-["Lato"] text-lg py-5'}>
                {content}
            </p>
            {/*<img className={'self-center px-10 rounded-[50%] w-32'}*/}
            {/*     src={img} alt={title}/>*/}
        <p className={'font-semibold text-zinc-500'}>{username} | {new Date(date).toLocaleDateString()}</p>
        <div className={'flex justify-center'}>
            { !state.disliked && <IconButton aria-label={'delete'}>
                {state.liked ? <ThumbUpAlt onClick={(ev) => handleClick('subtract', false, 'liked', 'likes')}/> :
                    <ThumbUpOffAltIcon onClick={(ev) => handleClick('add', true, 'liked', 'likes')}/>}
            </IconButton> }
            {!state.disliked && <p className={'self-center'}>{state.likes}</p>}
            {!state.liked && <IconButton aria-label={'delete'}>
                {state.disliked ?
                    <ThumbDownAlt onClick={(ev) => handleClick('subtract', false, 'disliked', 'dislikes')}/> :
                    <ThumbDownOffAltIcon onClick={(ev) => handleClick('add', true, 'disliked', 'dislikes')}/>}
            </IconButton>}
            {!state.liked && <p className={'self-center'}>{state.dislikes}</p>}

        </div>
        <hr className={'flex self-center max-w-[85%] mb-14'}/>
    </>
}