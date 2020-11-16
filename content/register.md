+++
template = "page.html"
title = "Register"
[extra]
navbar = "page"
+++

# Hacker Registration

**MinneHack 2021 will take place January 23rd-24th (6PM-6PM) online.**

Complete the below form to register for the hackathon.

This form is not GDPR-compliant. If you are an EU data subject, contact us via email (<a href="mailto:acm@umn.edu" style="font-family: monospace;">acm@umn.edu</a>) to register.

<form action="/api/registration/" method="POST" class="signupform2" enctype="application/x-www-form-urlencoded">
	<div class="row">
		<div class="col-12"><input type="email" name="email" placeholder="Email address (you@example.com)*" autocomplete="email" autofocus required /></div>
	</div>
	<div class="row">
		<div class="col-6"><input type="text" name="firstName" placeholder="First Name*" autocomplete="given-name" required /></div>
		<div class="col-6"><input type="text" name="lastName" placeholder="Last Name*" autocomplete="family-name" required /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" class="typeahead" name="gender" placeholder="Gender" list="hosting-plan" /></div>
		<datalist id="hosting-plan">
		    <option value="man">Man</option>
		    <option value="woman">Woman</option>
		    <option value="nonbinary">Nonbinary</option>
		</datalist>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="phone" placeholder="Phone Number (digits only)*" autocomplete="tel-national" required pattern="\d{10,}" /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" class="typeahead" name="school" placeholder="School*" required pattern=".*[^\s].*" /></div>
	</div>
	<div class="row" id="reimbursement-expd" style="display: none;">
		<div class="col-12"><div style="display: block;"> &#8594; <input style="width: 95%;" type="text" name="reimbursement-amount" placeholder="Estminated reimbursement amount (USD$)" /></div>
			<div style="display: block;"> &#8594; <textarea style="width: 95%;" type="text" name="reimbursement-desc" placeholder="Describe your travel plans requiring reimbursement"></textarea></div>
			<p> &#8594; <label class="container"><input type="checkbox" name="reimbursement-strict" /><span class="checkmark"></span> I will not be able to attend without reimbursement</label></p>
		</div>
	</div>
	<!-- <div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="bus" id="bus" /><span class="checkmark"></span> We have historically sent a bus to Purdue University, University of Illinois Urbana Champagne, and University of Wisconsin Madison. Are you interested in taking the bus from any of these locations?
		</label></div>
	</div>
	<div class="row" id="bus-expd" style="display: none;">
		<div class="col-12"> &#8594; Which? <select name="bus-which">
			<option value="purdue">Purdue University</option>
			<option value="uic">University of Illinois Urbana Champagne</option>
			<option value="uwm">University of Wisconsin Madison</option>
		</select><p> &#8594; <label class="container"><input type="checkbox" name="bus-strict" /><span class="checkmark"></span> I will not be able to attend if the bus is not available</label></p></div>
	</div> -->
	<div class="row">
		<div class="col-12"><textarea name="accommodations" placeholder="Accommodation requests"></textarea></div>
	</div>
	<div class="row">
		<div class="col-3">Resume:</div><div class="col-9"><input type="file" name="resume" style="width: 82%;" autocomplete="off" disabled></div>
		<noscript><span style="color:red">You must enable JavaScript to submit your resume via this form.</span> Sorry!</noscript>
		<div class="col-12">(You may update your resume/upload one later if you wish.)</div>
	</div>
	<hr/>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="student" required /><span class="checkmark"></span> I am currently a student or graduated within the last 12 months</label></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="coc" required /><span class="checkmark"></span> I have read and agree to the <a href="https://acm.umn.edu/static/rules.pdf">ACM UMN Rules</a>.</label></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="mlhpriv" required /><span class="checkmark"></span>I authorize ACM UMN to share certain application/registration information for event administration, ranking, pre and post-event informational e-mails, and occasional messages about hackathons. I agree to the <a href="/privacypolicy">MinneHack 2021 Privacy Policy.</a></label></div>
	</div>
	<div class="row">
		<div class="col-12">
			<div id="driving-bus-nag" style="color:red; font-weight: bold;">You have indicated that you intend to drive, and that you intend to take the bus. Please select at most one.<br/></div>
			<div id="submission-issue" style="color:red"></div>
			<input type="submit" value="Submit Registration" id="submit" />
		</div>
	</div>
</form>

<link rel="stylesheet" href="/signup.css" />
<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript" src="/tagsinput.js"></script>
<script type="text/javascript" src="/typeahead.js"></script>
<script type="text/javascript" src="/signup.js"></script>
