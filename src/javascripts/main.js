import 'bootstrap';
import 'jquery';

import '../main.scss';

import '../js/front';

import '../vendor/jquery/jquery.min';
import '../vendor/onepage-scroll/jquery.onepage-scroll';
import '../vendor/lightbox2/js/lightbox-plus-jquery';
import '../vendor/lightbox2/js/lightbox';
import '../vendor/bootstrap/js/bootstrap.bundle.min';
import '../vendor/onepage-scroll/jquery.onepage-scroll.min';
import '../vendor/lightbox2/js/lightbox.min';
import '../vendor/lightbox2/js/lightbox-plus-jquery.min';

import projectCards from './components/projects/projects';

const init = () => {
  projectCards.createProjectCards();
};

init();
