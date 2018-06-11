const fs = require("fs");
const path = require("path");

updateReadme();

function updateReadme() {
  const readmePath = path.join(__dirname, "README.md");
  let readme = fs.readFileSync(readmePath).toString();

  readme = readme.replace(
    /(### Console Snippets\n)[\w\W]+?(\n###)/,
    "$1" +
      buildSnippetReadme("./snippets/console.json").replace(/\$/g, "$$$") +
      "$2"
  );
  readme = readme.replace(
    /(### Function Snippets\n)[\w\W]+?(\n###)/,
    "$1" +
      buildSnippetReadme("./snippets/function.json").replace(/\$/g, "$$$") +
      "$2"
  );
  readme = readme.replace(
    /(### Language Keyword Snippets\n)[\w\W]+?(\n###)/,
    "$1" +
      buildSnippetReadme("./snippets/keyword.json").replace(/\$/g, "$$$") +
      "$2"
  );

  fs.writeFileSync(readmePath, readme);
}

function buildSnippetReadme(path) {
  let markdown = "";
  const consoleSnippets = readJSON(path);

  Object.entries(consoleSnippets).forEach(([snippetName, snippet]) => {
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
