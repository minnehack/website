let apiBase = "/api";

$(document).ready(function() {
	let schools = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.whitespace,
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: { url: apiBase + "/registration/autocomplete/schools", cache: false, },
	});

	$("input[name=school]").typeahead(null, {
		name: 'school',
		source: schools,
	});

	let dietaryRestrictions = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.whitespace,
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: { url: apiBase + "/registration/autocomplete/dietaryrestrictions", cache: false, },
	});

	let diet = $("input[name=dietaryRestrictions]");
	diet.tagsinput({
		typeahead: {
			name: 'dietaryRestrictions',
			source: dietaryRestrictions,
		}
	});

	function addEvent(el, type, handler) {
	    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
	}
	var schoolinput = document.querySelector("input[name=school]");
	var checkSchool = function(v){
		return /(u(niversity)?\s*of\s*m(n|innesota)?)|umtc|umd|morris|umm|umtc/i.test(v) && 
				!/missouri|mississippi|massachusetts|maine|montana|michigan|maryland/i.test(v);
	}
	var onUpdate = function(){
		var v = schoolinput.value;
		document.querySelector("#umtc-questions").style.display=checkSchool(v)?"block":"none";
	};
	addEvent(schoolinput, 'blur', onUpdate);
	addEvent(schoolinput, 'keyup', onUpdate);
});