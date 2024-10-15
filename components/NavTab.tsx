import { makeStyles } from "@mui/styles";
import colors from "@styles/colors";

interface NavTabProps {
  title: string;
}

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
  },
  tabTitleContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
    paddingBottom: 9,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    display: 'inline-flex',
  },
  tabTitle: {
    color: colors.mui_woodside_white,
    fontSize: 15,
    fontWeight: 500,
    textTransform: 'capitalize',
    letterSpacing: 0.46,
    wordWrap: 'break-word'
  }
}));

const NavTab = ({title}: NavTabProps) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.tabTitleContainer}>
        <div className={classes.tabTitle}>{title}</div>
      </div>
    </div>
  )
}

export default NavTab