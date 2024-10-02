selector_to_html = {"a[href=\"#credit-decision-api-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credit Decision API Documentation<a class=\"headerlink\" href=\"#credit-decision-api-documentation\" title=\"Link to this heading\">#</a></h1><p>Welcome to the documentation for the Credit Decision\u2019s API.</p>", "a[href=\"#introduction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Introduction<a class=\"headerlink\" href=\"#introduction\" title=\"Link to this heading\">#</a></h2><p>This API automates the decision-making process for credit approval based on customer data.</p>"}
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
