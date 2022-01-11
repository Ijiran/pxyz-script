// ==UserScript==
// @name         Juejin 春节新装
// @name:zh-CN   掘金春节换装
// @namespace    https://github.com/Ijiran/pxyz-script
// @version      0.1
// @description  Juejin
// @description:zh-CN   给掘金网站换上新装，贴上两幅对联
// @author       curly brackets
// @match        https://juejin.cn/*
// @license      MIT License
// @grant        none
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function () {
         var duilianHtml = "<div id=\"juejin-duilian-left\" style=\"position: fixed;left:0%;bottom: 26%;z-index: 999;\">\n" +
                "    <img src=\"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/510788335a224e45b4f694e23dcb3e6f~tplv-k3u1fbpfcp-watermark.image\" alt=\"\" style=\"width: 90px;\">\n" +
                "</div>\n" +
                "\n" +
                "<div id=\"juejin-duilian-right\" style=\"position: fixed;right:0%;bottom: 26%;z-index: 999;\">\n" +
                "    <img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/586b5188c665414a8088b6b7450aa6fa~tplv-k3u1fbpfcp-watermark.image\" alt=\"\" style=\"width: 90px;\">\n" +
                "</div>";

    $(".global-component-box").append(duilianHtml);
    })

})();