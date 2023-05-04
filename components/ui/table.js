import { useMantineTheme } from "@mantine/core";
import { P } from "./type";

const TableHeaderCell = ({ children, icon, alignItems }) => {
    console.log('alignItems', alignItems)
  const theme = useMantineTheme();
  return (
    <th>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: alignItems?alignItems:"flex-start",
          
        }}
      >
        
        <P color={0}>{children}</P>
        {icon}
      </div>
    </th>
  );
};

export const DataTableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <TableHeaderCell
            key={col.key}
            icon={col.icon}
            alignItems={col.alignItems}
          >
            {col.label}
          </TableHeaderCell>
        ))}
      </tr>
    </thead>
  );
};
