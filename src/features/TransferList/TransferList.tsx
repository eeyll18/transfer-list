import type React from "react";
import type { TransferItem } from "./types";
import { useTransferList } from "./hooks/useTransferList";
import { ListPanel } from "./components/ListPanel";
import { ControlButton } from "./components/ControlButton";
import { Icon } from "../../components/ui";

interface TransferListProps {
  initialLeftItems: TransferItem[];
  initialRightItems: TransferItem[];
  leftTitle?: string;
  rightTitle?: string;
}


export const TransferList: React.FC<TransferListProps> = ({
  initialLeftItems,
  initialRightItems,
  leftTitle = "Mevcut Öğeler",
  rightTitle = "Seçili Öğeler",
}) => {
  const {
    leftItems,
    rightItems,
    checkedLeft,
    checkedRight,
    handleToggle,
    moveRight,
    moveAllRight,
    moveLeft,
    moveAllLeft,
  } = useTransferList(initialLeftItems, initialRightItems);

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-4 lg:gap-6 p-4">
      <ListPanel
        title={leftTitle}
        items={leftItems}
        checkedItems={checkedLeft}
        onToggle={handleToggle}
        side="left"
      />

      <div className="flex flex-row lg:flex-col justify-center gap-2 my-4 lg:my-0">
        <ControlButton
          onClick={moveAllRight}
          disabled={leftItems.length === 0}
          aria-label="Hepsini sağa taşı"
        >
          <span className="hidden lg:inline">»</span>
          <span className="lg:hidden flex items-center gap-1">
            <Icon name="double-arrow-down" />
          </span>
        </ControlButton>
        <ControlButton
          onClick={moveRight}
          disabled={checkedLeft.size === 0}
          aria-label="Seçilenleri sağa taşı"
        >
          <span className="hidden lg:inline">{">"}</span>
          <span className="lg:hidden">
            <Icon name="arrow-down" />
          </span>
        </ControlButton>
        <ControlButton
          onClick={moveLeft}
          disabled={checkedRight.size === 0}
          aria-label="Seçilenleri sola taşı"
        >
          <span className="hidden lg:inline">{"<"}</span>
          <span className="lg:hidden">
            <Icon name="arrow-up" />
          </span>
        </ControlButton>
        <ControlButton
          onClick={moveAllLeft}
          disabled={rightItems.length === 0}
          aria-label="Hepsini sola taşı"
        >
          <span className="hidden lg:inline">«</span>
          <span className="lg:hidden">
            <Icon name="double-arrow-up" />
          </span>
        </ControlButton>
      </div>

      <ListPanel
        title={rightTitle}
        items={rightItems}
        checkedItems={checkedRight}
        onToggle={handleToggle}
        side="right"
      />
    </div>
  );
};
