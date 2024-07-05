import { Link, Outlet } from "react-router-dom";
import { Button } from "../../components/common/button";


export default function PublicRoot() {
  return (
    <main className="flex flex-col items-center">
      <div className="self-end mr-8 mt-3">
        <Link to="/login">
          <Button> Login / Sign Up</Button>
        </Link>
      </div>
      <h1 className="text-4xl">
        Job Search is{" "}
        <span className="underline  decoration-red-500">hard</span>
        <br />
        Let Us Help You to Draft the Cover Letter
      </h1>
      <p className="underline decoration-amber-400 decoration-2">
        We are still in <strong>prototype</strong> sometimes response might not
        work.
      </p>

      <div className="w-[100vw] md:w-[80vw]">
        <Outlet />
      </div>
    </main>
  );
}
