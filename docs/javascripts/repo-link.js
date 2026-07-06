/*
 * Point the header GitHub link at the current asset's own repository.
 * Each asset section maps to its source repo. On the landing page (or any
 * page not under a known asset), the header source link is hidden so it
 * never points back at the docs repository itself.
 *
 * Add a new asset by adding one entry keyed by its docs/<slug>/ folder name.
 */
(function () {
  var REPOS = {
    "hierarchy-inspector": {
      url: "https://github.com/OverGast/Hierarchy-Inspector",
      name: "OverGast/Hierarchy-Inspector"
    }
  };

  function currentSection() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      if (REPOS.hasOwnProperty(parts[i])) return parts[i];
    }
    return null;
  }

  function updateSourceLink() {
    var source = document.querySelector(".md-header__source");
    if (!source) return;

    var section = currentSection();
    if (!section) {
      source.style.display = "none";
      return;
    }
    source.style.display = "";

    var entry = REPOS[section];
    var link = source.querySelector("a.md-source");
    if (link) link.setAttribute("href", entry.url);

    var label = source.querySelector(".md-source__repository");
    if (label) {
      var replaced = false;
      label.childNodes.forEach(function (node) {
        if (node.nodeType === 3 && node.textContent.trim()) {
          node.textContent = entry.name;
          replaced = true;
        }
      });
      if (!replaced) label.appendChild(document.createTextNode(entry.name));
    }
  }

  // Material exposes document$ (fires on every instant-navigation load).
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(updateSourceLink);
  } else {
    document.addEventListener("DOMContentLoaded", updateSourceLink);
  }
})();
