+++
template = "page.html"
title = "Sign Up"
+++

# Hacker Registration

Complete the below form to register for the hackathon. Red indicates an incomplete field.

<form action="/api/registration/register" method="POST" class="signupform2">
	<div class="row">
		<div class="col-12"><input type="email" name="email" placeholder="Email address (you@example.com)*" autofocus required /></div>
	</div>
	<div class="row">
		<div class="col-6"><input type="text" name="firstName" placeholder="First Name*" required /></div>
		<div class="col-6"><input type="text" name="lastName" placeholder="Last Name*" required /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="prefName" placeholder="Preferred Name" /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="phone" placeholder="Phone Number (digits only)*" required pattern="\d{10,}" /></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="text" name="school" placeholder="School*" required /></div>
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
		<div class="col-12"><input type="text" name="discord" placeholder="Discord ID (michael#8440)" /></div>
	</div>
	<div class="row">
		<div class="col-12"><textarea name="accommodations" placeholder="Other Accommodations"></textarea></div>
	</div>
	<div class="row">
		<div class="col-12"><input type="submit" /></div>
	</div>
</form>
