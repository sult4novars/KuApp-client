import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
}

export default useToggle;
