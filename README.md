# Minnehack.io

### Overview

This is a [Jekyll](https://jekyllrb.com/) site hosted on
[GitHub Pages](https://pages.github.com/) which is a fork of the
[Bootstrap](http://getbootstrap.com/)-based
[Agency theme](https://github.com/y7kim/agency-jekyll-theme).

Jekyll is a static website generator. It takes a conveniently
organized code base and compiles it into a static website that is easy
to host. 

GitHub Pages is a website hosting service provided by GitHub. GitHub
Pages supports Jekyll natively, so all you need to do for the site to
go live is push a commit to the `master` branch of the repo. GitHub
automatically builds it and serves it for you. **One catch here is
that GitHub may not build the site immediately. You may need to wait
some time before the changes you pushed go live**.

Thanks to [Rick Kim](https://github.com/y7kim) for providing the
original theme.

### Testing locally

To build and start a local server, you'll need Jekyll installed.
For that, make sure you have [Ruby](https://www.ruby-lang.org/en/)
and [RubyGems](https://rubygems.org/pages/download) installed. Then
run

```shell
gem install jekyll
```

You may need to be superuser/administrator for this to work.

Next, clone this repo:

```shell
git clone https://github.com/minnehack/minnehack.github.io.git
```

Finally, navigate into the repo you just cloned and run

```shell
jekyll serve
```

This will build the site and start up a server on your machine. Point
your browser at 127.0.0.1:4000 and you should see the MinneHack website.

One other useful Jekyll command to know is `jekyll build`, which will
simply build the website into `<minnehack-repo>/_site`, without starting
a web server. This can be helpful if you just want to inspect the actual
output that Jekyll is producing.

### Updating

The result of Jekyll's build process (and the set of code and assets
that make up the actual website) is the `_site` directory. That means
we don't ever edit `_site` or its contents – *we edit the code base
that Jekyll compiles into `_site`*.

Think of this repo as a template; Jekyll will copy most of the stuff
in here, place it into `_site`, and use that directory as the root of
the hosted website. For example, the `img` directory will be placed as
is into `_site`, and become publicly accessible. (Try navigating to an
image from the actual MinneHack
website. [Example](http://minnehack.io/img/logos/mhlogo.png))

### I want to edit a page's content

All of the visible pages are specified on the root directory of this repo.
For the main page, look at `index.html`. The other pages are named according
to what content they serve.

Some of these pages have mostly `{% include %}` directives; the included
files can be found in the `_includes` directory. Edit the includes if you
just want to change a single section's content, or add/remove `{% include %}`s
on the top-level pages if you want to change which sections show up. (Make sure
that the corresponding included file exists in `_include` before you
add new include directives!)

### I want to add a new page to the website

To create `minnehack.io/<page-name>`, create a new file called `page-name.html`
at the root directory. Next, add these lines to the top of the file:

```yaml
---
layout: default
title: <Page-Name>
---
```

This is what Jekyll calls [Front Matter](https://jekyllrb.com/docs/frontmatter/),
and tells Jekyll that this file shouldn't just be copied over verbatim to the
site, but should instead be preprocessed. In this case, we add a default layout
that includes a navbar and a footer, and give a title for the page (for the
tab name, etc). The triple dashes delimit the Front Matter, and what's inside
is specified using [YAML](http://yaml.org/).

Finally, put whatever content you want on the page below the Front
Matter. Then you can browse to it on your local server; or, if you've pushed
to the `master` branch, you'll actually be able to see it on the real
MinneHack website. Yay!

### I want to change how the website looks

For layout changes, look inside `_layout/default.html`, which
specifies the default wrapping content on each page. Right now it
contains a navbar, a footer, and the MLH badge. Additionally, the
default layout includes `_includes/head.html`, which has the
stylesheet links and fonts, and `_includes/js.html`, which has links
to all the JavaScript we're using.

For style/CSS changes, look inside `_sass/`. All of *our* CSS is there.
Prefer overriding the defaults from Bootstrap/Agency here, instead of
modifying the Bootstrap and Agency stylesheets directly. We're using
[Sass](http://sass-lang.com/) instead of straight CSS to make things
easier to read and maintain.

If you create a new stylesheet in `_sass/`, make sure to import it from
`css/minnehack.sass`. `minnehack.sass` is the actual stylesheet that
eventually gets added to all the pages. However, try to keep
styling out of it, and use it for sweeping configuration instead. Think
about where your styles belong, and put them in a suitably-named
stylesheet in `_sass/`.

**Do not add inline style.** It's ugly and makes it hard to keep the whole
website stylistically cohesive if we want to make sweeping changes. Add a
new class or id instead, and style it from the stylesheets. Similarly,
**do not use any of the following HTML tags:**

+ \<b\>
+ \<i\>
+ \<br\>
+ \<hr\>
+ \<font\>
+ \<small\>
+ \<strike\>
+ \<style\>
+ \<u\>

`<strong>` and `<em>` can be okay, but **only if the enclosed text is
actually important** compared to the surrounding text. Do not use them
solely for their style changes.

Basically, put structural stuff in HTML, put stylistic stuff in Sass.
Don't mix them together.

### I want to change how the website behaves

Look inside the `js/` directory and see if the behavior you want to modify
has a corresponding script. If you're trying to add behavior to something
that's not hooked up yet, put a script there and include that script in
`_includes/js.html`.

### I want to add an image

Just stick it somewhere inside `img/`, then use templating to link to it.
For example, let's say we had a Sass stylesheet set up like this:

```sass
.really-needs-a-background
  useless-property: whatever
  background-image: ???  // What do I put here?
```

Assuming you placed your image in `img/bg/super-important-background.png`,
your code would look like

```sass
.really-needs-a-background
  useless-property: whatever
  background-image: url("{{ 'img/bg/super-important-background.png' | prepend: site.baseurl }}")
  
// Note: This only works if you can use Liquid templates in this particular
         file. In short, (1) the file needs Front Matter (even empty!) so
         that Jekyll knows to process it specially, and (2) it can't be in
         the `_sass/` directory.
         
   Also, yes, this is totally a valid block comment. Note that after the first
   comment marker, all the lines are indented.
```

Yeah, okay, it's a little wordy, but it means that we can easily host
the site wherever we want, even as a subdirectory of another site,
without anything breaking.

Similarly, you could include it on an HTML page like so:

```html
<img src="{{ 'img/bg/super-important-background.png' | prepend: site.baseurl }}"/>
```

### I want to do something not on here

If you're not the ACM UMN Webmaster, ask him/her to help you out.

Alternatively, read the [Jekyll docs](https://jekyllrb.com/docs/home/). They're
pretty great, and easy to read too!
