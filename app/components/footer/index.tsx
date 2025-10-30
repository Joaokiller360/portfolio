'use client'

import { useEffect, useState } from "react";
import { UserName, fetchUserName } from '@/api/getUserName'

export default function Footer() {

  const [userName, setUserName] = useState<UserName[]>([]);

  useEffect(() => {
    fetchUserName().then(setUserName);
  }, []);

  return (
    <div className="flex justify-center pt-10 pb-3">
      {userName.map((user, index) => (
        <div key={index}>
          <p className='focus:outline-none mt-6 text-xs lg:text-sm leading-none mx-5 text-center h-5'>Todos los derechos reservados por
            <span> ©<span className='font-medium hover:text-customRed hover:underline cursor-pointer'>{user.userName}</span></span>
          </p>
        </div>
      ))}
    </div>
  )
}
