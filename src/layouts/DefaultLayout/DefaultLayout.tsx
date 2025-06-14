import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { ReactNode } from "react";
import { AppSidebar } from "../components/app-sidebar";
import HeaderLayout from "../components/HeaderLayout";
// import FooterLayout from "../components/FooterLayout";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-primary justify-between items-center px-4">
          <div className="flex items-center gap-2 h-14 shrink-0 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
            <SidebarTrigger className="-ml-1 shadow-none" />
          </div>
          <HeaderLayout />
        </header>
        <div className="w-full h-full px-4 py-[0.5px] pb-2 bg-secondary">{children}</div>
        {/* <FooterLayout /> */}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DefaultLayout;
