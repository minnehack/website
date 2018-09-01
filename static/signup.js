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
	})
});