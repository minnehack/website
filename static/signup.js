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
	dietaryRestrictions.initialize();

	let diet = $("input[name=dietaryRestrictions]");
	diet.tagsinput({
		typeaheadjs: {
			name: 'dietaryRestrictions',
			source: dietaryRestrictions.ttAdapter(),
		}
	});

	let checkreimbursment = function() {
		if ($("#reimbursment").prop('checked')) {
			$("#reimbursement-expd").show();
		} else {
			$("#reimbursement-expd").hide();
		}
	};

	checkreimbursment();

	$("#reimbursment").change(checkreimbursment);

	let checkbus = function() {
		if ($("#bus").prop('checked')) {
			$("#bus-expd").show();
		} else {
			$("#bus-expd").hide();
		}
	};

	checkbus();

	$("#bus").change(checkbus);

	let checkminor = function() {
		if ($("#minor").prop('checked')) {
			$("#minor-nag").show();
		} else {
			$("#minor-nag").hide();
		}
	};

	checkminor();

	$("#minor").change(checkminor);

	let checktransit = function() {
		console.log($("#driving").prop('checked'), $("#bus").prop('checked'));
		if ($("#driving").prop('checked') && $("#bus").prop('checked')){
			$("#driving-bus-nag").show();
			$("#submit").prop("disabled",true);
		}else{
			$("#driving-bus-nag").hide();
			$("#submit").prop("disabled",false);
		}
	}

	$("#driving").change(checktransit);
	$("#bus").change(checktransit);
	checktransit();

});