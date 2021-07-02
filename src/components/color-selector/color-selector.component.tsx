import {useState, MouseEvent} from "react";
import ColoredCircle from "../colored-circle/colored-circle.component";

const ColorSelector: React.FC<{colors: string[]}> = ({colors}) => {
  const [selectedColor, setSelectedColor] = useState<string>("#d6cf86");

  const handleClick = (e: MouseEvent<HTMLDivElement>, color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      {colors.map((color) => (
        <ColoredCircle
          color={color}
          active={selectedColor === color}
          key={color}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default ColorSelector;
