/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('frontend')
    .constant('malarkey', malarkey)
    .constant('moment', moment);
		.constat('END_POINT'),{
		'	url:' 'http://localhost:800/api/v1' // aquí es donde comunicamos con el backend
		});

})();
