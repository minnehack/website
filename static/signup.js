let apiBase = "http://localhost:8080";

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
	dietaryRestrictions.initialize();

	let diet = $("input[name=dietaryRestrictions]");
	diet.tagsinput({
		typeaheadjs: {
			name: 'dietaryRestrictions',
			source: dietaryRestrictions.ttAdapter(),
		}
	});
});