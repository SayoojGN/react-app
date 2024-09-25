import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

const Alert = ({children, onClick} : Props) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button type="button" className="btn-close" onClick={onClick} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert;