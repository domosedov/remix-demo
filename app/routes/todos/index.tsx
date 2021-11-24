import * as React from "react";
import { useLoaderData, json, Link } from "remix";
import type { LoaderFunction } from "remix";
import { Todo } from "~/types";

type LoaderData = { todos: Todo[] };

export const loader: LoaderFunction = async () => {
  const todosReq = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return json({
    todos: await todosReq.json(),
  });
};

const Todos: React.FC = () => {
  const { todos } = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link to={`${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
