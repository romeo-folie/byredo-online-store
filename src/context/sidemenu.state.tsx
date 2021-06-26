import {createContext, useState} from "react";

interface IMenu {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<IMenu>({isOpen: false, toggleMenu: () => {}});

const SideMenuState: React.FC = ({children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{isOpen, toggleMenu}}>
      {children}
    </MenuContext.Provider>
  );
};

export default SideMenuState;
