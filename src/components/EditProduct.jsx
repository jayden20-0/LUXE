import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function fetchProduct() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);
    setImageUrl(data.image_url);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  async function updateProduct() {
    await supabase
      .from("products")
      .update({
        title,
        description,
        price,
        image_url: imageUrl,
      })
      .eq("id", id);

    navigate("/");
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Edit Product</h1>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          value={imageUrl}
          onChange={(e) =>
            setImageUrl(e.target.value)
          }
        />

        <button
          className="submit-btn"
          onClick={updateProduct}
        >
          Update Product
        </button>
      </div>
    </div>
  );
}

export default EditProduct;