import Link from "next/link";
import {MouseEvent} from "react";
import {Option} from "./nav-item.styles";

interface Props {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  active: boolean;
}

const NavItem: React.FC<Props> = ({children, onClick, active}) => {
  return (
    <Link href="#" passHref replace>
      <Option onClick={onClick} active={active}>
        {children}
      </Option>
    </Link>
  );
};

export default NavItem;
