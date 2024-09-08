import { Breadcrumb } from "flowbite-react";
import { HiCheck, HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export function CommonCrumbs({ bgColor }: {bgColor:string}) {
  const location = useLocation();
  const current = location.pathname.replace("/", "");

  return (
    <nav className={bgColor}>
      <Breadcrumb>
        <Breadcrumb.Item href="/" icon={HiHome}>Home</Breadcrumb.Item>
        <Breadcrumb.Item icon={HiCheck}>{current}</Breadcrumb.Item>
      </Breadcrumb>
    </nav>
  );
}