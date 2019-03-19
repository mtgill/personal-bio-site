// printToDom function - takes divId and string
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// createProjectCards function 
// iterates through array if 'available = true'

const projects = [
    {
        title: "Cool Project", 
        screenshot: "https://via.placeholder.com/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Most Excellent Project", 
        screenshot: "https://via.placeholder.com/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Radical Project", 
        screenshot: "https://via.placeholder.com/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Sad Project", 
        screenshot: "https://via.placeholder.com/200", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

     
];

const createProjectCards = () => {
    let domString = "";
    for (let i = 0; i < projects.length; i++){
        if (projects[i].available === true){
            domString += `<div class='project'>`;
            domString += `<div class='title'><h2>${projects[i].title}</h2></div>`;
            domString += `<div class='screenshot'><img src=${projects[i].screenshot}></div>`;
            domString += `<div class='description'><h4>${projects[i].description}</h4></div>`;
            domString += `<div class='technologies-used'><h4>Technologies used: ${projects[i].technologiesUsed}</h4></div>`;

            domString += `<div class='availability'><h4>${projects[i].available}</h4></div>`;

            domString += `<div class='project-url'><a href=${projects[i].url}>Project URL</a></div>`;
            domString += `<div class='gitHub-url'><a href=${projects[i].githubUrl}>GitHub URL</a></div>`;
            domString += `</div>`;
        }
    }
    printToDom('projectsPage', domString);
};

const init = () => {
    createProjectCards();
};

init();