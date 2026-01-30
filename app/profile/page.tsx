'use client'
import { useRouter } from "next/navigation";

function Profile() {
     const router = useRouter();

    return (
        <div>
            <div className='border flex flex-col mr-90'> <h2>name</h2></div>
            <div className=' flex p-2 flex-col ml-150  '>
                <div className="p-3 gap-2 flex flex-col  justify-center items-center ">
                    <button className='border rounded-sm p-1' onClick={() => router.push("/editprofile")}>edit</button>
                <button className='border rounded-sm p-1'> view archive</button>
                    
                </div>

               
            </div>

        </div>
            
    )

    
}

export default Profile;