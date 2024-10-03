selector_to_html = {"a[href=\"#query-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Query Parameters:<a class=\"headerlink\" href=\"#query-parameters\" title=\"Link to this heading\">#</a></h3><h4><span class=\"http-method good-response medium\">200</span> Request:<a class=\"headerlink\" href=\"#request\" title=\"Link to this heading\">#</a></h4>", "a[href=\"Authentication.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication<a class=\"headerlink\" href=\"#authentication\" title=\"Link to this heading\">#</a></h1><p>The Credit Decision API uses API keys for authentication.</p>", "a[href=\"#request\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Request:<a class=\"headerlink\" href=\"#request\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#example-request\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-500 medium\">500</span> Example Request:<a class=\"headerlink\" href=\"#example-request\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#response-unauthorized-access\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-401 medium\">401</span> Response: Unauthorized Access<a class=\"headerlink\" href=\"#response-unauthorized-access\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#post-credit-decision\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method post\">POST</span> /credit-decision<a class=\"headerlink\" href=\"#post-credit-decision\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#response\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-400 medium\">400</span> Response<a class=\"headerlink\" href=\"#response\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#credit-decision\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credit Decision<a class=\"headerlink\" href=\"#credit-decision\" title=\"Link to this heading\">#</a></h1><p>Resource for automating credit approval decisions based on customer data.</p>", "a[href=\"#response-internal-server-error\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-500 medium\">500</span> Response: Internal Server Error<a class=\"headerlink\" href=\"#response-internal-server-error\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#endpoint-s\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Endpoint(s):<a class=\"headerlink\" href=\"#endpoint-s\" title=\"Link to this heading\">#</a></h2><h3><span class=\"http-method post\">POST</span> /credit-decision<a class=\"headerlink\" href=\"#post-credit-decision\" title=\"Link to this heading\">#</a></h3>"}
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
