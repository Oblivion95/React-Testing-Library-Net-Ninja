import { useCallback, useMemo, useState } from "react";

const useExpanded = () => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return value;
};

export default useExpanded;
