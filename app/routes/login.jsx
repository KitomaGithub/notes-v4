import LoginPage from "../pages/login";


export function meta() {
  return [
    { title: "Net-Otaku Notes" },
    { name: "A note taking web application", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <LoginPage />;
}
