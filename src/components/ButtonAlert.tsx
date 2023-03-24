import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "success" | "link";
  onClick: () => void;
}

const ButtonAlert = ({ children, onClick, color = "primary" }: Props) => {
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <div className={"alert alert-dismissable fade show alert-" + color}>
        {children}

        <button
          className="btn btn-close btn"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <button className="btn btn-primary" onClick={onClick}>
        Alert Click
      </button>
    </>
  );
};

export default ButtonAlert;
