import * as React from "react";
import type { LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";
import { Todo } from "~/types";

type LoaderData = {
  todo: Todo;
};

export let loader: LoaderFunction = async ({ params: { id } }) => {
  const todoRes = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );
  const todo = await todoRes.json();
  return json({ todo });
};

let TodoPage: React.FC = () => {
  let { todo } = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
};

export default TodoPage;
