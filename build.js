const fs = require("fs");
const path = require("path");

let markdown = "\n### Console Snippets\n";
markdown += buildSnippetReadme("./snippets/console.json");
markdown += "\n### Function Snippets\n";
markdown += buildSnippetReadme("./snippets/function.json");
markdown += "\n### Language Keyword  Snippets\n";
markdown += buildSnippetReadme("./snippets/Keyword.json");
console.log(markdown);

function buildSnippetReadme(path) {
  let markdown = "";
  const consoleSnippets = readJSON(path);
  Object.entries(consoleSnippets).map(([snippetName, snippet]) => {
    let snippetBody;

    if (Array.isArray(snippet.body)) {
      snippetBody = snippet.body.join("\n").trim();
    } else {
      snippetBody = snippet.body;
    }

    markdown += `\n\`${snippet.prefix}\` → ${snippetName}\n`;
    markdown += "\n```javascript\n";
    markdown += `${snippetBody}`;
    markdown += "\n```\n";
  });
  return markdown;
}

function readJSON(file) {
  const str = fs.readFileSync(path.join(__dirname, file)).toString();
  return JSON.parse(str);
}
