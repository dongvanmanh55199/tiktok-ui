import PropTypes from 'prop-types'
import './GlobalStyles.scss'

function GlobalStyles({ children }) {
   return children
}

GlobalStyles.proptypes = {
   children: PropTypes.node.isRequired,
}
export default GlobalStyles
