import { useEffect, useState, useCallback } from 'react';

type type = 'info' | 'success' | 'error' | 'warning' | undefined;

interface Toast {
  message: string;
  type: type;
  show: boolean;
}

const useToast = ({ autoClose = true, duration = 3000 } = {}) => {
  const [toast, setToast] = useState<Toast>({
    message: '',
    type: 'info',
    show: false,
  });

  const showToast = useCallback((message: string, type: type) => {
    setToast({ message, type, show: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, show: false }));
  }, []);

  useEffect(() => {
    if (toast.show && autoClose) {
      const timer = setTimeout(hideToast, duration);
      return () => clearTimeout(timer);
    }
  }, [toast, autoClose, duration, hideToast]);

  return { ...toast, showToast, hideToast };
};

export default useToast;
