import React, { useState } from 'react'
import { SignInFlow } from '../types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from 'react-icons/fc';

interface SignUpCardProps{
  setState: (state : SignInFlow) => void;
}

export const SignUpCard = ({setState}: SignUpCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  

  return (
    <Card className='h-full w-full p-8 bg-white'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle>
          <h1 className='text-lg text-blue-500 mb-4'>healthLink</h1>
          Sign to Continue
        </CardTitle>
        <CardDescription>
        Use your email or another service to continue
      </CardDescription>
      </CardHeader>
      <CardContent className='space-y-5 px-0 pb-0'>
        <form className='space-y-2.5' action="">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            required
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder='Confirm Password'
            type='password'
            required
          />
          <Button type='submit' className='w-full bg-black text-white hover:text-black' size='lg'>Continue</Button>
        </form>
        <Separator/>
        <div className='flex flex-col gap-y-2.5'>
          <Button disabled={false}
          onChange={() => {}}
          variant="outline"
           size='lg'
           className='w-full relative'
          >
            <FcGoogle className=' size-5 absolute top-3 left-3'/>
          Continue with Google
          </Button>
        </div>
        <p className='text-muted-foreground text-xs'>
          Already have an account? <span onClick={()=> setState("signIn")} className='text-sky-700 hover:underline cursor-pointer'>Sign In</span>
        </p>
      </CardContent>
    </Card>
  )
}
