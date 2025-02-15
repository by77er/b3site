import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/index.tsx", [
        index("pages/home.tsx"),
        route("directions", "pages/directions.tsx"),
        route("schedule", "pages/schedule.tsx"),
        route("tos-privacy", "pages/tos.tsx"),
    ])
] satisfies RouteConfig;
