import React, { SetStateAction, useMemo, useState } from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import TreeView from "@mui/lab/TreeView";
// import TreeItem from "@mui/lab/TreeItem";
// import Button from "@mui/material/Button";
// type TreeViewCProps = {
//   data: NodesData;
//   setData: React.Dispatch<SetStateAction<NodesData>>;
// };

type NodesData = {
  id: string;
  name: string;
  children?: Array<NodesData>;
};

// const initialData: NodesData = {
//   id: "1",
//   name: "Parent",
//   children: [
//     {
//       id: "2",
//       name: "Child",
//       children: [
//         {
//           id: "3",
//           name: "Grandchild",
//         },
//       ],
//     },
//   ],
// };
// function addDataToNode(data: NodesData, nodeId: string, newData: NodesData) {
//   if (data.id === nodeId) {
//     // If the current node's ID matches the target node ID, add the new data to its children
//     data.children = data.children ? [...data.children, newData] : [newData];
//   } else if (data.children) {
//     // Recursively call the function on the children of the current node
//     data.children = data.children.map((child) =>
//       addDataToNode(child, nodeId, newData)
//     );
//   }
//   return data;
// }

// function TreeViewComponent({ data, setData }: TreeViewCProps) {
//   const handleAddData = (nodeId: string) => {
//     const newData = {
//       id: `${Math.round(Math.random() * 100)}`,
//       name: `Node ${Math.round(Math.random() * 100)}`,
//     };
//     const temp = addDataToNode(data, nodeId, newData);
//     setData((prev: NodesData) => ({ ...temp }));
//   };
//   const TreeData = useMemo(() => {
//     return data;
//   }, [data, setData]);
//   console.log(TreeData);
//   const renderTree = (item: NodesData) => (
//     <>
//       <TreeItem key={item.id} nodeId={item.id} label={item.name}>
//         {Array.isArray(item.children)
//           ? item.children.map((child) => renderTree(child))
//           : null}
//       </TreeItem>
//       <Button onClick={() => handleAddData(item.id)}>
//         Add Data to {item.name}
//       </Button>
//     </>
//   );

//   return <TreeView>{renderTree(TreeData)}</TreeView>;
// }

function TreeViewC() {
  // const [data, setData] = useState<NodesData>(initialData);

  return <></>;
}

export default TreeViewC;
