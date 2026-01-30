'use client'
import {useRouter }from 'next/navigation';
import Header from './header';
import { Buttons } from './buttons';

export default function Hero() {
    const router = useRouter();
    return (
        <div>
           
            <h1>hero</h1><button onClick={() => router.push('/chat/user')}>Login</button>
            <Header/>
                {/* <button onClick={() => router.push(`/profile/`)}>profile</button> */}
                <div className=' flex justify-center '>
                     <div className=' flex fixed w-full justify-center items-center mt-148 '>
                      <div className='border rounded-full'>
                        {Buttons.map((btns)=>(
                      <button onClick={()=> router.push(btns.page?"/editprofile":"")} key={btns.id} className='p-2 '>{btns.label}</button>
                         ))}
                         </div>
                      </div>
                </div>
        </div>
        
    );
}

