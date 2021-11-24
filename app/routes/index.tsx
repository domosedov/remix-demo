import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export default function Index() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
