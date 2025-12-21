(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71647,e=>{"use strict";var t=e.i(10935),r=e.i(47163);function i({icon:e,children:i,className:o,...a}){return(0,t.jsxs)("div",{className:(0,r.cn)("inline-flex items-center rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-primary/10 transition-all hover:scale-105 hover:shadow-primary/20 mb-8",o),...a,children:[(0,t.jsxs)("div",{className:"relative mr-2 flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute h-full w-full animate-ping rounded-full bg-primary opacity-20 duration-1000"}),(0,t.jsx)("div",{className:"relative rounded-full bg-primary/20 p-1",children:(0,t.jsx)(e,{className:"h-3.5 w-3.5 text-primary"})})]}),(0,t.jsx)("span",{className:"text-sm font-medium tracking-wide",children:i})]})}e.s(["PageHeaderBadge",()=>i])},99304,e=>{"use strict";var t=e.i(25139),r=e.i(69710);let i={some:0,all:1};function o(e,{root:a,margin:n,amount:s,once:l=!1,initial:d=!1}={}){let[c,u]=(0,t.useState)(d);return(0,t.useEffect)(()=>{if(!e.current||l&&c)return;let t={root:a&&a.current||void 0,margin:n,amount:s};return function(e,t,{root:o,margin:a,amount:n="some"}={}){let s=(0,r.resolveElements)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting)if(e.isIntersecting){let r=t(e.target,e);"function"==typeof r?l.set(e.target,r):d.unobserve(e.target)}else"function"==typeof r&&(r(e),l.delete(e.target))})},{root:o,rootMargin:a,threshold:"number"==typeof n?n:i[n]});return s.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(u(!0),l?void 0:()=>u(!1)),t)},[a,e,n,l,s]),c}e.s(["useInView",()=>o],99304)},83850,e=>{"use strict";var t=e.i(10935),r=e.i(25139),i=e.i(58298),o=e.i(64251),a=e.i(99304);function n({children:e,className:n,variant:s,duration:l=.4,delay:d=0,offset:c=6,direction:u="down",inView:p=!1,inViewMargin:m="-50px",blur:h="6px",...f}){let g=(0,r.useRef)(null),x=(0,a.useInView)(g,{once:!0,margin:m}),b={hidden:{["left"===u||"right"===u?"x":"y"]:"right"===u||"down"===u?-c:c,opacity:0,filter:`blur(${h})`},visible:{["left"===u||"right"===u?"x":"y"]:0,opacity:1,filter:"blur(0px)"}};return(0,t.jsx)(i.AnimatePresence,{children:(0,t.jsx)(o.motion.div,{ref:g,initial:"hidden",animate:!p||x?"visible":"hidden",exit:"hidden",variants:s||b,transition:{delay:.04+d,duration:l,ease:"easeOut"},className:n,...f,children:e})})}e.s(["BlurFade",()=>n])},69472,e=>{"use strict";var t=e.i(10935);let r=`
# Terms of Service

**Effective Date:** December 21, 2025

Welcome to **Al Ahmed Continental Exports**. By accessing our website and engaging with our services, you agree to comply with the following terms and conditions.

---

## 1. General Provisions

**Al Ahmed Continental Exports** ("we", "us", "our") operates this website to provide information about our export products (Natural Stones, Agriculture, General Trading) and services.

*   **Acceptance:** By using this site, you signify your acceptance of these terms.
*   **Modification:** We reserve the right to update these terms at any time. Continued use of the site implies acceptance of changes.

---

## 2. Product Information & Disclaimers

While we strive for precision, international trade involves dynamic variables.

*   **Product Specifications:** Descriptions, grades, and specifications of products (e.g., Granite slabs, Rice varieties) on this website are for informational purposes. Final specifications will be defined in the specific **Sales Contract** or **Proforma Invoice**.
*   **Pricing:** We do not display live pricing due to market fluctuations. Quotes provided via email or formal invoices are valid only for the duration specified in those documents.
*   **Availability:** All products are subject to availability and export regulations at the time of order.

---

## 3. Intellectual Property

All content on this website—including text, product photography, logos, and downloadable catalogs—is the property of **Al Ahmed Continental Exports** unless otherwise noted.

*   **Authorized Use:** You may view, download, and print catalogs for personal or commercial sourcing purposes.
*   **Prohibited Use:** You may not modify, copy, distribute, or use our content for competing commercial purposes without prior written consent.

---

## 4. Liability Limitation

To the fullest extent permitted by law:
*   We shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use this website.
*   We do not warrant that this website will be uninterrupted or error-free, though we strive for 99.9% uptime.

---

## 5. Trade & Export Compliance

All transactions initiated through inquiries on this site are subject to:
*   **Indian Export Laws:** Including regulations by DGFT (Directorate General of Foreign Trade) and Customs.
*   **International Incoterms:** All sales are governed by Incoterms\xae 2020 (e.g., FOB, CIF) as agreed in specific contracts.

---

## 6. Governing Law

Any claim relating to Al Ahmed Continental Exports' website shall be governed by the laws of the State of **Karnataka, India** without regard to its conflict of law provisions.

**Dispute Resolution:**
Any disputes arising shall be subject to the exclusive jurisdiction of the courts located in **Bangalore, Karnataka**.

---

## 7. Contact Information

For legal inquiries or questions regarding these terms:

**Al Ahmed Continental Exports**
#579, 32nd 'D' cross, 10th main road, 4th Block
Jayanagar, Bangalore - 560011
Karnataka, India.

**Email:** [info@aacexports.in](mailto:info@aacexports.in)
`;var i=e.i(4986),o=e.i(12878),a=e.i(71647);let n=(0,e.i(191).default)("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]);var s=e.i(25364),l=e.i(83850);function d(){return(0,t.jsxs)("div",{className:"min-h-screen bg-background relative pt-32 pb-24",children:[(0,t.jsx)("div",{className:"absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"}),(0,t.jsx)("main",{className:"container mx-auto px-6",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsx)(l.BlurFade,{delay:.1,inView:!0,children:(0,t.jsxs)("div",{className:"text-center mb-16",children:[(0,t.jsx)("div",{className:"flex justify-center mb-6",children:(0,t.jsx)(a.PageHeaderBadge,{icon:n,children:"Legal Agreement"})}),(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-foreground",children:"Terms of Service"}),(0,t.jsx)("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:"Please review the terms and conditions that govern your use of our website and services."})]})}),(0,t.jsx)(l.BlurFade,{delay:.2,inView:!0,children:(0,t.jsxs)("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm",children:[(0,t.jsx)("article",{className:"prose prose-stone dark:prose-invert max-w-none  prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-secondary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",children:(0,t.jsx)(i.default,{remarkPlugins:[o.default],children:r})}),(0,t.jsxs)("div",{className:"mt-12 pt-8 border-t border-border flex items-center justify-center text-sm text-muted-foreground gap-2",children:[(0,t.jsx)(s.FileText,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("span",{children:"Last reviewed: December 2025"})]})]})})]})})]})}e.s(["default",()=>d],69472)}]);