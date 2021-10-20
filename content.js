function replacer() {
  [].forEach.call(document.querySelectorAll("textarea"), (textarea) => {
    textarea.value = textarea.value.replace(
      /!\[([^\]]*)\]\(([^)]*)\)/g,
      (match, name, url) => {
        if (name.startsWith("Uploading")) {
          return `![${name}](${url})`;
        }
        return `<pre align=center><img height=350 alt src="${url}"></pre>`;
      }
    );
  });
}

/* surely no one will ever experience performance issues */
setInterval(replacer, 250);
