selector_to_html = {"a[href=\"#introduction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Introduction<a class=\"headerlink\" href=\"#introduction\" title=\"Link to this heading\">#</a></h2><p>This API automates the decision-making process for credit approval based on customer data.</p>", "a[href=\"Authentication.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication<a class=\"headerlink\" href=\"#authentication\" title=\"Link to this heading\">#</a></h1><p>The Credit Decision API uses API keys for authentication.</p>", "a[href=\"Credit_Decision.html#endpoint-s\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Endpoint(s):<a class=\"headerlink\" href=\"#endpoint-s\" title=\"Link to this heading\">#</a></h2><h3><span class=\"http-method post\">POST</span> /credit-decision<a class=\"headerlink\" href=\"#post-credit-decision\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#authentication\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication<a class=\"headerlink\" href=\"#authentication\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Credit_Decision.html#query-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Query Parameters:<a class=\"headerlink\" href=\"#query-parameters\" title=\"Link to this heading\">#</a></h3><h4><span class=\"http-method good-response medium\">200</span> Request:<a class=\"headerlink\" href=\"#request\" title=\"Link to this heading\">#</a></h4>", "a[href=\"Credit_Decision.html#request\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Request:<a class=\"headerlink\" href=\"#request\" title=\"Link to this heading\">#</a></h4>", "a[href=\"Credit_Decision.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credit Decision<a class=\"headerlink\" href=\"#credit-decision\" title=\"Link to this heading\">#</a></h1><p>Resource for automating credit approval decisions based on customer data.</p>", "a[href=\"Credit_Decision.html#post-credit-decision\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method post\">POST</span> /credit-decision<a class=\"headerlink\" href=\"#post-credit-decision\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Authentication.html#authentication-examples\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Authentication Examples<a class=\"headerlink\" href=\"#authentication-examples\" title=\"Link to this heading\">#</a></h2><p>See below for how authentication should work in different languages.</p>", "a[href=\"#api-resource-s-and-endpoint-s\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">API Resource(s) and Endpoint(s)<a class=\"headerlink\" href=\"#api-resource-s-and-endpoint-s\" title=\"Link to this heading\">#</a></h3>", "a[href=\"Authentication.html#servers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Servers<a class=\"headerlink\" href=\"#servers\" title=\"Link to this heading\">#</a></h2>", "a[href=\"Credit_Decision.html#response\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method error-response-400 medium\">400</span> Response<a class=\"headerlink\" href=\"#response\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#credit-decision-api-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credit Decision API Documentation<a class=\"headerlink\" href=\"#credit-decision-api-documentation\" title=\"Link to this heading\">#</a></h1><p>Welcome to Credit Decision\u2019s API Documentation.</p>"}
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
