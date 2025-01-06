import { useState } from "react";

const Avatar = ({infoUser}) => {
        return(
        <>
        <h1>Hello my name is {infoUser.firstName} {infoUser.lastName}</h1>
        <img src={infoUser.img} alt="Picture of character"/>
        <h2>I love {infoUser.passion}</h2>
        </>
    )

    
}


export default Avatar;