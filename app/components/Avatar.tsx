'use client';
import React from 'react';
import Image from "next/image";
import avatar from '../../public/placeholder.jpg';

interface AvatarProps {
    src?: string | null | undefined
}
const Avatar : React.FC <AvatarProps>= ({
    src
}) => {
    return (

        <Image
            className='rounded-full'
            width='30'
            height='30'
            alt='avatar'
            src={src || avatar}
            
        />
    )
}

export default Avatar;