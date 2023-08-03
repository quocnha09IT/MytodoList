import { JobController } from "./controller/JobController"

export const Routes = [{
    method: "get",
    route: "/job",
    controller: JobController,
    action: "all"
}, {
    method: "get",
    route: "/job/:id",
    controller: JobController,
    action: "one"
}, {
    method: "post",
    route: "/job",
    controller: JobController,
    action: "save"
}, {
    method: "delete",
    route: "/job/:id",
    controller: JobController,
    action: "remove"
},{
    method: "put",
    route: "/job/:id",
    controller: JobController,
    action: "update"
},{
    method: "get",
    route: "/ListJob",
    controller: JobController,
    action: "page"
}]