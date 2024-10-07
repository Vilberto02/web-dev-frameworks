import { columns } from "./columns";
import { DataTable } from "./data-table";
import { DataTableItemsProps } from "./DataTableItems.types";

export function DataTableItems(props: DataTableItemsProps) {
  const { element } = props;

  return (
    <div className="py-6">
      <DataTable columns={columns} data={element}></DataTable>
    </div>
  );
}
