import Link from "next/link";

type NavbarMenuItemType = {
  id: string;
  linkUrl: string;
  labelMenu: string;
};
export const NavbarMenuItem = ({
  id,
  linkUrl,
  labelMenu,
}: NavbarMenuItemType) => {
  return (
    <li key={id}>
      <Link
        href={linkUrl}
        className="nav-link text-[#030637] hover:text-[#3C0753] hover:underline decoration-[#910A67] underline-offset-8"
      >
        {labelMenu}
      </Link>
    </li>
  );
};
