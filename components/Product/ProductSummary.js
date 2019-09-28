import { Item, Label } from "semantic-ui-react";
import AddProductToCart from "../Product/AddProductToCart";
function ProductSummary({ name, _id, description, mediaUrl, sku, price }) {
  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image src={mediaUrl} size="medium"></Item.Image>
          <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Description>
              <p>${price}</p>
              <Label>SKU: {sku}</Label>
            </Item.Description>
            <Item.Extra>
              <AddProductToCart productId={_id} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );
}

export default ProductSummary;
