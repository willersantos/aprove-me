import React from "react";
import { IButtonProps } from "../../interfaces/IButtonProps";
import { StyleTextButton } from "../StyleTextButton/StyleTextButton";

export const ReproveButton: React.FC<IButtonProps> = ({
  actionType: actionTypeDefault,
  autoWidth,
  children,
  isDisabled,
  isLoading,
  isOutlined,
  onClick,
  textSize
}) => {
  const actionType = actionTypeDefault ?? "button";

  const loadingStyle = isLoading
    ? "opacity-50 disabled:cursor-wait cursor-wait"
    : "";
  const disabledStyle = isDisabled
    ? "border"
    : isOutlined
    ? "border"
    : "border-0 hover:border";
  const outlinedStyle = {
    button: isOutlined
      ? "disabled:border-gray-1 disabled:bg-transparent bg-transparent hover:bg-black/25 border-red-0"
      : "bg-red-0 hover:bg-red-2 border-transparent hover:border-red-0",
    text: isDisabled
      ? isOutlined
        ? "[&>*]:text-gray-1 [&>*]:hover:text-gray-1"
        : "[&>*]:text-gray-2 [&>*]:hover:text-gray-2"
      : isOutlined
      ? "[&>*]:text-red-0 [&>*]:hover:text-white"
      : "[&>*]:text-white [&>*]:hover:text-red-0"
  };
  const sizeStyle = {
    small: `h-7 rounded-md ${autoWidth ? "px-0.5" : "px-8 w-fit"}`,
    default: `h-9 rounded-lg ${autoWidth ? "px-0.5" : "px-12 w-fit"}`,
    large: `h-11 rounded-lg ${autoWidth ? "px-0.5" : "px-16 w-fit"}`
  };

  return (
    <button
      disabled={isDisabled || isLoading}
      className={`flex items-center justify-center duration-300 disabled:cursor-not-allowed disabled:border-gray-0 disabled:bg-gray-0 [&>*]:duration-300 ${outlinedStyle.button} ${outlinedStyle.text} ${disabledStyle} ${loadingStyle} ${sizeStyle[textSize]}`}
      onClick={onClick}
      type={actionType}
    >
      <StyleTextButton size={textSize}>
        {isLoading ? "Carregando..." : children}
      </StyleTextButton>
    </button>
  );
};
