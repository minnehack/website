+++
template = "index.html"
[extra]
navbar = "title"
+++

<div class="masthead">
    <div class="overlay">
        <div class="container">
            <h1 id="title">MinneHack 2022</h1>
			<h2 id="tagline">The Biggest Hackathon in Minnesota!</h2>
            <p>&nbsp;</p>
            <h3 id="dates">
                January 28th-29th (4PM-8PM)<br/>
                <small>24 Hours of Hacking </small><a href="/register" style="color:#7777ff;">Online!</a>
            </h3>
            <br/>
			<iframe id="stream" style="display: none" src="https://player.twitch.tv/?channel=minnehack&parent=minnehack.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
			<noscript><a class="btn" href="https://www.twitch.tv/minnehack">Watch the stream on Twitch!</a></noscript>
        </div>
    </div>
</div>

<div class="container">
    <h1 style="text-align: center; margin-bottom: 1.5em;">24&nbsp;HOURS OF HACKING. OVER $9000&nbsp;IN&nbsp;<a href="/prizes">PRIZES</a>. TOTALLY&nbsp;<span title="minus travel lol">FREE</span>.</h1>
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
                    <p>MinneHack is hosted by the University of Minnesota, Twin Cities chapter of the Association for Computing Machinery (ACM UMN). If you have any questions about the event, you can contact us via email at <a href="mailto:acm@umn.edu">acm@umn.edu</a>.</p>
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
