(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71647,e=>{"use strict";var t=e.i(10935),r=e.i(47163);function o({icon:e,children:o,className:i,...a}){return(0,t.jsxs)("div",{className:(0,r.cn)("inline-flex items-center rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-primary/10 transition-all hover:scale-105 hover:shadow-primary/20 mb-8",i),...a,children:[(0,t.jsxs)("div",{className:"relative mr-2 flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute h-full w-full animate-ping rounded-full bg-primary opacity-20 duration-1000"}),(0,t.jsx)("div",{className:"relative rounded-full bg-primary/20 p-1",children:(0,t.jsx)(e,{className:"h-3.5 w-3.5 text-primary"})})]}),(0,t.jsx)("span",{className:"text-sm font-medium tracking-wide",children:o})]})}e.s(["PageHeaderBadge",()=>o])},99304,e=>{"use strict";var t=e.i(25139),r=e.i(69710);let o={some:0,all:1};function i(e,{root:a,margin:s,amount:n,once:l=!1,initial:d=!1}={}){let[c,u]=(0,t.useState)(d);return(0,t.useEffect)(()=>{if(!e.current||l&&c)return;let t={root:a&&a.current||void 0,margin:s,amount:n};return function(e,t,{root:i,margin:a,amount:s="some"}={}){let n=(0,r.resolveElements)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting)if(e.isIntersecting){let r=t(e.target,e);"function"==typeof r?l.set(e.target,r):d.unobserve(e.target)}else"function"==typeof r&&(r(e),l.delete(e.target))})},{root:i,rootMargin:a,threshold:"number"==typeof s?s:o[s]});return n.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(u(!0),l?void 0:()=>u(!1)),t)},[a,e,s,l,n]),c}e.s(["useInView",()=>i],99304)},83850,e=>{"use strict";var t=e.i(10935),r=e.i(25139),o=e.i(58298),i=e.i(64251),a=e.i(99304);function s({children:e,className:s,variant:n,duration:l=.4,delay:d=0,offset:c=6,direction:u="down",inView:p=!1,inViewMargin:m="-50px",blur:h="6px",...g}){let y=(0,r.useRef)(null),f=(0,a.useInView)(y,{once:!0,margin:m}),x={hidden:{["left"===u||"right"===u?"x":"y"]:"right"===u||"down"===u?-c:c,opacity:0,filter:`blur(${h})`},visible:{["left"===u||"right"===u?"x":"y"]:0,opacity:1,filter:"blur(0px)"}};return(0,t.jsx)(o.AnimatePresence,{children:(0,t.jsx)(i.motion.div,{ref:y,initial:"hidden",animate:!p||f?"visible":"hidden",exit:"hidden",variants:n||x,transition:{delay:.04+d,duration:l,ease:"easeOut"},className:s,...g,children:e})})}e.s(["BlurFade",()=>s])},60419,e=>{"use strict";let t=(0,e.i(191).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],60419)},80529,e=>{"use strict";var t=e.i(10935);let r=`
# Privacy Policy

**Last Updated:** December 21, 2025

## 1. Our Commitment to Privacy

At **Al Ahmed Continental Exports**, we operate with a simple principle: **Business relies on trust, not surveillance.**

We respect your privacy and are committed to protecting the personal information you share with us. This policy outlines our straightforward approach to data handling. We do not track your browsing behavior, we do not sell your data, and we do not use cookies for advertising purposes.

---

## 2. No Cookie Policy

**We do not use cookies.**

Unlike many websites that track your movements across the internet, our website is purely informational. We do not use cookies, pixels, or trackers to monitor your behavior, serve targeted ads, or collect analytical data about your personal browsing habits.

When you visit our site, you do so anonymously until you choose to contact us directly.

---

## 3. Information We Collect

We only collect information that you **voluntarily provide** to us when initiating a business inquiry. This typically includes:

*   **Business Contact Details:** Name, Company Name, Email Address, and Phone Number.
*   **Trade Inquiry Data:** Details regarding specific product requirements, destination ports, and volume estimates.

### Why we collect this:
We use this information solely to:
1.  Respond to your specific trade inquiries.
2.  Generate requested quotations (Proforma Invoices).
3.  Execute export documentation (e.g., Certificates of Origin, Bills of Lading) if a contract is established.

---

## 4. Information Sharing

We are an export house, not a data broker. **We do not sell, trade, or rent your personal identification information to others.**

We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above.

### Operational Sharing
In the course of executing a trade order, we may share strictly necessary details with:
*   **Logistics Partners:** Freight forwarders and shipping lines to arrange cargo.
*   **Regulatory Bodies:** Customs authorities (Indian and destination country) for legal compliance.

---

## 5. Data Security

We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and transaction data.

---

## 6. Your Rights

As a user, you have the right to:
*   Request a copy of the business information we hold about you.
*   Request the deletion of your contact details from our internal records (unless required for ongoing legal/trade compliance).

To exercise these rights, please contact our compliance team directly.

---

## 7. Contact Us

If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:

**Al Ahmed Continental Exports**
#579, 32nd 'D' cross, 10th main road, 4th Block
Jayanagar, Bangalore - 560011
Karnataka, India.

**Email:** [sales@aacexports.in](mailto:sales@aacexports.in)
**Phone:** [+91 63633 72655](tel:+916363372655)
`;var o=e.i(4986),i=e.i(12878),a=e.i(71647),s=e.i(60419);let n=(0,e.i(191).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var l=e.i(83850);function d(){return(0,t.jsxs)("div",{className:"min-h-screen bg-background relative pt-32 pb-24",children:[(0,t.jsx)("div",{className:"absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"}),(0,t.jsx)("main",{className:"container mx-auto px-6",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsx)(l.BlurFade,{delay:.1,inView:!0,children:(0,t.jsxs)("div",{className:"text-center mb-16",children:[(0,t.jsx)("div",{className:"flex justify-center mb-6",children:(0,t.jsx)(a.PageHeaderBadge,{icon:s.ShieldCheck,children:"Data Protection"})}),(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-foreground",children:"Privacy Policy"}),(0,t.jsx)("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:'We value your trust. This policy outlines our commitment to privacy and our "No Cookie" approach.'})]})}),(0,t.jsx)(l.BlurFade,{delay:.2,inView:!0,children:(0,t.jsxs)("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm",children:[(0,t.jsx)("article",{className:"prose prose-stone dark:prose-invert max-w-none  prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-secondary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",children:(0,t.jsx)(o.default,{remarkPlugins:[i.default],children:r})}),(0,t.jsxs)("div",{className:"mt-12 pt-8 border-t border-border flex items-center justify-center text-sm text-muted-foreground gap-2",children:[(0,t.jsx)(n,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("span",{children:"Securely processed. No tracking."})]})]})})]})})]})}e.s(["default",()=>d],80529)}]);