import { Test } from "../pages/test";

export function meta() {
  return [
    { title: "Test" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function TestPage() {
  return <Test />;
}
