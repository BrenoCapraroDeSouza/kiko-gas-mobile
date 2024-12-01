export type CylinderCardStatus = 'in-use' | 'replenishment';

export interface CylinderCardProps {
  status: CylinderCardStatus;
  name: string;
  description: string;
  tare: number;
}

export interface CylinderCardContainerStyles {
  isReplenishment: boolean;
}
