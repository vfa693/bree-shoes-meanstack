var express = require ('express');
var router =  express.Router();
var todoCtrl = require ('../controllers/bree.ctrl.js');


/* llamadas a metodos del controlador

ejemplo:
router.route('/bree')
	.post(function(req,res){
		breeCtrl.save(req,res);
})
*/

module.exports = router;
