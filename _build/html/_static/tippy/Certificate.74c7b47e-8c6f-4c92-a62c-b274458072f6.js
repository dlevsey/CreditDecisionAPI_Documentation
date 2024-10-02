selector_to_html = {"a[href=\"#response\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Response:<a class=\"headerlink\" href=\"#response\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#get-certificate-getholdingcertificates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method get\">GET</span> Certificate/GetHoldingCertificates<a class=\"headerlink\" href=\"#get-certificate-getholdingcertificates\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieve a list of certificates.</p>", "a[href=\"#certificate\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Certificate<a class=\"headerlink\" href=\"#certificate\" title=\"Link to this heading\">#</a></h1><p>Allows you to retrieve a list of certificates.</p>", "a[href=\"#query-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Query Parameters:<a class=\"headerlink\" href=\"#query-parameters\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#description\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieve a list of certificates.</p>", "a[href=\"#example-request\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Example Request:<a class=\"headerlink\" href=\"#example-request\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#endpoints\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Endpoints:<a class=\"headerlink\" href=\"#endpoints\" title=\"Link to this heading\">#</a></h2>"}
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
