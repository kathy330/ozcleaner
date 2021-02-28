import { makeStyles } from '@material-ui/core/styles'

// styles
const navBarStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: 50,
    fontSize: 20,
    fontWeight: 50,
    margin: 10,
  }
}))



const priceStyles = makeStyles({
  root: {
    minWidth: 100,
    display: 'inline-block',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },

})

export default { navBarStyles, priceStyles }