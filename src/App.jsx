import React, { useState } from "react";
import "./App.css";
import CategoryStrip from "./components/CategoryStrip";
import TopDisplay from "./components/TopDisplay";
import Modal from "./components/Modal";
import menuData from "./assets/menu.json";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuData[0]);
  const [modalContent, setModalContent] = useState(null);

  const handleCategorySelect = (category) => setSelectedCategory(category);

  const handleChildClick = (child) => {
    if (child.children && child.children.length) {
      setModalContent(child.children);
    }
  };

  return (
    <div className="app">
      <div className="top-display">
        {selectedCategory && (
          <TopDisplay
            childrenData={selectedCategory.children}
            onChildClick={handleChildClick}
          />
        )}
      </div>

      <div className="bottom-strip">
        <CategoryStrip
          categories={menuData}
          onCategorySelect={handleCategorySelect}
        />
      </div>

      {modalContent && (
        <Modal content={modalContent} onClose={() => setModalContent(null)} />
      )}
    </div>
  );
};

export default App;
