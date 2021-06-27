import {useState, MouseEvent} from "react";
import {Title, List} from "./category-list.styles";
import {default as Item} from "../category-item/category-item.component";
import { ICategory } from "../../types";

const CategoryList: React.FC<ICategory> = ({title, items}) => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const {innerText} = e.target as HTMLLIElement;
    if (innerText === activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(innerText);
    }
  };

  return (
    <>
      <Title>{title}</Title>
      <List>
        {items.map((item, idx) => (
          <Item
            key={idx}
            handleClick={handleClick}
            active={item === activeItem}
          >
            {item}
          </Item>
        ))}
      </List>
    </>
  );
};

export default CategoryList;
