import NavLink from "./nav-lint";

const navList = [
  { id: "item-1", content: "1주차", href: "week1" },
  {
    id: "item-2",
    content: "5주차",
    href: "week5",
  },
];

function Nav() {
  return (
    <nav className="nav flex gap-4">
      <h2 className="sr-only">페이지 탐색</h2>
      {navList.map((navItem) => (
        <NavLink key={navItem.id} href={navItem.href}>
          {navItem.content}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
