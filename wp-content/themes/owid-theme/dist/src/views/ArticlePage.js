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
exports.ArticlePage = function (props) {
    var entries = props.entries, post = props.post, formattingOptions = props.formattingOptions;
    var authorsText = formatting_1.formatAuthors(post.authors, true);
    var pageTitle = post.title;
    var canonicalUrl = settings_1.BAKED_URL + "/" + post.slug;
    var pageDesc = post.excerpt;
    var publishedYear = post.modifiedDate.getFullYear();
    var allEntries = _.flatten(_.values(entries).map(function (c) { return c.entries; }));
    var isEntry = _.includes(allEntries.map(function (e) { return e.slug; }), post.slug);
    var classes = ["ArticlePage"];
    if (formattingOptions.bodyClassName)
        classes.push(formattingOptions.bodyClassName);
    return React.createElement("html", null,
        React.createElement(Head_1.Head, { pageTitle: pageTitle, pageDesc: pageDesc, canonicalUrl: canonicalUrl, imageUrl: post.imageUrl }, isEntry && React.createElement(CitationMeta_1.CitationMeta, { title: pageTitle, authors: post.authors, date: post.modifiedDate })),
        React.createElement("body", { className: classes.join(" ") },
            React.createElement(SiteHeader_1.SiteHeader, null),
            React.createElement("main", null,
                React.createElement("article", { className: "page" },
                    React.createElement("header", { className: "articleHeader" },
                        React.createElement("h1", { className: "entry-title" }, post.title),
                        React.createElement("div", { className: "authors-byline" },
                            React.createElement("a", { href: "/about/#team" },
                                "by ",
                                authorsText),
                            React.createElement("a", { className: "citation-note js-only" },
                                React.createElement("sup", null, "[cite]"))),
                        React.createElement("div", { className: "citation-guideline" },
                            "Our articles and data visualizations rely on work from many different people and organizations. When citing this entry, please also cite the underlying data sources. This entry can be cited as:",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            authorsText,
                            " (",
                            publishedYear,
                            ") - \"",
                            pageTitle,
                            "\". ",
                            React.createElement("em", null, "Published online at OurWorldInData.org."),
                            " Retrieved from: '",
                            canonicalUrl,
                            "' [Online Resource]")),
                    React.createElement("div", { className: "contentContainer" },
                        post.tocHeadings.length > 0 && React.createElement("aside", { className: "entry-sidebar" },
                            React.createElement("nav", { className: "entry-toc" },
                                React.createElement("ul", null,
                                    React.createElement("li", null,
                                        React.createElement("a", { href: "#" }, pageTitle)),
                                    post.tocHeadings.map(function (heading, i) {
                                        return React.createElement("li", { key: i, className: heading.isSubheading ? "subsection" : "section" },
                                            React.createElement("a", { href: "#" + heading.slug }, heading.text));
                                    })))),
                        React.createElement("div", { className: "contentAndFootnotes" },
                            React.createElement("div", { className: "article-content", dangerouslySetInnerHTML: { __html: post.html } }),
                            post.footnotes.length > 0 && React.createElement("footer", { className: "article-footer" },
                                React.createElement("h3", { id: "footnotes" }, "Footnotes"),
                                React.createElement("ol", { className: "footnotes" }, post.footnotes.map(function (footnote, i) {
                                    return React.createElement("li", { key: "note-" + (i + 1), id: "note-" + (i + 1) },
                                        React.createElement("p", { dangerouslySetInnerHTML: { __html: footnote } }));
                                }))))))),
            React.createElement("div", { id: "wpadminbar", style: { display: 'none' } },
                React.createElement("div", { className: "quicklinks", id: "wp-toolbar", role: "navigation", "aria-label": "Toolbar" },
                    React.createElement("ul", { id: "wp-admin-bar-root-default", className: "ab-top-menu" },
                        React.createElement("li", { id: "wp-admin-bar-site-name", className: "menupop" },
                            React.createElement("a", { className: "ab-item", "aria-haspopup": "true", href: "/wp-admin/" }, "Wordpress")),
                        React.createElement("li", { id: "wp-admin-bar-edit" },
                            React.createElement("a", { className: "ab-item", href: settings_1.WORDPRESS_URL + "/wp-admin/post.php?post=" + post.id + "&action=edit" }, "Edit Page"))))),
            React.createElement(SiteFooter_1.SiteFooter, null)));
};
//# sourceMappingURL=ArticlePage.js.map