import "./ProductDescription.css";
const ProductDescription = ({
  description,
}: {
  description: string | TrustedHTML;
}) => {
  return (
    <div
      className="mt-12 description_container"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default ProductDescription;
