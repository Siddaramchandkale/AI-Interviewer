import InterviewCard from '@/components/InterviewCard'
import SignOutButton from '@/components/signoutButton'
import { Button } from '@/components/ui/button'
import { getCurrentUser, getLatestInterviews, signOut } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

  const user = await getCurrentUser();

  // in order to process these requests parallelly as they are independent of each other


  const latestInterviews = await getLatestInterviews(20)
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  const handleClick = async () => {
    await signOut(); // server action
    redirect("/login");
  };

  return (
   <>
   <section className='card-cta'>
    <div className='flex flex-col gap-6 max-w-lg'>
      <h2>Get Interview-Ready with AI powered practice & Feedback</h2>
      <p className='text-lg'>
        Practice on real interview questions & get instant feedback
      </p>
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href="/interview">Start an Interview</Link>
      </Button>
    </div>
    <Image src = "/robot.png" alt="robo-dude" width={400} height = {400} className = "max-sm:hidden"/>
   </section>
   <section className='flex flex-col gap-6 mt-8'>
    <h2>Recent Interviews Taken</h2>

    <div className='interviews-section'>
    {
      hasUpcomingInterviews ? (
        latestInterviews?.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
        ))
      ) : (<p>There are no new interviews awailable</p>)
    }
      {/* <p>Yoi haven&apos;t taken any interviews yet</p> */}
    </div>
   </section>


   <SignOutButton/>

   </>
  )
}

export default page