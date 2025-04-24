import React, { useEffect, useState } from "react";
import axios from "axios";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState("featureA");
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  const fetchFeatureCards = async (featureKey) => {
    try {
      const response = await axios.get(`/api/get-feature/${featureKey}`);
      setCards(response.data.features);
    } catch (error) {
      console.error("Failed to fetch features:", error);
    }
  };

  useEffect(() => {
    fetchFeatureCards(activeFeature);
  }, [activeFeature]);

  const handleFeatureClick = (featureKey) => {
    setActiveFeature(featureKey);
    setIsModalOpen(true); // Open modal when tab is clicked
  };

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/insert-feature", {
        FeaturesId: activeFeature,
        ...form,
      });
      setForm({ title: "", description: "", image: "", price: "" });
      setIsModalOpen(false); // Close modal
      fetchFeatureCards(activeFeature); // Refresh cards
    } catch (error) {
      console.error("Failed to insert feature:", error);
    }
  };

  return (
    <div className="p-6">
      {/* Feature Tabs */}
      <div className="flex space-x-4 mb-6">
        {["featureA", "featureB", "featureC", "featureD"].map((featureKey) => (
          <button
            key={featureKey}
            onClick={() => handleFeatureClick(featureKey)}
            className={`px-4 py-2 rounded-lg ${
              activeFeature === featureKey ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {featureKey.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl mb-4 font-semibold">Add Feature to {activeFeature.toUpperCase()}</h2>
            <form className="space-y-2" onSubmit={handleInsert}>
              <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="block w-full border p-2"
              />
              <input
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="block w-full border p-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="block w-full border p-2"
              />
              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="block w-full border p-2"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                Add Feature
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Render Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {cards.map((card) => (
          <div key={card._id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p>{card.description}</p>
            <img src={card.image} alt={card.title} className="mt-2 w-full h-32 object-cover" />
            <p className="text-green-600 font-semibold mt-1">${card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
