import Link from "next/link";
import {MouseEvent, ReactNode} from "react";
import {motion} from "framer-motion";
import {Option} from "./nav-item.styles";

interface Props {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  active?: boolean;
  children: ReactNode;
}

const NavItem: React.FC<Props> = ({children, onClick, active}) => {
  return (
    <Link href="#" passHref replace legacyBehavior>
      <Option onClick={onClick} active={active} style={{ position: "relative" }}>
        {children}
      </Option>
    </Link>
  );
};

export default NavItem;
