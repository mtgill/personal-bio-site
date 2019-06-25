import projectData from '../../helpers/data/projectData';
import util from '../../helpers/util';

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      console.error(projects);
      projects.forEach((project) => {
        domString += '<div class=\'project\'>';
        domString += `<div class='title'><h2>${project.title}</h2></div>`;
        domString += `<div class='screenshot'><img src=${project.screenshot}></div>`;
        domString += `<div class='description'><h4>${project.description}</h4></div>`;
        domString += `<div class='technologies-used'><h4>Technologies used: ${project.technologiesUsed}</h4></div>`;
        domString += `<div class='availability'><h4>${project.available}</h4></div>`;
        domString += `<div class='project-url'><a href=${project.url}>Project URL</a></div>`;
        domString += `<div class='gitHub-url'><a href=${project.githubUrl}>GitHub URL</a></div>`;
        domString += '</div>';
      });
      util.printToDom('projectsPage', domString);
    });
};

export default { createProjectCards };
