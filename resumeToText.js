var fs = require('fs');
var Mustache = require('mustache');
var path = require('path');
var resumeToHTML = require('resume-to-html');
var htmlToText = require('html-to-text');


function resumeToText(resumeObject, callback) {
	resumeToHTML(resumeObject, {}, function(html, errs){
		if(!errs) {
			var text = htmlToText.fromString(html, {wordwrap: 130});
			callback(text, null);
		} else {
			callback(null, errs);
		}
	});
}

module.exports = resumeToText;