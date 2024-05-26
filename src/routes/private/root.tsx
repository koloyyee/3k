import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../apis/auth-provider";

export default function PrivateRoot() {
  const { token } = useAuth();

  console.log(token);

  if (token) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }

  // return (  <div>
  //   <Outlet />
  // </div>);
}
