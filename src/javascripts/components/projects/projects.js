import projectData from '../../helpers/data/projectData';
import util from '../../helpers/util';

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += '<div class="col-lg-4 col-md-6 mb-4 card-group">';
        domString += '<div class="card project-card">';
        domString += `<div class='title'><h2>${project.title}</h2></div>`;
        domString += `<a href=${project.screenshot} data-lightbox="image-1" data-title="${project.description}" class="d-block mb-1">`;
        domString += `<img src="${project.screenshot}" alt="..." class="img-fluid d-block mx-auto"></a>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      util.printToDom('projectsPage', domString);
    });
};

export default { createProjectCards };
