const ProjectModel = require("../models/project-model.js");
const projectService = require("../services/project-service.js");

class ProjectController {
  async createProject(req, res, next) {
    try {
      const { title, userId } = req.body;
      const idPr = await projectService.createProject(title, userId);
      console.log(idPr)
      return res.json(idPr);
    } catch (e) {
      next(e);
    }
  }

  async updateProject(req, res, next) {
    try {
      const formData = req.body
      const imageName = formData.img
      const basePath = `${req.protocol}://${req.get('host')}/public/${imageName}`
      await projectService.updDataProject(formData.projectId, formData.title, basePath, formData.state);
      return res.json("success");
    } catch (e) {
      next(e);
    }
  }

  async getProject(req, res, next) {
    try {
      const projectId = req.params.id;
      const dataProj = await projectService.getOneProject(projectId);
      return res.json(dataProj);
    } catch (e) {
      next(e);
    }
  }

  async getAllProjects(req, res, next) {
    try {
      const userId = req.userData.id;
      const dataProj = await projectService.getAllProjects(userId);
      return res.json(dataProj);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProjectController();
