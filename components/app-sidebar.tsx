"use client"



import Link from "next/link"



import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSubItem,
    SidebarMenuSub,
} from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"



import { FadeIn } from "@/components/animation/fade-in"



function PageSidebar() {

    const { content_page } = useSidebar()

    if (content_page != null) {
        return (
            <SidebarMenu className="mb-12 px-12 text-xs overflow-y-scroll no-scrollbar">
                {
                    content_page.map((item) => (
                        <Link key={item.text} href={"#" + item.id}  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            {item.text}
                        </Link>
                    ))
                }
            </SidebarMenu>
        )
    } 
    else {
        return <SidebarMenu/>
    }
}



export function AppSidebar() {

    const { content_page } = useSidebar()

    return (
        <FadeIn>
            <Sidebar>



                <div className="h-full flex flex-col justify-center overflow-y-scroll no-scrollbar">


                
                    <PageSidebar/>



                </div>



            </Sidebar>
        </FadeIn>
    )
}
