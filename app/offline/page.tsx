"use client";


import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  // Define grid dimensions
  const numRows = 11;
  const numCols = 6;

  // Initialize grid state with empty cells
  const [grid, setGrid] = useState<string[][]>(Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => "")));

  // Function to handle cell click
  const handleCellClick = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = "X"; 
    setGrid(newGrid);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-6 gap-0.5 h-screen pt-20 pb-2">
        {grid.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="border border-1 w-14 h-14 flex items-center justify-center"
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default page;
