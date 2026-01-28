'use client'
import {useRouter }from 'next/navigation';
import Chat from '../chat/user/page';

export default function Hero() {
    const router = useRouter();
    return (
        <div>
           
            <h1>hero</h1><button onClick={() => router.push('/chat/user')}>Login</button>

        </div>
        
    );
}

