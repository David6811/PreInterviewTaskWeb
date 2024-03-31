// useFactorsState.ts
import { useState } from 'react';

export function useFactorsState(initialValue: { id: number; name: string }) {
  const [value, setValue] = useState(initialValue);

  function updateValue(newValue: { id: number; name: string }) {
    setValue(newValue);
  }

  return [value, updateValue] as const;
}
