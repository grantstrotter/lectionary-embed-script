# lectionary-embed-script
To preview changes locally, open index.html in a browser and refresh after each change.

The content of the `weeks` array is copy-pasted from the `JSON` column of [this](https://docs.google.com/spreadsheets/d/1Dt6qf3CFwoCgPO_2P2dDhaI45RWLvL6TxYjMy0tkuII/edit?usp=sharing) Google Sheet. Repeat this copying process to bring in fresh data.

A Github Pages url is exposed for this repo: https://grantstrotter.github.io/lectionary-embed-script/

The embed script is included in the Denton North Church website on the Lectionary page in a Code Block:
```
<script src="https://grantstrotter.github.io/lectionary-embed-script/embed.js"></script>
```

Whenever changes are pushed to `main`, a deploy process automatically kicks off via Github Pages. **This takes about 5 minutes.** When it's done, the changes should automatically appear on the live website.
