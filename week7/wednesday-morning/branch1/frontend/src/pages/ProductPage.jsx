import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.token : null;

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to delete product: ${errorText}`);
      }
      console.log("Product deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const onDeleteClick = (productId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    deleteProduct(productId);
  };

  return (
    <div className="product-preview">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>{product.title}</h2>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock Quantity: {product.stockQuantity}</p>
          <h3>Supplier Information</h3>
          <p>Name: {product.supplier.name}</p>
          <p>Email: {product.supplier.contactEmail}</p>
          <p>Phone: {product.supplier.contactPhone}</p>
          {product.supplier.rating && <p>Rating: {product.supplier.rating}/5</p>}

          {isAuthenticated && (
            <>
              <button onClick={() => onDeleteClick(product._id)}>delete</button>
              <button onClick={() => navigate(`/edit-product/${product._id}`)}>
                edit
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductPage;