import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"
 
export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen h-screen overflow-x-hidden">
        <SidebarTrigger />
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}