import projectCards from './components/projects/projects';

const bioDiv = document.getElementById('bioPage');
const techDiv = document.getElementById('technologiesPage');
const projectDiv = document.getElementById('projectsPage');


// printToDom function - takes divId and string
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildBioPage = () => {
  let domString = '';
  domString += '<h2>Bio Page</h2>';
  domString += '<p>Bio Page</p>';
  printToDom('bioPage', domString);
};

const buildTechPage = () => {
  let domString = '';
  domString += '<h2>Technologies Page</h2>';
  domString += '<p>Technology page</p>';
  printToDom('technologiesPage', domString);
};

const navButtonLogic = (e) => {
  const navTargetId = e.target.id;

  if (navTargetId === 'bioButton') {
    if (bioDiv.style.display === 'none') {
      bioDiv.style.display = 'block';
    }
    techDiv.style.display = 'none';
    projectDiv.style.display = 'none';
    buildBioPage();
  } else if (navTargetId === 'techButton') {
    if (techDiv.style.display === 'none') {
      techDiv.style.display = 'block';
    }
    bioDiv.style.display = 'none';
    projectDiv.style.display = 'none';
    buildTechPage();
  } else if (navTargetId === 'projectButton') {
    if (projectDiv.style.display === 'none') {
      projectDiv.style.display = 'flex';
    }
    bioDiv.style.display = 'none';
    techDiv.style.display = 'none';
    projectCards.createProjectCards();
  }
};

const addEventListeners = () => {
  const navButtons = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navButtons.length; i += 1) {
    navButtons[i].addEventListener('click', navButtonLogic);
  }
};

const init = () => {
  projectCards.createProjectCards();
  addEventListeners();
};

init();
