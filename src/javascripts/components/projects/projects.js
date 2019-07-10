import projectData from '../../helpers/data/projectData';
// import util from '../../helpers/util';

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      domString += '<div class="container">';
      domString += '<div class="row">';
      projects.forEach((project) => {
        domString += '<div class="d-flex col-sm-12 col-md-6 col-lg-4 card-group">';
        domString += '<div class="card project-card">';
        domString += `<div class='title'><h2>${project.title}</h2></div>`;
        domString += `<img src=${project.screenshot} class="img-fluid movie-image" />`;
        domString += `<div class='description'><h4>${project.description}</h4></div>`;
        domString += `<div class='technologies-used'><h4>Technologies used: ${project.technologiesUsed}</h4></div>`;
        domString += `<div class='availability'><h4>${project.available}</h4></div>`;
        domString += `<div class='project-url'><a href=${project.url}>Project URL</a></div>`;
        domString += `<div class='gitHub-url'><a href=${project.githubUrl}>GitHub URL</a></div>`;
        domString += '</div>';
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      console.error(domString);
      // util.printToDom('projectsPage', domString);
    });
};

export default { createProjectCards };
