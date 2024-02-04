import React, { useState } from "react";

const getRandomColor = () => {
  const colors = [
    "#EF4444",
    "#F59E0B",
    "#10B981",
    "#3B82F6",
    "#8B5CF6",
    "#DC2626",
    "#F97316",
    "",
    "",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomRot = () => {
  const rotations = [0, 90, 180, 270];
  return rotations[Math.floor(Math.random() * rotations.length)];
};

const Art = () => {
  const [gridState, setGridState] = useState(
    Array(25)
      .fill()
      .map(() => ({ rotation: getRandomRot(), color: getRandomColor() }))
  );
  const rotateAndChangeColor = (index) => {
    setGridState((prevGridState) => {
      const newGridState = [...prevGridState];
      newGridState[index] = {
        rotation: getRandomRot(),
        color: getRandomColor(),
      };
      return newGridState;
    });
  };
  const [showHelp, setShowHelp] = useState(false);


  const generateGrid = () => {
    setGridState(() => {
      const newGridState = Array(25)
        .fill()
        .map(() => ({ rotation: getRandomRot(), color: getRandomColor() }));
      return newGridState;
    });
  };

  const handleRightClick = (e, index) => {
    e.preventDefault();
    setGridState((prevGridState) => {
      const newGridState = [...prevGridState];
      newGridState[index] = {
        rotation: getRandomRot(),
        color: "",
      };
      return newGridState;
    });
  };

  const handleHelpHover = () => {
    setShowHelp(true);
  };
  const handleHelpLeave = () => {
    setShowHelp(false);
  };

  return (
    <div className="flex flex-col gap-2 justify-normal">
      <div className="grid grid-cols-5 gap-2 p-4 items-center">
        {gridState.map((item, index) => (
          <div
            key={index}
            onClick={() => rotateAndChangeColor(index)}
            onContextMenu={(e) => handleRightClick(e, index)}
            style={{
              transform: `rotate(${item.rotation}deg)`,
              backgroundColor: item.color,
            }}
            className={`${item.color === "#10B981"? 'leaf': 'petal'} transform transition-all duration-300 hover:rotate-180 cursor-pointer`}></div>
        ))}
        {showHelp && (
          <div
            className={`p-2 bg-gray-700 text-white rounded-md opacity-80 absolute ml-10 w-`}>
            Click to change. Right click to erase
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div
            className="cursor-pointer items-center m-auto rounded-md p-1 text-slate-500"
            onClick={() => generateGrid()}>
            [ Generate new garden ]
          </div>
          <div
            onMouseEnter={handleHelpHover}
            onMouseLeave={handleHelpLeave}
            className="p-1 text-slate-500 rounded-md cursor-pointer">
            <span>[ </span>
            <span className="text-orange-500 text-bold">?</span>
            <span> ]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
