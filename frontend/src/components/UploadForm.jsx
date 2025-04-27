import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [photo, setPhoto] = useState(null);
  const API_URL = "http://127.0.0.1:8000/api/upload/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please select a photo before uploading.");
      return;
    }
    const formData = new FormData();
    formData.append("photo", photo);

    try {
      const { data } = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      localStorage.setItem("suggestions", JSON.stringify(data.suggestions));
      window.location.href = "/result";
    } catch (err) {
      console.error(err);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Upload & Get Suggestions
      </button>
    </form>
  );
}
