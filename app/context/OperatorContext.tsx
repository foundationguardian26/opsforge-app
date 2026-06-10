'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface ActiveOperator {
  id: string;
  full_name: string;
  role: string;
}

interface OperatorContextValue {
  activeOperator: ActiveOperator | null;
  setActiveOperator: (operator: ActiveOperator | null) => void;
}

const OperatorContext = createContext<OperatorContextValue | null>(null);

export function OperatorProvider({ children }: { children: ReactNode }) {
  const [activeOperator, setActiveOperator] = useState<ActiveOperator | null>(null);

  return (
    <OperatorContext.Provider value={{ activeOperator, setActiveOperator }}>
      {children}
    </OperatorContext.Provider>
  );
}

export function useOperator() {
  const ctx = useContext(OperatorContext);
  if (!ctx) throw new Error('useOperator must be used within OperatorProvider');
  return ctx;
}
