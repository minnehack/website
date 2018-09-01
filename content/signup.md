+++
template = "page.html"
title = "Sign Up"
[extra]
navbar = "page"
+++

# Hacker Registration

Complete the below form to register for the hackathon. Red indicates an incomplete field.

<p style="color: orange; font-weight: bold;">Please use your school email.</p>

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
			<select multiple name="dietaryRestrictions[]" data-role="tagsinput"></select>
		</div>
			<!-- <input type="text" name="dietaryRestrictions[]" placeholder="Dietary Restrictions" class="typeahead" data-role="tagsinput" /></div> -->
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
