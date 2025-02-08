import { useEffect, useRef, useState } from 'react';

interface DimensionObject {
  width: number;
  height: number;
}

export function useResizeObserver<T extends HTMLElement>(): [
  React.RefObject<T>,
  DimensionObject
] {
  const [dimensions, setDimensions] = useState<DimensionObject>({
    width: 0,
    height: 0,
  });
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      });
    });

    resizeObserver.observe(target);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [targetRef, dimensions];
}
