"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = require("../settings");
var React = require("react");
var Head_1 = require("./Head");
var CitationMeta_1 = require("./CitationMeta");
var SiteHeader_1 = require("./SiteHeader");
var SiteFooter_1 = require("./SiteFooter");
var formatting_1 = require("../formatting");
var _ = require("lodash");
exports.LongFormPage = function (props) {
    var entries = props.entries, post = props.post, formattingOptions = props.formattingOptions;
    var authorsText = formatting_1.formatAuthors(post.authors, true);
    var pageTitle = post.title;
    var canonicalUrl = settings_1.BAKED_URL + "/" + post.slug;
    var pageDesc = post.excerpt;
    var publishedYear = post.modifiedDate.getFullYear();
    var allEntries = _.flatten(_.values(entries).map(function (c) { return c.entries; }));
    var isEntry = _.includes(allEntries.map(function (e) { return e.slug; }), post.slug);
    var classes = ["LongFormPage"];
    if (formattingOptions.bodyClassName)
        classes.push(formattingOptions.bodyClassName);
    var bibtex = "@article{owid" + post.slug.replace(/-/g, '') + ",\n    author = {" + authorsText + "},\n    title = {" + pageTitle + "},\n    journal = {Our World in Data},\n    year = {" + publishedYear + "},\n    note = {" + canonicalUrl + "}\n}";
    return React.createElement("html", null,
        React.createElement(Head_1.Head, { pageTitle: pageTitle, pageDesc: pageDesc, canonicalUrl: canonicalUrl, imageUrl: post.imageUrl }, isEntry && React.createElement(CitationMeta_1.CitationMeta, { title: pageTitle, authors: post.authors, date: post.modifiedDate, canonicalUrl: canonicalUrl })),
        React.createElement("body", { className: classes.join(" ") },
            React.createElement(SiteHeader_1.SiteHeader, null),
            React.createElement("main", null,
                React.createElement("article", { className: "page" },
                    React.createElement("header", { className: "articleHeader" },
                        React.createElement("h1", { className: "entry-title" }, post.title),
                        React.createElement("div", { className: "authors-byline" },
                            React.createElement("a", { href: "/about/#team" },
                                "by ",
                                authorsText))),
                    React.createElement("div", { className: "contentContainer" },
                        post.tocHeadings.length > 0 && React.createElement("aside", { className: "entry-sidebar" },
                            React.createElement("nav", { className: "entry-toc" },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, pageTitle)),
                                    post.tocHeadings.map(function (heading, i) {
                                        return React.createElement("li", { key: i, className: heading.isSubheading ? "subsection" : "section" + ((!post.tocHeadings[i + 1] || !post.tocHeadings[i + 1].isSubheading) ? " nosubs" : "") },
                                            React.createElement("a", { href: "#" + heading.slug }, heading.text));
                                    }),
                                    post.acknowledgements && React.createElement("li", { key: "acknowledgements", className: "section nosubs" },
                                        React.createElement("a", { href: "#acknowledgements" }, "Acknowledgements")),
                                    post.footnotes.length ? React.createElement("li", { key: "footnotes", className: "section nosubs" },
                                        React.createElement("a", { href: "#footnotes" }, "Footnotes")) : undefined,
                                    isEntry && React.createElement("li", { key: "citation", className: "section nosubs" },
                                        React.createElement("a", { href: "#citation" }, "Citation"))))),
                        React.createElement("div", { className: "contentAndFootnotes" },
                            React.createElement("div", { className: "article-content", dangerouslySetInnerHTML: { __html: post.html } }),
                            React.createElement("footer", { className: "article-footer" },
                                post.acknowledgements && React.createElement(React.Fragment, null,
                                    React.createElement("h3", { id: "acknowledgements" }, "Acknowledgements"),
                                    React.createElement("section", { dangerouslySetInnerHTML: { __html: post.acknowledgements } })),
                                post.footnotes.length ? React.createElement(React.Fragment, null,
                                    React.createElement("h3", { id: "footnotes" }, "Footnotes"),
                                    React.createElement("ol", { className: "footnotes" }, post.footnotes.map(function (footnote, i) {
                                        return React.createElement("li", { key: "note-" + (i + 1), id: "note-" + (i + 1) },
                                            React.createElement("p", { dangerouslySetInnerHTML: { __html: footnote } }));
                                    }))) : undefined,
                                isEntry && React.createElement(React.Fragment, null,
                                    React.createElement("h3", { id: "citation" }, "Citation"),
                                    React.createElement("p", null, "Our articles and data visualizations rely on work from many different people and organizations. When citing this entry, please also cite the underlying data sources. This entry can be cited as:"),
                                    React.createElement("pre", { className: "citation" },
                                        authorsText,
                                        " (",
                                        publishedYear,
                                        ") - \"",
                                        pageTitle,
                                        "\". ",
                                        React.createElement("em", null, "Published online at OurWorldInData.org."),
                                        " Retrieved from: '",
                                        canonicalUrl,
                                        "' [Online Resource]"),
                                    React.createElement("p", null, "BibTeX citation"),
                                    React.createElement("pre", { className: "citation" }, bibtex))))))),
            React.createElement("div", { id: "wpadminbar", style: { display: 'none' } },
                React.createElement("div", { className: "quicklinks", id: "wp-toolbar", role: "navigation", "aria-label": "Toolbar" },
                    React.createElement("ul", { id: "wp-admin-bar-root-default", className: "ab-top-menu" },
                        React.createElement("li", { id: "wp-admin-bar-site-name", className: "menupop" },
                            React.createElement("a", { className: "ab-item", "aria-haspopup": "true", href: "/wp-admin/" }, "Wordpress")),
                        " ",
                        React.createElement("li", { id: "wp-admin-bar-edit" },
                            React.createElement("a", { className: "ab-item", href: settings_1.WORDPRESS_URL + "/wp-admin/post.php?post=" + post.id + "&action=edit" }, "Edit Page"))))),
            React.createElement(SiteFooter_1.SiteFooter, null)));
};
//# sourceMappingURL=LongFormPage.js.map