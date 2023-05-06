import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export const Todo: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="">
      <h1 className="text-2xl suvo">Subro</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add the task"
        />
        <input type="submit" value="Add task" />
      </form>
    </div>
  );
};
