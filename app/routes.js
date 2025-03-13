import { index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/start.jsx"),
    route("/login", "routes/login.jsx"),
    route("test", "routes/test.jsx", [
        route(":testId", "routes/testDynamic.jsx")
    ]),
    layout("layouts/notes/index.jsx", [
        route("/notes", "routes/notes.jsx")
    ])
];