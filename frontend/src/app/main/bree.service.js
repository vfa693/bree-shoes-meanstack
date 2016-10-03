(function{
	 angular
			.module('frontend')
			.service('BreeService',BreeService);

		function BreeService($http,END_POINT){
				/* aquí definimos $http con sus verbos y sus endpoints
				END_POINT es la constante que se encuentra en el archivo index.constants.js que define el route con el backedn
				var public_api = {
				save : _save,

				}
					return public_api*/
				/*
				function_save(obj){
						return $http.post(END_POINT.url+'/bree',obj);
				}
				*/

}
})();
