type ToastType = {
  id: string;
  title: string;
  description?: string;
  action?: any;
  [key: string]: any;
};

import { useCallback } from "react";

export function useToast() {
  // Dummy implementation for build success. Replace with your actual toast logic.
  const toast = useCallback((options: { title: string; description?: string; variant?: string }) => {
    if (typeof window !== "undefined") {
      alert(`${options.title}\n${options.description || ""}`);
    }
  }, []);

  // Provide a typed empty array for toasts to satisfy the Toaster component
  const toasts: ToastType[] = [];
  return { toast, toasts };
}
