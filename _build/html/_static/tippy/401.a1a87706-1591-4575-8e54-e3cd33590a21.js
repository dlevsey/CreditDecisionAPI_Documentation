selector_to_html = {"a[href=\"#response-unauthorized-access\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-401 medium\">401</span> Response: Unauthorized Access<a class=\"headerlink\" href=\"#response-unauthorized-access\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#example-request\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-401 medium\">401</span> Example Request:<a class=\"headerlink\" href=\"#example-request\" title=\"Link to this heading\">#</a></h1>"}
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
