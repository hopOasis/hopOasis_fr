import { GeneratedProductType } from '@/app/types/products';

export interface IVolumeTabs extends Pick<GeneratedProductType, 'volumeLarge' | 'volumeSmall' | 'itemType'> {
  active: number;
  onClick: (val: number) => void;
}
