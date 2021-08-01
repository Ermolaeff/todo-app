import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Todo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const saved: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    };

    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove: boolean = window.confirm(
      "Вы уверены, что хотите удалить этот элемент?"
    );
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onRemove={removeHandler}
          onToggle={toggleHandler}
        />
      </div>
    </>
  );
};

export default App;
