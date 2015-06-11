module.exports = {
	"dev": {       
    	"files": {
    		"<%= paths.src.css %>/style.css": [
    			"<%= paths.src.css %>/utils/**/*.css",
    			"<%= paths.src.css %>/atoms/**/*.css",
    			"<%= paths.src.css %>/molecules/**/*.css",
    			"<%= paths.src.css %>/organisms/**/*.css",
    			"<%= paths.src.css %>/templates/**/*.css"
    		]
    	}
	}
};