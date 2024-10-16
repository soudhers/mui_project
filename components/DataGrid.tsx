'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem2, TreeItem2Props } from '@mui/x-tree-view/TreeItem2';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { makeStyles } from '@mui/styles';
import colors from '@styles/colors';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 64, // Adjust this value if your NavBar height is different
    backgroundColor: colors.mui_woodside_gray, // Use named color
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '304px',
    zIndex: 1000,
    overflowY: 'hidden', // Disable vertical scrolling
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px',
    wordWrap: 'break-word',
  },
  title: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '0.15',
    padding: '32px 24px 8px 24px',
  },
  treeView: {
    // existing styles
  },
  dataGrid: {
    height: 400,
    width: '100%',
  },
}));

interface DataGridComponentProps {
  tableData: { id: number; [key: string]: any }[];
  columns: GridColDef[];
}

const DataGridComponent: React.FC<DataGridComponentProps> = ({ tableData, columns }) => {
  const classes = useStyles();
  return (
    <div className={classes.dataGrid}>
      <DataGrid rows={tableData} columns={columns} pageSize={5} />
    </div>
  );
};

// Example usage of DataGridComponent within Sidemenu
const Sidemenu: React.FC = () => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 110 },
    // Add more columns as needed
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 35 },
    { id: 2, name: 'Jane Smith', age: 42 },
    // Add more rows as needed
  ];

  return (
    <Box className={classes.container}>
      <div className={classes.title}>Sidemenu</div>
      <RichTreeView>
        {/* TreeView content */}
      </RichTreeView>
      <DataGridComponent tableData={rows} columns={columns} />
    </Box>
  );
};

export default Sidemenu;