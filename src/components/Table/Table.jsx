import HeaderCell from "../HeaderCell/HeaderCell";
import TableRow from "../TableRow/TableRow";

function Table({ table }) {
  return (
    <table className="table">
      <tbody>
        <tr className="table__header">
          {table.header.map((data) => (
            <HeaderCell data={data} key={data.id} />
          ))}
        </tr>
        {table.data.map((row, i) => (
          <TableRow rowData={row} key={i} headerInfo={table.header} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
