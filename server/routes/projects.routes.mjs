import { Router } from "express";
import { getAllProjects, getProjectById, getProjectFile, getProjectFileStructure } from "../controllers/projects.controller.mjs";

const ProjectRouter = Router();

ProjectRouter.get("/all", getAllProjects);
ProjectRouter.post("/:projectName", getProjectById);
ProjectRouter.post("/:projectName/structure", getProjectFileStructure);
ProjectRouter.post("/:projectName/code", getProjectFile);

export default ProjectRouter;