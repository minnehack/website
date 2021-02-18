+++
template = "index.html"
[extra]
navbar = "title"
+++

<div class="masthead">
    <div class="overlay">
        <div class="container">
            <h1 id="title">MinneHack 2021</h1>
			<h2 id="tagline">The Biggest Hackathon (that was formerly held) in the Twin Cities</h2>
            <p>&nbsp;</p>
            <h3 id="dates">
                January 23rd-24th (Noon-6PM)<br/>
                <small>24 Hours</small>
				Online
            </h3>
			<br/><br/>
        </div>
    </div>
</div>

<div class="container">
    <h1 style="text-align: center; margin-bottom: 1.5em;">24&nbsp;HOURS. $6,000&nbsp;IN&nbsp;PRIZES. TOTALLY&nbsp;<span title="minus travel lol">FREE</span>.</h1>
    <div class="row" id="faq">
        <div class="col-6">
            <div class="box">
                <h2>What is MinneHack?</h2>
                <div>
                    <p>MinneHack is a hackathon that welcomes hackers from around the country &mdash; a 24-hour event where you
                        can create, collaborate, and compete to make something amazing!</p>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="box">
                <h2>Who runs MinneHack?</h2>
                <div>
                    <p>MinneHack is hosted by the University of Minnesota, Twin Cities chapter of the Association for Computing Machinery. If you have any questions about the event, you can contact us via email at <a href="mailto:acm@umn.edu">acm@umn.edu</a>.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
	const stream = document.querySelector("#stream");
	stream.style.display = "inline";
});
</script>
