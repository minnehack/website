+++
template = "page.html"
title = "Register"
[extra]
navbar = "page"
+++

# Hacker Registration

**MinneHack 2020 will take place January 25th-26th (6PM-6PM) in the [Memorial Union Great Hall](https://goo.gl/maps/vC4Xz4CvBzr) the University of Minnesota.**

Complete the below form to register for the hackathon. Registering now places you on the waitlist, but **does not guarantee you a spot. Historically the entire waitlist has been admitted.** If you do not register you may be able to attend as a walk-in on a space-available basis. Red indicates an incomplete field.

This form is not GDPR-compliant. If you are an EU data subject, contact us via email (<a href="mailto:acm@umn.edu" style="font-family: monospace;">acm@umn.edu</a>) to register.

<form action="/api/registration/initial" method="POST" class="signupform2" enctype="multipart/form-data">
	<div class="row">
		<div class="col-12"><input type="email" name="email" placeholder="Email address (you@example.com)*" autocomplete="email" autofocus required /></div>
	</div>
	<div class="row">
		<div class="col-6"><input type="text" name="firstName" placeholder="First Name*" autocomplete="given-name" required /></div>
		<div class="col-6"><input type="text" name="lastName" placeholder="Last Name*" autocomplete="family-name" required /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" class="typeahead" name="gender" placeholder="Gender*" list="hosting-plan" required /></div>
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
	<div class="row">
		<div class="col-3">T-Shirt Size:</div><div class="col-9"><select name="tshirt" style="width: 100%;">
			<option value="xs">XS</option>
			<option value="s">S</option>
			<option value="m">M</option>
			<option value="l">L</option>
			<option value="xl">XL</option>
			<option value="xxl">XXL</option>
		</select></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="driving" id="driving"/><span class="checkmark"></span> I plan to drive to MinneHack 2020 and park on campus</label></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="reimbursement" id="reimbursment" /><span class="checkmark"></span> I would like to apply for travel reimbursement</label></div>
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
		<div class="col-12"><label class="container"><input type="checkbox" name="minor" id="minor"/><span class="checkmark"></span> I will be a minor (under 18) as of January 25th, 2020</label><div id="minor-nag" style="color:red; font-weight: bold;"><br/> &#8594; Because you are registering as a minor, you must bring a <a href="/minorwaiver.pdf" target="_blank">release signed by your guardian</a> to the event or email it to <a href="mailto:acm@umn.edu" style="font-family: monospace;">acm@umn.edu</a>. You will not be admitted to the event without this, even in circumstances where a walk-in would be.<br/></div></div>
	</div>
	<div class="row">
		<div class="col-12">
			<select multiple name="dietaryRestrictions" data-role="tagsinput" placeholder="Dietary Restrictions"></select>
		</div>
	</div>
	<div class="row">
		<div class="col-12"><textarea name="accommodations" placeholder="Other Accommodations Requests (e.g. closed captioning, space to decompress, bringing a service animal)"></textarea></div>
	</div>
	<div class="row">
		<div class="col-3">Resume:</div><div class="col-9"><input type="file" name="resume"  style="width: 82%;" autocomplete="off"></div>
		<div class="col-12">(You may update your resume/upload one later if you wish.)</div>
	</div>
	<hr/>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="student" required /><span class="checkmark"></span> I am currently a student or graduated within the last 12 months</label></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="coc" required /><span class="checkmark"></span> I have read and agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>.</label></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="mlhpriv" required /><span class="checkmark"></span>I authorize ACM UMN to share certain application/registration information for event administration, ranking, MLH administration, pre and post-event informational e-mails, and occasional messages about hackathons. I agree to the terms of the <a href="https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md">MLH Contest Terms and Conditions</a>, the <a href="https://mlh.io/privacy">MLH Privacy Policy,</a> and the <a href="/privacypolicy">MinneHack 2020 Privacy Policy.</a></label></div>
	</div>
	<div class="row">
		<div class="col-12">
			<div id="driving-bus-nag" style="color:red; font-weight: bold;">You have indicated that you intend to drive, and that you intend to take the bus. Please select at most one.<br/></div>
			<input type="submit" value="Submit Registration" id="submit"/>
		</div>
	</div>
</form>

<link rel="stylesheet" href="/signup.css" />
<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript" src="/tagsinput.js"></script>
<script type="text/javascript" src="/typeahead.js"></script>
<script type="text/javascript" src="/signup.js"></script>