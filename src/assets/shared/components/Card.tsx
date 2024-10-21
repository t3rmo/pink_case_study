import { ReactNode } from "react";

interface Props {
  header?: string | ReactNode;
  body?: string | ReactNode;
  footer?: string | ReactNode;
}

export default function Card({ header, body, footer }: Props) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && <div className="card-footer text-muted">{footer}</div>}
    </div>
  );
}
