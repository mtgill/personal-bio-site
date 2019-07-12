import 'bootstrap';
import 'jquery';

import '../main.scss';

import '../vendor/jquery/jquery.min';

import '../vendor/bootstrap/js/bootstrap.bundle.min';

import projectCards from './components/projects/projects';

const init = () => {
  projectCards.createProjectCards();
};

init();
