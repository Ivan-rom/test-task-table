import TableCell from "../TableCell/TableCell";

function TableRow({ rowData, headerInfo }) {
  return (
    <tr className="table__row">
      {rowData.map((cellData, i) => (
        <TableCell
          cellData={cellData.d || cellData}
          colAlign={headerInfo[i].align}
          type={headerInfo[i].type}
          key={headerInfo[i].id + cellData + i}
        />
      ))}
    </tr>
  );
}

export default TableRow;
