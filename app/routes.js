import { index, route } from "@react-router/dev/routes";
import { Link } from "react-router";

export default [
    index("routes/start.jsx"),
    route("/login", "routes/login.jsx"),
    route("test", "routes/test.jsx", [
        route(":testId", "routes/testDynamic.jsx")
    ]),
];
