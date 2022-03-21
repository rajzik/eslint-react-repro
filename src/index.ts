import { useState } from 'react';

export interface UseHookProps {
  initialValue?: number;
  minValue?: number;
}

export function useHook(props: UseHookProps) {
  const { initialValue, minValue } = props;
  const [internalValue, setValue] = useState<number | '-' | ''>(initialValue ?? minValue ?? 1);

  return { internalValue, setValue };
}
