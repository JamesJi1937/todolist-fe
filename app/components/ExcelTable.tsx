import React, { useState, useMemo } from 'react';

interface ExcelTableProps {
  rows: number;
  columns: number;
}

export default function ExcelTable({ rows, columns }: ExcelTableProps) {
  // Initialize matrix with 0s
  const initialMatrix = Array.from({ length: rows }, () => 
    Array.from({ length: columns }, () => 0)
  );
  
  const [matrix, setMatrix] = useState<number[][]>(initialMatrix);

  // Handle cell value change
  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    // Only allow numbers
    const numValue = value === '' ? 0 : Number(value);
    if (isNaN(numValue)) return;

    const newMatrix = matrix.map((row, rIdx) => 
      row.map((cell, cIdx) => 
        rIdx === rowIndex && cIdx === colIndex ? numValue : cell
      )
    );
    setMatrix(newMatrix);
  };

  // Calculate row sums
  const rowSums = useMemo(() => 
    matrix.map(row => row.reduce((sum, cell) => sum + cell, 0))
  , [matrix]);

  // Calculate column sums
  const columnSums = useMemo(() => {
    const sums = Array.from({ length: columns }, () => 0);
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
        sums[col] += matrix[row][col];
      }
    }
    return sums;
  }, [matrix]);

  // Calculate total sum
  const totalSum = useMemo(() => 
    rowSums.reduce((sum, rowSum) => sum + rowSum, 0)
  , [rowSums]);

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-50">
            {/* Empty top-left cell */}
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500 w-16"></th>
            {/* Column headers */}
            {Array.from({ length: columns }, (_, idx) => (
              <th key={idx} className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500">
                列 {idx + 1}
              </th>
            ))}
            {/* Row sum header */}
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-500 bg-blue-50">
              行和
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows */}
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {/* Row header */}
              <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50">
                行 {rowIndex + 1}
              </td>
              {/* Data cells */}
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-300">
                  <input
                    type="number"
                    value={cell || ''}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    className="w-full px-3 py-2 border-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                    min="0"
                  />
                </td>
              ))}
              {/* Row sum */}
              <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 bg-blue-50">
                {rowSums[rowIndex]}
              </td>
            </tr>
          ))}
          {/* Total row */}
          <tr className="bg-gray-100 font-medium">
            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
              列和
            </td>
            {/* Column sums */}
            {columnSums.map((sum, colIndex) => (
              <td key={colIndex} className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                {sum}
              </td>
            ))}
            {/* Grand total */}
            <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 bg-blue-100">
              {totalSum}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}