import React, { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handlePress = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        value={title}
        onChange={e => handleChange(e)}
        onKeyPress={e => handlePress(e)}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
