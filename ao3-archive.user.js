
 // ==UserScript==
 // @name         AO3 Archive
 // @namespace    ao3-archive
 // @version      1.0
 // @description  AO3 Archive for iPad Safari
 // @match        https://archiveofourown.org/works/*
 // @match        https://www.archiveofourown.org/works/*
 // @run-at       document-idle
 // ==/UserScript==

 (function () {
   "use strict";

   if (document.getElementById("ao3-archive-ipad")) {
     return;
   }

   const title = document.querySelector("h2.title.heading");

   if (!title) return;

   const button = document.createElement("button");

   button.id = "ao3-archive-ipad";
   button.textContent = "AO3 Archive";

   button.style.cssText = `
     background: #480f0f;
     color: white;
     padding: 10px 18px;
     border: none;
     border-radius: 4px;
     cursor: pointer;
   `;

   button.addEventListener("click", () => {
     alert("AO3 Archive is working on iPad!");
   });

   title.before(button);
 })();
