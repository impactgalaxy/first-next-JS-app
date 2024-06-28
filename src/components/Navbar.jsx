import Link from "next/link";

export default function Navbar() {
  const navElement = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <div className="space-x-6 p-4 bg-slate-400">
      {navElement.map((nav) => (
        <Link href={nav.path}>{nav.title}</Link>
      ))}
    </div>
  );
}
