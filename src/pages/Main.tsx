import { memo } from 'react';
import { Address, Restaurant } from '../model/restaurant';
interface OwnProps {
  data: Restaurant,
  changeAddress(address: Address): void
}
const Main: React.FC<OwnProps> = memo(({ data }) => {

  return (
    <div>
      {data.name}
    </div>
  );
});

export default Main;