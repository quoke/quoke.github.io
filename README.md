Quoke
=====

Quoke is a crowdsourced, open source collection of quotations built by the community. The files in this repository are compiled and served on [GitHub Pages](https://pages.github.com/). See the live site at [quoke.co](https://quoke.co).

We are still in early days of development. You can help by adding your favourite quote, author, source, or topic. Or if you're a developer or designer you can help by adding features or working on the layouts or cleaning up the code.

How to add a quote?
-------------------

Simply add a .md (markdown) file in the `/_quotations` directory. The filename should be the first few words of the quotation, all in lowercase and separated by dashes eg. `always-forgive-your-enemies.md`.

And the content of the file should look something like this.

```markdown
---
layout: quotation
title: Always forgive your enemies
date: 2018-02-26
text: Always forgive your enemies; nothing annoys them so much.
author: Oscar Wilde
topics: 
  - forgiveness
---
```

_Note: in future we may organise this folder into alphabetical subfolders for neatness._

How to add an author?
---------------------

Add a .md file to the `/_authors` directory. The filename should be the author's name, all in lowercase and separated by dashes eg. `albert-einstein.md`.

The file should have something similar to this up top in the [front matter](https://jekyllrb.com/docs/front-matter/).

```markdown
---
layout: author
title: Albert Einstein
date: 2018-12-29
---
```

_Use the same method to add Sources and Topics too._

Credits
-------

* Created by [@phocks](https://github.com/phocks)
