selector_to_html = {"a[href=\"#response\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Response:<a class=\"headerlink\" href=\"#response\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#get-proxy-getlist\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method get\">GET</span> Proxy/GetList<a class=\"headerlink\" href=\"#get-proxy-getlist\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieves a list of proxies.</p>", "a[href=\"#request-body\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Request Body:<a class=\"headerlink\" href=\"#request-body\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Description:<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p>Generates details for a specific proxy.</p>", "a[href=\"#post-proxy-generateproxydetails\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method post\">POST</span> Proxy/GenerateProxyDetails<a class=\"headerlink\" href=\"#post-proxy-generateproxydetails\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p>Generates details for a specific proxy.</p>", "a[href=\"#query-parameters\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Query Parameters:<a class=\"headerlink\" href=\"#query-parameters\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#description\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieves a list of proxies.</p>", "a[href=\"#endpoints\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Endpoints:<a class=\"headerlink\" href=\"#endpoints\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#get-proxy-list\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method get\">GET</span> Proxy/GetList<a class=\"headerlink\" href=\"#get-proxy-getlist\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#description\" title=\"Link to this heading\">#</a></h3><p>Retrieves a list of proxies.</p>", "a[href=\"#example-request\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Example Request:<a class=\"headerlink\" href=\"#example-request\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Example Request:<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#proxy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Proxy<a class=\"headerlink\" href=\"#proxy\" title=\"Link to this heading\">#</a></h1><p>Resource and endpoints for proxy related operations.</p>", "a[href=\"#id3\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method good-response medium\">200</span> Response:<a class=\"headerlink\" href=\"#id3\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#get-generate-proxy-details\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"http-method post\">POST</span> Proxy/GenerateProxyDetails<a class=\"headerlink\" href=\"#post-proxy-generateproxydetails\" title=\"Link to this heading\">#</a></h2><h3>Description:<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h3><p>Generates details for a specific proxy.</p>"}
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
