/**
 * Lightweight Excel Formula Engine
 * Parses and evaluates simple Excel formulas like =SUM(A1:A3), =AVERAGE(B1:B5), =COUNT(A1:A10)
 */

export interface CellPosition {
  col: number; // 0-indexed (0 = A, 1 = B...)
  row: number; // 0-indexed (0 = 1, 1 = 2...)
}

export function parseCellAddress(addr: string): CellPosition | null {
  const match = addr.trim().toUpperCase().match(/^([A-Z]+)([0-9]+)$/);
  if (!match) return null;
  const colStr = match[1];
  const rowNum = parseInt(match[2], 10) - 1;

  let colNum = 0;
  for (let i = 0; i < colStr.length; i++) {
    colNum = colNum * 26 + (colStr.charCodeAt(i) - 64);
  }
  colNum -= 1; // 0-indexed

  return { col: colNum, row: rowNum };
}

export function evaluateFormula(
  formula: string,
  gridData: Record<string, string>
): string | number {
  if (!formula.startsWith("=")) {
    return formula;
  }

  const clean = formula.substring(1).trim().toUpperCase();

  // Pattern match for SUM, AVERAGE, COUNT
  const funcMatch = clean.match(/^(SUM|AVERAGE|COUNT)\((([A-Z]+[0-9]+):([A-Z]+[0-9]+))\)$/);
  
  if (funcMatch) {
    const funcName = funcMatch[1];
    const startCell = parseCellAddress(funcMatch[3]);
    const endCell = parseCellAddress(funcMatch[4]);

    if (!startCell || !endCell) return "#VALUE!";

    const values: number[] = [];
    const startRow = Math.min(startCell.row, endCell.row);
    const endRow = Math.max(startCell.row, endCell.row);
    const startCol = Math.min(startCell.col, endCell.col);
    const endCol = Math.max(startCell.col, endCell.col);

    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        const key = `${r}-${c}`;
        const val = gridData[key];
        if (val !== undefined && val !== "") {
          const num = parseFloat(val);
          if (!isNaN(num)) {
            values.push(num);
          }
        }
      }
    }

    if (funcName === "SUM") {
      return values.reduce((a, b) => a + b, 0);
    } else if (funcName === "AVERAGE") {
      return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
    } else if (funcName === "COUNT") {
      return values.length;
    }
  }

  // Simple math arithmetic evaluation (e.g., =5+10 or =A1+B1)
  try {
    let replacedExpr = clean;
    // Replace cell references with numbers if present
    replacedExpr = replacedExpr.replace(/([A-Z]+[0-9]+)/g, (match) => {
      const pos = parseCellAddress(match);
      if (!pos) return "0";
      const key = `${pos.row}-${pos.col}`;
      const val = gridData[key] || "0";
      const num = parseFloat(val);
      return isNaN(num) ? "0" : num.toString();
    });

    // Safe eval for simple expressions containing numbers and operators
    if (/^[0-9\.\+\-\*\/\(\)\s]+$/.test(replacedExpr)) {
      // eslint-disable-next-line no-eval
      const result = eval(replacedExpr);
      return typeof result === "number" ? Math.round(result * 100) / 100 : result;
    }
  } catch (err) {
    return "#ERROR!";
  }

  return "#NAME?";
}
