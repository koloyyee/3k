import { CommonCrumbs } from "@/components/common/breadcrumb";
import { Outlet, useLocation } from "react-router-dom";
// import { Button } from "../../components/common/button";


export default function DrafterRoot() {

  const location = useLocation();
  console.log(location)

  return (
    <>
    {/* <CommonCrumbs bgColor="bg-slate-50"/> */}
      <main className="flex flex-col items-center bg-slate-50 h-[calc(100dvh) md:h-screen">
        <div className="self-end mr-8 mt-3">
          {/* <Link to="/login">
          <Button> Login / Sign Up</Button>
        </Link> */}
        </div>
        <h1 className="text-xl md:text-4xl text-center">
          Job Search is{" "}
          <span className="underline  decoration-red-500">hard</span>
          <br />
          Let Us Help You to Draft the Cover Letter
        </h1>
        <p className="underline decoration-amber-400 decoration-2 m-5 md:m-0 ">
          We are still in <strong>prototype</strong> sometimes response might not
          work.
        </p>

        <div className="w-[100vw] md:w-[80vw]">
          <Outlet />
        </div>
      </main>
    </>
  );
}
