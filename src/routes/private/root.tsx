import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../apis/auth-provider";
import { CommonSidebar } from "@/components/common/common-sidebar";


export default function PrivateRoot() {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { token } = useAuth();
  
  if (token) {
    return (
      <div className="h-screen flex">
        <CommonSidebar />
          <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }

}
