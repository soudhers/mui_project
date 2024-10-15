'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeItem2, TreeItem2Props } from '@mui/x-tree-view/TreeItem2';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { makeStyles } from '@mui/styles';
import colors from '@styles/colors';
import { useEffect, useState } from 'react';

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
    width: '100%',
    height: '100%',
    paddingLeft: '32px',
    fontSize: '16px',
    color: '#000000',
  },
  /*content: {
    marginLeft: '320px', // Adjust this value if your SideMenu width is different
    padding: '16px',
  },*/
}));

const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'grid',
    label: 'Data Grid',
    children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium123412341234' },
    ],
  },
  {
    id: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { id: 'pickers-community', label: '@mui/x-date-pickers' },
      { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
  {
    id: 'charts',
    label: 'Charts',
    children: [{ id: 'charts-community', label: '@mui/x-charts' }],
  },
  {
    id: 'tree-view',
    label: 'Tree View',
    children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
  },
];

const CustomTreeItem = React.forwardRef(
  (props: TreeItem2Props, ref: React.Ref<HTMLLIElement>) => (
    <TreeItem2
      ref={ref}
      {...props}
      slotProps={{
        label: {
          id: `${props.itemId}-label`,
        },
      }}
    />
  ),
);

CustomTreeItem.displayName = 'CustomTreeItem';

/*const Content: React.FC<{ selectedLabel: string }> = ({ selectedLabel }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <h1>{selectedLabel}</h1>
    </Box>
  );
};*/

const LabelSlotProps: React.FC = () => {
  const classes = useStyles();
  const [selectedLabel, setSelectedLabel] = useState<string>('');

  const handleNodeSelect = (event: React.SyntheticEvent) => {
    const nodeId = (event.target as HTMLElement).getAttribute('data-item-id');
    const selectedItem = MUI_X_PRODUCTS.flatMap(item => [item, ...(item.children || [])])
      .find(item => item.id === nodeId);
    if (selectedItem) {
      setSelectedLabel(selectedItem.label);
    }
  };

  useEffect(() => {
    console.log('Do something after Label has changed', selectedLabel);
  }, [selectedLabel]);

  return (
    <Box className={classes.container}>
      <div className={classes.title}>Folders</div>
      <RichTreeView
        className={classes.treeView}
        items={MUI_X_PRODUCTS}
        defaultExpandedItems={['grid']}
        slots={{ item: CustomTreeItem }}
        onSelect={handleNodeSelect}
      />
    </Box>
  );
};

export default LabelSlotProps;