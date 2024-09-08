import { MenuCards } from "@/components/root/menu-cards";

export function PublicRoot() {



  return (
    <main className="h-[calc(100dvh) md:h-screen">
      <div className="h-[50vh] grid">
        <h1 className="place-content-center text-center text-blue-50" > 3K - Find Your Everyday Utility Helpers</h1>
      </div>
      <MenuCards />
    </main>
  );

}