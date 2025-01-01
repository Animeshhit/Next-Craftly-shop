export const ProductsQuery = `*[_type == "products"] {
  _id,
  name,
  description,
  price,
  discount,
  "productImage": productImage.asset->url,
  "productImages": productImages[].asset->url,
  "categories": categories[]->title,
  productUniqueId,
  isFeatured,
  isBestSeller,
  reviews[] {
    reviewer,
    rating,
    comment
  },
  isAvailable,
  sold,
  tags,
  "slug":slug.current,
  createdAt,
  updatedAt
}
`;

export const GetAProductQuery = (id: string) =>
  `*[_type == "products" && _id == "${id}"][0] {
  _id,
  name,
  description,
  price,
  discount,
  "productImage": productImage.asset->url,
  "productImages": productImages[].asset->url,
  "categories": categories[]->title,
  productUniqueId,
  isFeatured,
  isBestSeller,
  reviews[] {
    reviewer,
    rating,
    comment
  },
  isAvailable,
  sold,
  tags,
  createdAt,
  updatedAt
}
`;

export const searchAProducutQuery = (
  searchString: string
) => `*[_type == "products" && (name match "${searchString}" || "${searchString}" in tags[])] {
  _id,
  name,
}
`;
