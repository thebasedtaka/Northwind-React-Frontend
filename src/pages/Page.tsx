import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { SearchHeader } from "../components/search-header";
import { Dashboard } from "@/routes/dashboard";

export default function Page({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const isDashboard = pathSegments.length === 0;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        {/* Top Action Bar */}
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur px-4">
          <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {pathSegments.length === 0 ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  pathSegments.map((segment, index) => (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbPage className="line-clamp-1 capitalize">
                        {segment.replace(/-/g, " ")}
                      </BreadcrumbPage>
                      {index < pathSegments.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </BreadcrumbItem>
                  ))
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto">
            <NavActions />
          </div>
        </header>

        {/* Centered Search Header */}
        <SearchHeader className="border-b" />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {children ||
            (isDashboard ? (
              <Dashboard />
            ) : (
              <div className="flex flex-col gap-4">
                <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
                <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
              </div>
            ))}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
