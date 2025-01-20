import React, { useState } from 'react'
import { SignInFlow } from '../types'
import { SignInCard } from './sign-in-card'
import { SignUpCard } from './sign-up-card'
import pic from '../../../assets/images/healthLink.jpg'

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn")
  

  return (
    <div className="h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${pic})`, opacity: 0.8 }}>
      <div className="md:h-auto md:w-[420px]">
       {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
      </div>
    </div>
  )
}
