import Button from '@mui/material/Button';
// Types
import { CartItemType } from '../../types/menuTypes';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void; //this is not returning anything so it will return void
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => ( //this is a react functional component
  <Wrapper>
    <img src={item.image} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h3>£{item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
