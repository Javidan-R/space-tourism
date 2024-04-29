import { useCustomButtonstyle } from './button.style';
import { IButtonProps } from './button';
import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Button } from 'antd';
import { useMemo } from 'react';
import classNames from 'classnames';

const ButtonComponent = ({type:variant = 'primary', arrow, size = 'middle', children, className, ...props}:IButtonProps) => {
  const classes = useCustomButtonstyle();

  let buttonSize = '150px';
  let buttonFontSize = '15px';
  
  if (size === 'middle') {
    buttonSize = '120px';
    buttonFontSize = '14px';
  } else if (size === 'small') {
    buttonSize = '80px';
    buttonFontSize = '12px';
  }
  const iconClasses = useMemo(() => (
    classNames(
      {
        [classes.iconRight]:arrow === 'right',
        [classes.iconUp]:arrow === 'up',
        [classes.iconDown]:arrow === 'down'
      }
    )
  ), []);
  return (
    <Button
      {...props}
      className={`${className}  ${variant === 'primary' ? classes.primary : classes.outline} ${classes.button}` }
      style={{ minWidth: buttonSize, fontSize: buttonFontSize }}
    >
      <span className={classes.buttonContent}>
        {children}
      </span>
      {arrow === 'right' && <FaArrowRight className={iconClasses} />}
      {arrow === 'down' && <FaArrowDown className={iconClasses} />}
      {arrow === 'up' && <FaArrowUp className={iconClasses} />}
    </Button>
  );
};

export default ButtonComponent;
