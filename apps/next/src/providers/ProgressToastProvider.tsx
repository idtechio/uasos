import React, { ReactNode, useCallback, useContext, useState } from "react";

interface ProgressToastContext {
  isProgressToastVisible: boolean;
  actions: { showProgressToast: () => void; hideProgressToast: () => void };
}

export const ProgressToastContext = React.createContext<ProgressToastContext>({
  isProgressToastVisible: false,
  actions: {
    showProgressToast: () => undefined,
    hideProgressToast: () => undefined,
  },
});

export const ProgressToastProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isProgressToastVisible, setIsProgressToastVisible] = useState(false);

  const showProgressToast = useCallback(
    () => setIsProgressToastVisible(true),
    []
  );

  const hideProgressToast = useCallback(
    () => setIsProgressToastVisible(false),
    []
  );

  return (
    <ProgressToastContext.Provider
      value={{
        isProgressToastVisible,
        actions: { showProgressToast, hideProgressToast },
      }}
    >
      {children}
    </ProgressToastContext.Provider>
  );
};

export const useProgressToastContext = () => useContext(ProgressToastContext);
