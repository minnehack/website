+++
template = "page.html"
title = "Sign Up"
[extra]
navbar = "page"
+++

# Hacker Registration

Complete the below form to register for the hackathon. Red indicates an incomplete field.

<form action="http://localhost:8080/registration/register" method="POST" class="signupform2">
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
		<div class="col-12"><input type="text" name="sleepingArea" placeholder="Sleeping Area (He/She/They)*" required list="sleepingArea" pattern="[Ss]?[Hh][Ee]|[Tt][Hh][Ee][Yy]" /></div>
		<datalist id="sleepingArea">
			<option>He</option>
			<option>She</option>
			<option>They</option>
		</datalist>
	</div>
	<div class="row">
		<div class="col-12"><label class="container"><input type="checkbox" name="minor" /><span class="checkmark"></span> I'm a minor (under 18)</label></div>
	</div>
	<div class="row">
		<div class="col-12"><textarea name="accommodations" placeholder="Other Accommodations"></textarea></div>
	</div>
	<div class="row">
		<p>We require that our participants have an extraordinarily high IQ. To prove that you satisfy this requirement, please include a well-written and original proof of the Collatz conjecture.</p>
		<div class="col-12"><textarea name="accommodations" placeholder="Proof (max 140 characters)"></textarea></div>
		<small style="display: block; text-align: right;"><a href="#">Pay 0.000141BTC for 20 more characters</a></small>
	</div>
	<div class="row">
		<div class="col-12"><input type="submit" /></div>
	</div>
</form>

<link rel="stylesheet" href="/signup.css" />
<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript" src="/typeahead.js"></script>
<script type="text/javascript" src="/signup.js"></script>
