import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function TooltipWrapper({ children, text, placement = 'bottom' }) {
  if (!text) return children;
  
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip>{text}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}

export default TooltipWrapper;