import React, { memo } from 'react';
import { Menu } from '../model/restaurant';
// menu type에서 price빼고 가져오기
interface OwnProps extends Omit<Menu, "price"> {
  showBestMenuName(name: string): string
}
// type OwnProps = Menu & {
//   showBestMenuName(name: string): string
// }
const BestMenu: React.FC<OwnProps> = memo(({ name }) => {
  return (
    <div>
      {name}

    </div>
  );
});

export default BestMenu;