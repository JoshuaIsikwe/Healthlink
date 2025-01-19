import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Chart } from '@/components/Chart'


export const Home = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className='h-full bg-slate-200'>
      <h1 className=""> Welcome to home page {}  </h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-4 p-4'>
        <Card className='shadow-xl row-span-2 bg-blue-300 border-none rounded-lg p-4'>
          <h1 className='text-center font-bold text-xl underline'>Daily Objectives</h1>
        </Card>
        <Card className='shadow-md'>
          <h1 className='text-lg text-center'>Hours logged</h1>
        </Card>
      <div className=' col-span-1 items-center justify-center'>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border flex items-center"
        />
      </div>
       <Card className='shadow-md col-span-2 '>
          <h1 className='text-lg text-center'>Hours logged this week</h1>
          <Chart/>
        </Card>
      </div>
    </div>
  )
}
