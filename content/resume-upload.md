+++
template = "page.html"
title = "Resume Upload"
[extra]
navbar = "page"
+++

# Resume Upload

Complete the below form to upload your resume for our sponsors!

<form method="POST" action="FILLMEIN" enctype="multipart/form-data" id="resume-form">
  <input type=file name=file>
  <input type=submit value=Upload>
</form>

<i>By submitting this form you agree to the <a href="/privacypolicy">MinnheHack 2019 Privacy Policy.</a></i>


<script type="text/javascript">
	var token = window.location.href.split("?")[1];
	document.querySelector("#resume-form").action="/api2/resumeupload/"+token;
</script>