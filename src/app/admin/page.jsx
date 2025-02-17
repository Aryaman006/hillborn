"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Home() {
    const [templates, setTemplates] = useState([]);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null); // For image upload
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [editingTemplate, setEditingTemplate] = useState(null); // Tracks the template being edited
  
    useEffect(() => {
      const fetchTemplates = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/templates`,{
withCredentials: true,
}
          );
          setTemplates(response.data.data);
        } catch (error) {
          console.error("Error fetching templates", error);
          toast.error("Failed to load templates");
        }
      };
      fetchTemplates();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // if (!editingTemplate && (!file || file.type !== "application/zip")) {
      //   toast.error("Please upload a valid ZIP file.");
      //   return;
      // }
  
      // if (!image || !image.type.startsWith("image/")) {
      //   toast.error("Please upload a valid image file.");
      //   return;
      // }
  
      const formData = new FormData();
      if (file) formData.append("zipFile", file);
      if (image) formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("previewUrl", previewUrl);
  
      try {
        if (editingTemplate) {
          await axios.put(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/template/${editingTemplate._id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            }
          );
          toast.success("Template updated successfully");
        } else {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/template`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            }
          );
          toast.success("Template uploaded successfully");
        }
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/templates`
        );
        setTemplates(response.data.data);
        resetForm();
      } catch (error) {
        console.error("Error uploading or updating template", error);
        toast.error(
          editingTemplate
            ? "Failed to update template"
            : "Failed to upload template"
        );
      }
    };
  
    const resetForm = () => {
      setFile(null);
      setImage(null);
      setName("");
      setDescription("");
      setPrice("");
      setPreviewUrl("");
      setEditingTemplate(null);
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/template/${id}`,
          { withCredentials: true }
        );
        setTemplates(templates.filter((template) => template._id !== id));
        toast.success("Template deleted successfully");
      } catch (error) {
        console.error("Error deleting template", error);
        toast.error("Failed to delete template");
      }
    };
  
    const handleEdit = (template) => {
      setEditingTemplate(template);
      setName(template.name);
      setDescription(template.description);
      setPrice(template.price);
      setPreviewUrl(template.previewUrl);
    };
  
    const handleDownload = async (templateId) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/templates/${templateId}/download`,
          { responseType: "blob", withCredentials: true }
        );
        const blob = new Blob([response.data], { type: "application/zip" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${templateId}.zip`;
        link.click();
      } catch (error) {
        toast.error("Error downloading template");
        console.error("Error downloading template", error);
      }
    };
  

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Template Manager</h1>

      {/* Form to add or edit template */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editingTemplate ? "Edit Template" : "Add Template"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Preview URL</label>
          <input
            type="url"
            value={previewUrl}
            onChange={(e) => setPreviewUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Upload ZIP File</label>
          <input
            type="file"
            accept=".zip"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editingTemplate ? "Update Template" : "Upload Template"}
        </button>
      </form>
        {/* Template form here */}

        {/* <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded mt-4"
        >
          {editingTemplate ? "Update Template" : "Upload Template"}
        </button> */}

        {editingTemplate && (
          <button
            onClick={resetForm}
            className="w-full bg-gray-600 text-white py-2 rounded mt-4"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* List of templates */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">All Templates</h2>
        {templates.length === 0 ? (
          <p>No templates available</p>
        ) : (
          templates.map((template) => (
            <div key={template._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{template.name}</h3>
              <p>{template.description}</p>
              <p>Price: ${template.price}</p>
              <a
                href={template.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                View Preview
              </a>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(template)}
                  className="bg-yellow-600 text-white py-1 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(template._id)}
                  className="bg-red-600 text-white py-1 px-4 rounded mr-2"
                >
                  Delete
                </button>
                {/* Download Button */}
                <button
                  onClick={() => handleDownload(template._id)}
                  className="bg-green-600 text-white py-1 px-4 rounded mt-2"
                >
                  Download
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
