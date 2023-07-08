import { FC, memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';
import { CartItemType } from '../../store/cart/cart.types';


type CheckoutItemProps = {
  cartItem: CartItemType;
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = useCallback(() =>
    dispatch(clearItemFromCart(cartItems, cartItem)), [cartItems, cartItem, dispatch]);

  const addItemHandler = useCallback(() => dispatch(addItemToCart(cartItems, cartItem)), [cartItems, cartItem, dispatch]);

  const removeItemHandler = useCallback(() =>
    dispatch(removeItemFromCart(cartItems, cartItem)), [cartItems, cartItem, dispatch]);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
