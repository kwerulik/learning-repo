import PropTypes from "prop-types";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  
  const classes = className("flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-600": primary,
    "border-gray-500 bg-gray-600": secondary,
    "border-yellow-500 bg-yellow-600": warning,
    "border-green-500 bg-green-600": success,
    "border-red-500 bg-red-600": danger,
    "bg-white": outline,
    "rounded-full": rounded,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-yellow-900": outline && warning,
    "text-green-500": outline && success,
    "text-red-500": outline && danger,
    'text-white': !outline,
  });

  return (
    <div>
      <button className={classes} onClick={rest.onClick}>{children}</button>
    </div>
  );
}

Button.PropTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }) => {

    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning)+ Number(!!danger);
    if(count > 1) return Error("Maksymalna ilość wariantów to 1");
  }
};


export default Button;
