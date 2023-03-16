import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
const cx = classNames.bind(styles)

function Button({
   to,
   href,
   onClick,
   children,
   primary,
   outline,
   text,
   disabled,
   rounded,
   className,
   small,
   large,
   leftIcon,
   rightIcon,
   ...passProps
}) {
   let Comp = 'button'
   let props = {
      onClick,
      ...passProps,
   }
   if (to) {
      props.to = to
      Comp = Link
   } else if (href) {
      props.href = href
      Comp = 'a'
   }
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key]
         }
      })
   }
   const classes = cx('wrapper', {
      primary,
      outline,
      text,
      disabled,
      rounded,
      [className]: className,
      small,
      large,
      leftIcon,
      rightIcon,
   })
   return (
      <Comp {...props} className={classes}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   )
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   text: PropTypes.bool,
   disabled: PropTypes.bool,
   rounded: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   onClick: PropTypes.func,
}

export default Button
