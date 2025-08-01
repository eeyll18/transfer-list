import { useCallback, useState } from "react";
import type { TransferItem } from "../types";

// sol listeden yetkileri seçip sağ listeye aktararak "Editör" rolünün yeteneklerini tanımlar
export const useTransferList = <T extends TransferItem>(
  initialLeftItems: T[],
  initialRightItems: T[]
) => {
  const [leftItems, setLeftItems] = useState<T[]>(initialLeftItems);
  const [rightItems, setRightItems] = useState<T[]>(initialRightItems);

  const [checkedLeft, setCheckedLeft] = useState<Set<string>>(new Set());
  const [checkedRight, setCheckedRight] = useState<Set<string>>(new Set());

  const handleToggle = useCallback((item: T, side: "left" | "right") => {
    const setChecked = side === "left" ? setCheckedLeft : setCheckedRight;
    setChecked((prevChecked) => {
      const newChecked = new Set(prevChecked);
      if (newChecked.has(item.id)) {
        newChecked.delete(item.id);
      } else {
        newChecked.add(item.id);
      }
      return newChecked;
    });
  }, []);

  const moveRight = useCallback(() => {
    const itemsToMove = leftItems.filter((item) => checkedLeft.has(item.id));
    setRightItems((prev) => [...prev, ...itemsToMove]);

    setLeftItems((prev) => prev.filter((item) => !checkedLeft.has(item.id)));
    setCheckedLeft(new Set());
  }, [leftItems, checkedLeft]);

  const moveAllRight = useCallback(() => {
    setRightItems((prev) => [...prev, ...leftItems]);
    setLeftItems([]);
    setCheckedLeft(new Set());
  }, [leftItems]);

  const moveLeft = useCallback(() => {
    const itemsToMove = rightItems.filter((item) => checkedRight.has(item.id));
    setLeftItems((prev) => [...prev, ...itemsToMove]);

    setRightItems((prev) => prev.filter((item) => !checkedRight.has(item.id)));
    setCheckedRight(new Set());
  }, [rightItems, checkedRight]);

  const moveAllLeft = useCallback(() => {
    setLeftItems((prev) => [...prev, ...rightItems]);
    setRightItems([]);
    setCheckedRight(new Set());
  }, [rightItems]);

  return {
    leftItems,
    rightItems,
    checkedLeft,
    checkedRight,
    handleToggle,
    moveRight,
    moveAllRight,
    moveLeft,
    moveAllLeft,
  };
};
