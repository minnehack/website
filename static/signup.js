let apiBase = "/api";

$(document).ready(async () => {
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

	document.querySelector("#submit").disabled = false;
    
	// blame hemant
    const form = document.querySelector("form");
	const resumeInput = document.querySelector("input[name=resume]");
    resumeInput.disabled = false;
    
    form.addEventListener("submit", async ev => {
		ev.preventDefault();

		// NB: disabling the input removes it from the all seeing eye of FormData.
        resumeInput.disabled = true;
        const data = new URLSearchParams(new FormData(form));
        resumeInput.disabled = false;

        try {
			let resId = await uploadResume(resumeInput.files[0]);
			data.append("resume", resId);
        } catch(e) {
			console.warn("Invalid or nonexistent resume:", e);
        }

        try {
			const url = await fetch(form.action, {
				method: "POST",
				mode: "same-origin",
				redirect: "manual",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: data
			}).then(r => r.status != 302 ? Promise.reject("Expected redirect") : r.url);
            
            window.location = url;
        } catch(e) {
			submitErr("An error occurred whilst submitting your registration. Please try again.", e);
		}
	});
});

const submitErr = (msg, e) => {
    console.error(e);
	const box = document.querySelector("#submission-issue");
    box.innerText = msg;
};

const uploadResume = resume => {
    if(!resume) return Promise.reject("resume is falsy");
	const data = new FormData();
	data.append("resume", resume);

    const hash = resume.arrayBuffer().then(ab => crypto.subtle.digest("SHA-256", ab));
	return fetch(`${apiBase}/upload`, {
		method: "POST",
        mode: "same-origin",
        headers: {
			"Content-Type": "multipart/form-data"
        },
        body: data,
    }).then(r => r.ok ? r : Promise.reject(`Resume submit: HTTP status ${r.status}`))
		.then(() => hash.then(h => [...new Uint8Array(h)].map(b => b.toString(16).padStart(2, "0")).join("")))
		.catch(e => submitErr("An error occured whilst uploading your resume. Please try again", e));
};
