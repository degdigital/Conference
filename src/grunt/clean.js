module.exports = {
	clean: [
      	"<%= paths.app.css %>/**/*",
      	"<%= paths.app.fonts %>/**/*",
      	"<%= paths.app.images %>/**/*",
      	"<%= paths.app.js %>/**/*",
      	"<%= paths.app.patterns %>/**/*"
  	],
  	options: {
  		force: true
  	}
};