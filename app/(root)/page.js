import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" p-4">
      <UserButton afterSignOutUrl="/"/>
      
    </div>
  )
}
