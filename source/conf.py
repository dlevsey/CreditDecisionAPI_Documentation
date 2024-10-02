# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'CreditDecisionAPI'
version = '1.0'
copyright = '2024, '
author = 'Dylan Levsey'
release = '1'
import os
import sys
from docutils import nodes, utils
from docutils.statemachine import ViewList

from docutils.parsers.rst import Directive, directives, roles
import re

from jinja2 import Environment, FileSystemLoader


# Custom role for poss-param-values
def poss_param_values_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    # Create an inline node with the text and class
    node = nodes.inline(rawsource=rawtext, text=text, classes=['poss-param-values'])
    return [node], []

# Custom directive for parameter-item

# Custom directive for parameter-item

# Custom directive for parameter-item
class ParameterItem(Directive):
    has_content = True
    option_spec = {
        'type': directives.unchanged_required,
        'requirement': directives.unchanged,
    }
    required_arguments = 1  # parameter name

    def run(self):
        parameter_name = self.arguments[0]
        parameter_type = self.options.get('type', '')
        requirement = self.options.get('requirement', 'Optional')

        # Create the main container
        container = nodes.container(classes=['parameter-item'])

        # Name and requirement section
        name_and_requirement = nodes.container(classes=['name-and-requirement'])
        name_span = nodes.inline(text=parameter_name, classes=['parameter-name'])
        type_span = nodes.inline(text=parameter_type, classes=['parameter-type'])
        requirement_span = nodes.inline(text=requirement, classes=['parameter-requirement-optional-font'])
        name_and_requirement += [name_span, type_span, requirement_span]
        container += name_and_requirement

        # Process content
        # Create a ViewList from self.content
        content = ViewList()
        for i, line in enumerate(self.content):
            # Replace text within [] with poss-param-values role
            def replace_brackets(match):
                content = match.group(1)
                return f':poss-param-values:`{content}`'
            line = re.sub(r'\[([^\]]+)\]', replace_brackets, line)
            content.append(line, f'<{self.name}>', i)

        # Parse the content into nodes
        self.state.nested_parse(content, self.content_offset, container)

        # Add bottom bar (if needed)
        bottom_bar = nodes.container(classes=['parameter-bottom-bar'])
        container += bottom_bar

        return [container]

# Custom directive for properties container
class Properties(Directive):
    has_content = True

    def run(self):
        # Create a container for all properties
        container = nodes.container(classes=['properties-container'])
        # Parse the content
        content_list = ViewList()
        for i, line in enumerate(self.content):
            content_list.append(line, self.content_offset + i)

        self.state.nested_parse(content_list, self.content_offset, container)
        return [container]


myst_roles = [
    "httpmethod-small-get",
    "httpmethod-small-post",
    "httpmethod-small-put",
    "httpmethod-medium-get",
    "httpmethod-medium-post",
    "httpmethod-medium-put",
    "httpmethod",
    "smaller-titles",
    "medium-titles",
    "httpmethod-good-response-medium",
    "scenario",
    "statuscode-400",
    "statuscode-401",
    "statuscode-500"
]

extensions = [
    'sphinx.ext.intersphinx',
    'sphinx.ext.autosectionlabel',
    'rst2pdf.pdfbuilder',
    'myst_parser',
    'sphinx.ext.todo',
    'sphinx.builders.linkcheck',
    'sphinxcontrib.httpdomain',
    'hoverxref.extension',
    'sphinx_copybutton',
    'sphinx_togglebutton',
    'sphinx_tabs.tabs'
]

todo_include_todos = True
language = 'en'

html_logo = "_static/Sardine.png"

templates_path = ['_templates']
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

# html_theme = 'alabaster'

html_theme = 'sphinx_book_theme'

html_static_path = ['_static']



from docutils import nodes
from docutils.parsers.rst import roles


def httpmethod_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    method_type = text.lower()  # Convert the method type to lowercase (get, post, put)
    classes = ["http-method", method_type]  # Create a list of classes
    node = nodes.inline(rawtext, text, classes=classes)
    return [node], []

def httpmethod_good_response_medium_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "good-response", "medium"])
    return [node], []

def httpmethod_get_small_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "get", "small"])
    return [node], []

def httpmethod_post_small_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "post", "small"])
    return [node], []

def httpmethod_put_small_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "put", "small"])
    return [node], []

def httpmethod_get_medium_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "get", "medium"])
    return [node], []

def httpmethod_post_medium_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "post", "medium"])
    return [node], []

def httpmethod_put_medium_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "put", "medium"])
    return [node], []

def smaller_titles(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["smaller-titles"])
    return [node], []

def medium_titles(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["medium-titles"])
    return [node], []

def scenario(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["scenario"])
    return [node], []

def statuscode_400_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(
        rawtext,       # Corrected parameter
        text,
        classes=["http-method", "error-response-400", "medium"]
    )
    return [node], []

def statuscode_401_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "error-response-401", "medium"])
    return [node], []

def statuscode_500_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(rawtext, text, classes=["http-method", "error-response-500", "medium"])
    return [node], []


roles.register_local_role("httpmethod-small-get", httpmethod_get_small_role)
roles.register_local_role("httpmethod-small-post", httpmethod_post_small_role)
roles.register_local_role("httpmethod-small-put", httpmethod_put_small_role)


roles.register_local_role("httpmethod-medium-get", httpmethod_get_medium_role)
roles.register_local_role("httpmethod-medium-post", httpmethod_post_medium_role)
roles.register_local_role("httpmethod-medium-put", httpmethod_put_medium_role)

roles.register_local_role("httpmethod", httpmethod_role)

roles.register_local_role("smaller-titles", smaller_titles)
roles.register_local_role("medium-titles", medium_titles)
roles.register_local_role("httpmethod-good-response-medium", httpmethod_good_response_medium_role)  
roles.register_local_role("scenario", scenario)




#def generate_parameter_html(name, type, requirement, description):
   # template = jinja_env.get_template('parameter_template.html')
 #   return template.render(
   #     parameter_name=name,
   #     parameter_type=type,
    #    requirement_status=requirement,
  #  #    parameter_description=description
  #  )

# Add these lines to specify the source file type and encoding
source_suffix = '.rst'
source_encoding = 'utf-8-sig'

html_css_files = [
    'my_custom.css',
  
]


html_context= {
 "default_mode": "light",
}


exclude_patterns = ['_build',
                    'definitions/*', 
                    'optional/*', 
                    'required/*', 
                    'definitions_2/*',
                    '_static/*',]

html_show_search_summary = True 
html_search_options = {
    'type': 'default',
    
}


autosectionlabel_prefix_document = True


tippy_rtd_urls = [
    "https://www.sphinx-doc.org/en/master/",
    "https://transferonline.com/"
]

myst_enable_extensions = [
    "attrs_inline",
    "colon_fence",
    "tasklist"


]


tml_theme_options = {
    "repository_url": "https://github.com/levseyd01/SOLO_Review",
    "use_source_button": True,
    "use_edit_page_button": True,
    "path_to_docs": "source",
    "repository_branch": "dev",
    "use_repository_button": True,
    "use_issues_button": True,
    "collapse_navbar": False,
    "use_download_button": True
}


def setup(app):
    app.add_directive('parameter-item', ParameterItem)
    roles.register_canonical_role('poss-param-values', poss_param_values_role)
    app.add_css_file('_static/my_custom.css')

    app.add_role("httpmethod-small-get", httpmethod_get_small_role)
    app.add_role("httpmethod-small-post", httpmethod_post_small_role)
    app.add_role("httpmethod-small-put", httpmethod_put_small_role)

    app.add_role("httpmethod-medium-get", httpmethod_get_medium_role)
    app.add_role("httpmethod-medium-post", httpmethod_post_medium_role)
    app.add_role("httpmethod-medium-put", httpmethod_put_medium_role)

    app.add_role("httpmethod", httpmethod_role)

    app.add_role("smaller-titles", smaller_titles)
    app.add_role("medium-titles", medium_titles)
    app.add_role("httpmethod-good-response-medium", httpmethod_good_response_medium_role)
    app.add_role("scenario", scenario)

    app.add_role('statuscode-400', statuscode_400_role)
    app.add_role('statuscode-401', statuscode_401_role)
    app.add_role('statuscode-500', statuscode_500_role)