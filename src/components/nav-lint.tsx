import { getUIView } from "../lib/ui-view";
import { tm } from "../utils/tw-merge";

type NavLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
  activeClassName?: string;
};

function NavLink({ href, children, activeClassName = "active", className, ...restProps }: NavLinkProps) {
  const view = getUIView();
  const isActive = view.includes(href);

  const basePath = window.location.pathname; // "/likelion-react-homework" 포함
  const fullHref = `${basePath}?view=${href}`;

  return (
    <a href={fullHref} className={tm(isActive && activeClassName, className)} aria-current={isActive ? "page" : undefined} {...restProps}>
      {children}
    </a>
  );
}

export default NavLink;
