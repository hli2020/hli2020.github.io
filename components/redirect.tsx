'use client'



import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()


    
    if (
        pathname.toLowerCase().startsWith('/CV.pdf')
    ) {
        redirect('/content/CV.pdf')
    }
    if (
        pathname.toLowerCase().startsWith('/recruit')
    ) {
        redirect('/recruit')
    }


    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
