import './css/main.scss';

import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

import Vars from './variables/_vars.js';
import Anim from './lib/resume-animation';
import Para from './lib/resume-parallax';
import Page from './lib/resume-pages';
import Shake from './lib/resume-shake';


$(document).ready(function () {
	Anim.init();
	Para.init();
	Page.init();
	Shake.init('avatar-box');
});






