import { Outlet } from "react-router-dom";
import AdminSiderBar from "./SideBar";
import AdminHeader from "./Header";

function AdminLayout() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        {/* Admin SideBar */}
        <AdminSiderBar />
        <div className="flex flex-1 flex-col">
          {/* Admin Header */}
          <AdminHeader />
          <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
