import {useState, MouseEvent} from "react";
import {Title, List} from "./category-list.styles";
import {default as Item} from "../category-item/category-item.component";
import {ICategory} from "../../types";
import {
  SET_SUB_MENU_OPTION,
  TOGGLE_SUBMENU,
  TOGGLE_MENU,
  useNavState,
} from "../../context/nav.state";

const CategoryList: React.FC<ICategory> = ({title, items}) => {
  const {state, dispatch} = useNavState();

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const {innerText} = e.target as HTMLLIElement;
    dispatch({type: SET_SUB_MENU_OPTION, payload: innerText});
    dispatch({type: TOGGLE_MENU});
    dispatch({type: TOGGLE_SUBMENU});
  };

  return (
    <>
      <Title>{title}</Title>
      <List>
        {items.map((item, idx) => (
          <Item
            key={idx}
            handleClick={handleClick}
            active={item === state.subMenuOption}
          >
            {item}
          </Item>
        ))}
      </List>
    </>
  );
};

export default CategoryList;
