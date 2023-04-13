'use client'
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaTrash } from 'react-icons/fa'

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-green-500">
          Todo List
        </h1>
        <form onSubmit={handleSubmit} className="flex mt-4">
          <input
            type="text"
            className="flex-1 py-2 px-4 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:border-green-500"
            placeholder="Add a new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 py-2 px-4 rounded-lg bg-yellow-500 text-gray-900 font-semibold focus:outline-none focus:ring focus:border-green-500 hover:bg-yellow-600 transition-all duration-150"
          >
            Add
          </button>
        </form>
        <div className="mt-4">
          <TransitionGroup>
            {todos.map((todo, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <div className="py-2 px-4 mb-2 bg-gray-800 rounded-lg flex justify-between items-center">
                  <span>{todo}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTodo(index)}
                    className="text-red-500 focus:outline-none focus:ring focus:border-green-500 hover:text-red-600 transition-all duration-150"
                  >
                    <FaTrash className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};


