import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AiFillSignature } from "react-icons/ai";
import { Label } from "@/components/ui/label"


function Signature() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pName, setPname] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='flex flex-col items-center justify-center h-full'>
       <Card className='h-full w-2/3 p-8 bg-white'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle>
          Application
        </CardTitle>
        <CardDescription>
        Fill this form to process your applications 
      </CardDescription>
      </CardHeader>
      <CardContent className='space-y-5 px-0 pb-0'>
        <form className='space-y-5' action="">
          
        <div className='flex gap-6 items-center'>
          <Label htmlFor="picture" className='text-sm'>Profile picture</Label>
          <Input id="picture" className='w-3/5 items-end' type="file" />
        </div>
          <Input
            disabled={false}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            type='name'
            required
          />
          <Input
            disabled={false}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            type='name'
            required
          />
          <Input
            disabled={false}
            value={pName}
            onChange={(e) => setPname(e.target.value)}
            placeholder='Preferred name'
            type='name'
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
          <Separator/>
           <span className='text-blue-500 text-lg my-2 flex gap-5'>Sign here <AiFillSignature className='size-8' /></span>
        </form>
        <Separator/>
        <Button type='submit' className='w-full bg-black text-white hover:text-black' size='lg'>Upload</Button>
      </CardContent>
    </Card>

    </div>
  )
}

export default Signature
