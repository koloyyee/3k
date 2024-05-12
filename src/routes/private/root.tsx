import { Outlet } from "react-router-dom";


export default function PrivateRoot() {
  return (
    <>
    <h1> Hello! </h1>
      <div>
        <Outlet />
      </div>
    </>

  );
}
