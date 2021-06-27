import {MouseEvent} from "react";
import {Item} from "./category-item.styles";

interface Props {
  handleClick: (e: MouseEvent<HTMLLIElement>) => void;
  active: boolean;
}

const CategoryItem: React.FC<Props> = ({children, active, handleClick}) => {
  return (
    <Item onClick={handleClick} active={active}>
      {children}
    </Item>
  );
};

export default CategoryItem;
