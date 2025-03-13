import NotesDashboard from "../pages/notes_dashboard";

export function meta() {
  return [
    { title: "Net-Otaku Notes" },
    { name: "A note taking web application", content: "Welcome to React Router!" },
  ];
}

export default function NotesPage() {
  return <NotesDashboard />;
}
