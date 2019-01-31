+++
template = "page.html"
title = "Register"
[extra]
navbar = "page"
+++

# Hacker Registration

<hr/>

## Please note that MinneHack has officially reached capacity for RSVPs.
This means that you are not guaranteed a spot at the event if you fill out this form now. Doing so now will add you to the wait list, meaning that you will be allowed access to the even starting approximately 90 minutes after door time if space allows. There is a reasonably good chance you will get in if you are on the waitlist and arrive promptly, but <i>we cannot guarantee it</i>.

<hr/>

Complete the below form to register for the hackathon. Red indicates an incomplete field.

<p style="color: orange; font-weight: bold;">Please use your school email.</p>

<i>By submitting this form you agree to the <a href="/privacypolicy">MinneHack 2019 Privacy Policy.</a></i>

<form action="/api/registration/register" method="POST" class="signupform2">
	<div class="row">
		<div class="col-12"><input type="email" name="email" placeholder="Email address (you@example.com)*" autocomplete="email" autofocus required /></div>
	</div>
	<div class="row">
		<div class="col-6"><input type="text" name="firstName" placeholder="First Name*" autocomplete="given-name" required /></div>
		<div class="col-6"><input type="text" name="lastName" placeholder="Last Name*" autocomplete="family-name" required /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="prefName" placeholder="Preferred Name" /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="phone" placeholder="Phone Number (digits only)*" autocomplete="tel-national" required pattern="\d{10,}" /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" class="typeahead" name="school" placeholder="School*" required pattern=".*[^\s].*" /></div>
	</div>
	<div class="row">
		<div class="col-12">
			<select multiple name="dietaryRestrictions[]" data-role="tagsinput" placeholder="Dietary Restrictions"></select>
		</div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="minor" /><span class="checkmark"></span> I'm a minor (under 18)</label></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="discord" placeholder="Discord ID (michael#8440)" pattern=".*#[0-9]{4}"/></div>
	</div>
	<div class="row">
		<div class="col-12"><textarea name="accommodations" placeholder="Other Accommodations"></textarea></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="coc" required /><span class="checkmark"></span> I have read and agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>.</label></div>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="mlhpriv" required /><span class="checkmark"></span>I authorize you to share certain application/registration information for event administration, ranking, MLH administration, pre and post-event informational e-mails, and occasional messages about hackathons in-line with the <a href="https://mlh.io/privacy">MLH Privacy Policy</a>. I further I agree to the terms of both the <a href="https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md">MLH Contest Terms and Conditions</a> and the <a href="https://mlh.io/privacy">MLH Privacy Policy.</a></label></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="submit" /></div>
	</div>
</form>

<link rel="stylesheet" href="/signup.css" />
<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript" src="/tagsinput.js"></script>
<script type="text/javascript" src="/typeahead.js"></script>
<script type="text/javascript" src="/signup.js"></script>
<script type="text/javascript">
</script>
