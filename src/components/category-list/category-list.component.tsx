import {useState, MouseEvent} from "react";
import {Title, List} from "./category-list.styles";
import {default as Item} from "../category-item/category-item.component";

interface Props {
  title: string;
  items: string[];
}
const CategoryList: React.FC<Props> = ({title, items}) => {
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
