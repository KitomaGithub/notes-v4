import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("test", "routes/test.jsx", [
        route(":testId", "routes/testDynamic.jsx")
    ]),
];
