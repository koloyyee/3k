import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { BsDoorOpenFill } from "react-icons/bs";

export function CommonSidebar() {

  const itemGroup = [
    {
      name: "Dashboard",
      href: "#",
      icon: HiChartPie
    },
    {
      name: "Kanban",
      href: "#",
      icon: HiViewBoards
    },
    {
      name: "Inbox",
      href: "#",
      icon: HiInbox
    },
    {
      name: "Settings",
      href: "#",
      icon: HiUser
    },
    {
      name: "Sign Out",
      href: "#",
      icon: BsDoorOpenFill,
    },
  ];

  return (

    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items className="mt-16">
        <Sidebar.ItemGroup>
          {itemGroup.map((item) => {
            return (
              <Sidebar.Item href={item.href} icon={item.icon} label={ item.name === "Inbox" ? 3 : ""}>
                {item.name}
              </Sidebar.Item>
            );
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  );
}