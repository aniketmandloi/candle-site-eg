import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'wick-hour-bag';

function readBag() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

export function useBag() {
  const [items, setItems] = useState(readBag);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      return;
    }
  }, [items]);

  const add = useCallback((scent) => {
    setItems((current) => [...current, { id: scent.id, name: scent.name, price: scent.price }]);
  }, []);

  return { items, add };
}
