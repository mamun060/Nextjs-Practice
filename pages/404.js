import React, {useEffect} from 'react'
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 5000);
    })


  return (
    <div>
        <h2>Oopps Not Found</h2>
        <p> Go to the back page </p>
    </div>
  )
}

export default NotFound