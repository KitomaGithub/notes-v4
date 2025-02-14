import { useEffect } from "react";
import { Welcome } from "../welcome/welcome";
import { useNavigate } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        navigate("/login");
    }, [])

  return <Welcome />;
}
