import useToast from "@/hooks/useToast";
import styled from "styled-components";

const toastColors = {
  info: { background: "#007BFF", color: "#FFFFFF" },
  success: { background: "#28A745", color: "#FFFFFF" },
  error: { background: "#DC3545", color: "#FFFFFF" },
  warning: { background: "#FFC107", color: "#212529" },
};

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 0;
  transform: translateX(-50%);
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${({ type }) => toastColors[type].background};
  color: ${({ type }) => toastColors[type].color};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 20px;
  cursor: pointer;
`;

const Toast = ({ message, type = "info", show }) => {
  return (
    <ToastWrapper type={type} show={show}>
      {message}
    </ToastWrapper>
  );
};

export default Toast;