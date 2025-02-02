import Button from '@mui/material/Button';
// Styles
import { Wrapper } from './CartItem.styles';
//Types
import { CartItemType } from '../../types/menuTypes';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className='information'>
        <p>Price: £{item.price}</p>
        <p>Total: £{(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          data-testid="minus"
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          data-testid="plus"
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.name} />
  </Wrapper>
);

export default CartItem;
