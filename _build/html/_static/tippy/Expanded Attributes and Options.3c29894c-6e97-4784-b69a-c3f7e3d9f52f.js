selector_to_html = {"a[href=\"#options-for-filtersecuritytype\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Options for FilterSecurityType<a class=\"headerlink\" href=\"#options-for-filtersecuritytype\" title=\"Link to this heading\">#</a></h3><h4>Child Attribute: <strong>SecurityTypeCode</strong><a class=\"headerlink\" href=\"#child-attribute-securitytypecode\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#child-attribute-securityseriescode\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Child Attribute: <strong>SecuritySeriesCode</strong><a class=\"headerlink\" href=\"#child-attribute-securityseriescode\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#fitersecuritytype-example-usage\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">FiterSecurityType Example Usage<a class=\"headerlink\" href=\"#fitersecuritytype-example-usage\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#child-attribute-securitytypecode\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Child Attribute: <strong>SecurityTypeCode</strong><a class=\"headerlink\" href=\"#child-attribute-securitytypecode\" title=\"Link to this heading\">#</a></h4>", "a[href=\"#labeltype-options\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">labelType Options<a class=\"headerlink\" href=\"#labeltype-options\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#filtersecuritytype-and-securitytype-expanded\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">FilterSecurityType (and SecurityType) Expanded:<a class=\"headerlink\" href=\"#filtersecuritytype-and-securitytype-expanded\" title=\"Link to this heading\">#</a></h2><p><strong>Description</strong>: Allows you to filter results based on the type and series of securities.</p><p><strong>Data Type</strong>: Object, containing fields <cite>SecurityTypeCode</cite> and <cite>SecuritySeriesCode</cite>.</p>", "a[href=\"#expanded-attributes-and-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Expanded Attributes and Options<a class=\"headerlink\" href=\"#expanded-attributes-and-options\" title=\"Link to this heading\">#</a></h1><p>The <strong>Expanded Attributes and Options</strong> section is designed to elaborate on the following:</p>", "a[href=\"#labeltype\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">labelType<a class=\"headerlink\" href=\"#labeltype\" title=\"Link to this heading\">#</a></h3><p><strong>Description</strong>: Allows you to filter results based on the type of label.</p><p><strong>Data Type</strong>: String.</p>"}
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
