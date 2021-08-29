import {createMuiTheme} from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'

const theme = createMuiTheme({
    palette: {
        primary: {
          main:  indigo[500]
        }
        
    }
})

export default theme;