import React from 'react';

function AddNewItemForm({ onAddItem }) {
  const [label, setLabel] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (label.trim()) {
      onAddItem(label);
      setLabel('');
    }
  };

  return (
    <div className="new-list-item-form">
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="new-list-form-input">
          New item:
        </label>

        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={event => {
              setLabel(event.target.value)
            }}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;