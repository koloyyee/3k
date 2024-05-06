import { Outlet } from "react-router-dom";


export default function PrivateRoot() {
  return (
    <>

      <div>
        <Outlet />
      </div>
    </>

  );
}
