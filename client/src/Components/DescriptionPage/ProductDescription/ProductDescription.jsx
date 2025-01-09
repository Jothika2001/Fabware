import "./ProductDescription.css";

function ProductDescription({data}) {
  const{description}=data
  return (
    <>
      <div className="product-description">
        <div className="product-description-navbar product-description-navbar-remover">
          <a href="" className="blue">
            Description
          </a>
          <a href="">Technical Details</a>
          <a href="">How to use?</a>
          <a href="">Reviews</a>
        </div>
        <div className="hr-line">
          <hr className="hr-1" />
        </div>

        <div className="product-description-container">
          <h2>Product Description</h2>
           <ul  className="mt-5 mx-3">
            {description.map((item, index) => (
              <li key={index} style={{ marginBottom: '20px' }}>
                {item}
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
