import "./styles/cell-list.css";
import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";
const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id: string) => data[id]);
  });
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellid={cell.id} />
    </Fragment>
  ));
  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellid={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
