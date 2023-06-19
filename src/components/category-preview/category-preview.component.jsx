import { Link } from "react-router-dom";

import ProductCart from "../product-card/product-cart.component";

import {
  CategoryPreviewContainer,
  Preview,
  PreviewTitleLink,
} from "./categoy-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <PreviewTitleLink to={title}>{title.toUpperCase()}</PreviewTitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
