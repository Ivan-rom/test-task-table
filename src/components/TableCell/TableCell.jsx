import { useEffect, useState } from "react";

function TableCell({ cellData, type, colAlign }) {
  const [align, setAlign] = useState("");
  const [data, setData] = useState(cellData);

  useEffect(() => {
    if (colAlign) {
      setAlign(colAlign);
    } else if (type === "float" || type === "number") {
      setAlign("right");
    } else if (type === "boolean") {
      setAlign("center");
    } else {
      setAlign("left");
    }
    if (type === "boolean") {
      setData(cellData ? "Завершен" : "В процессе");
    }
  }, [type, colAlign]);

  return (
    <>
      <td className={`table__cell ${align}`}>{data}</td>
    </>
  );
}

export default TableCell;
