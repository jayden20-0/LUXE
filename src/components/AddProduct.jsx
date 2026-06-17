import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function addProduct() {
    const { error } = await supabase
      .from("products")
      .insert({
        title,
        description,
        price,
        image_url: imageUrl,
      });

    if (error) {
      alert("Error");
      return;
    }

    navigate("/");
  }

  return (
    <div className="form-page">

      <div className="form-card">

        <h1>Add Product</h1>

        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) =>
            setImageUrl(e.target.value)
          }
        />

        <button
          className="submit-btn"
          onClick={addProduct}
        >
          Create Product
        </button>

      </div>

    </div>
  );
}

export default AddProduct;