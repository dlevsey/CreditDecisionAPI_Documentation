selector_to_html = {"a[href=\"#response\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Response:<a class=\"headerlink\" href=\"#response\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#get-dividend-list\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method get\">GET</span> Dividend/GetList<a class=\"headerlink\" href=\"#get-dividend-getlist\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieves a list of dividends.</p>", "a[href=\"#request-body\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Request Body:<a class=\"headerlink\" href=\"#request-body\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Description:<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p>Generates a detailed report for a given dividend.</p>", "a[href=\"#query-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Query Parameters:<a class=\"headerlink\" href=\"#query-parameters\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#description\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieves a list of dividends.</p>", "a[href=\"#get-dividend-getlist\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method get\">GET</span> Dividend/GetList<a class=\"headerlink\" href=\"#get-dividend-getlist\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieves a list of dividends.</p>", "a[href=\"#example-request\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Example Request:<a class=\"headerlink\" href=\"#example-request\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#generate-dividend-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method post\">POST</span> Dividend/GenerateDividendDetails<a class=\"headerlink\" href=\"#post-dividend-generatedividenddetails\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p>Generates a detailed report for a given dividend.</p>", "a[href=\"#id2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Example Request:<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Response:<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#post-dividend-generatedividenddetails\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method post\">POST</span> Dividend/GenerateDividendDetails<a class=\"headerlink\" href=\"#post-dividend-generatedividenddetails\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p>Generates a detailed report for a given dividend.</p>", "a[href=\"#endpoints\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Endpoints:<a class=\"headerlink\" href=\"#endpoints\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#dividend\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Dividend<a class=\"headerlink\" href=\"#dividend\" title=\"Link to this heading\">#</a></h1><p>Allows you to generate a dividend report for a given dividend.</p>"}
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
