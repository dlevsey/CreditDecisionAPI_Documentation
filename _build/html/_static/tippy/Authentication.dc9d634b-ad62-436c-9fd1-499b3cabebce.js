selector_to_html = {"a[href=\"#authentication-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication Examples<a class=\"headerlink\" href=\"#authentication-examples\" title=\"Link to this heading\">#</a></h2><p>See below for how authentication should work in different languages.</p>", "a[href=\"#servers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Servers<a class=\"headerlink\" href=\"#servers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#authentication\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication<a class=\"headerlink\" href=\"#authentication\" title=\"Link to this heading\">#</a></h1><p>The Credit Decision API uses API keys for authentication.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
