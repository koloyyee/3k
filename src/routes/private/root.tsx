import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../apis/auth-provider";

export default function PrivateRoot() {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { token } = useAuth();
console.log(token)
  if (token) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }

}
