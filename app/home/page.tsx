'use client';

import { makeStyles } from '@mui/styles';
import NavBar from '@components/Navbar';
import FileExplorer from '@components/FileExplorer';
import Content from '@components/Content';
import RightPanel from '@components/RightPanel';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  appBar: {
    height: 40,
  },
  title: {
    width: '200px',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className="app">
        <FileExplorer />
        <Content />
        <RightPanel />
      </main>
    </div>
  );
}

export default Home;