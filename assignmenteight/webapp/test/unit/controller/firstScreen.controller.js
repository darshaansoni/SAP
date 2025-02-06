/*global QUnit*/

sap.ui.define([
	"assignmenteight/controller/firstScreen.controller"
], function (Controller) {
	"use strict";

	QUnit.module("firstScreen Controller");

	QUnit.test("I should test the firstScreen controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
