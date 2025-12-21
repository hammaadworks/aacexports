(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71647,e=>{"use strict";var t=e.i(83117),r=e.i(47163);function i({icon:e,children:i,className:n,...o}){return(0,t.jsxs)("div",{className:(0,r.cn)("inline-flex items-center rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-primary/10 transition-all hover:scale-105 hover:shadow-primary/20 mb-8",n),...o,children:[(0,t.jsxs)("div",{className:"relative mr-2 flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute h-full w-full animate-ping rounded-full bg-primary opacity-20 duration-1000"}),(0,t.jsx)("div",{className:"relative rounded-full bg-primary/20 p-1",children:(0,t.jsx)(e,{className:"h-3.5 w-3.5 text-primary"})})]}),(0,t.jsx)("span",{className:"text-sm font-medium tracking-wide",children:i})]})}e.s(["PageHeaderBadge",()=>i])},99304,e=>{"use strict";var t=e.i(23301),r=e.i(69710);let i={some:0,all:1};function n(e,{root:o,margin:s,amount:a,once:l=!1,initial:c=!1}={}){let[d,u]=(0,t.useState)(c);return(0,t.useEffect)(()=>{if(!e.current||l&&d)return;let t={root:o&&o.current||void 0,margin:s,amount:a};return function(e,t,{root:n,margin:o,amount:s="some"}={}){let a=(0,r.resolveElements)(e),l=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting)if(e.isIntersecting){let r=t(e.target,e);"function"==typeof r?l.set(e.target,r):c.unobserve(e.target)}else"function"==typeof r&&(r(e),l.delete(e.target))})},{root:n,rootMargin:o,threshold:"number"==typeof s?s:i[s]});return a.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(u(!0),l?void 0:()=>u(!1)),t)},[o,e,s,l,a]),d}e.s(["useInView",()=>n],99304)},58298,e=>{"use strict";e.i(98885);var t=e.i(83117),r=e.i(23301),i=e.i(65523),n=e.i(50395),o=e.i(61797),s=e.i(89878),a=e.i(12064),l=r,c=e.i(58396);function d(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class u extends l.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=(0,a.isHTMLElement)(e)&&e.offsetWidth||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=r-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:e,isPresent:i,anchorX:n,root:o}){let s=(0,l.useId)(),a=(0,l.useRef)(null),p=(0,l.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=(0,l.useContext)(c.MotionConfigContext),h=function(...e){return r.useCallback(function(...e){return t=>{let r=!1,i=e.map(e=>{let i=d(e,t);return r||"function"!=typeof i||(r=!0),i});if(r)return()=>{for(let t=0;t<i.length;t++){let r=i[t];"function"==typeof r?r():d(e[t],null)}}}}(...e),e)}(a,e?.ref);return(0,l.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:l,right:c}=p.current;if(i||!a.current||!e||!t)return;let d="left"===n?`left: ${l}`:`right: ${c}`;a.current.dataset.motionPopId=s;let u=document.createElement("style");f&&(u.nonce=f);let h=o??document.head;return h.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            top: ${r}px !important;
          }
        `),()=>{h.contains(u)&&h.removeChild(u)}},[i]),(0,t.jsx)(u,{isPresent:i,childRef:a,sizeRef:p,children:l.cloneElement(e,{ref:h})})}let f=({children:e,initial:i,isPresent:o,onExitComplete:a,custom:l,presenceAffectsLayout:c,mode:d,anchorX:u,root:f})=>{let m=(0,n.useConstant)(h),g=(0,r.useId)(),x=!0,b=(0,r.useMemo)(()=>(x=!1,{id:g,initial:i,isPresent:o,custom:l,onExitComplete:e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;a&&a()},register:e=>(m.set(e,!1),()=>m.delete(e))}),[o,m,a]);return c&&x&&(b={...b}),(0,r.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[o]),r.useEffect(()=>{o||m.size||!a||a()},[o]),"popLayout"===d&&(e=(0,t.jsx)(p,{isPresent:o,anchorX:u,root:f,children:e})),(0,t.jsx)(s.PresenceContext.Provider,{value:b,children:e})};function h(){return new Map}var m=e.i(32028);let g=e=>e.key||"";function x(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}let b=({children:e,custom:s,initial:a=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync",propagate:u=!1,anchorX:p="left",root:h})=>{let[b,v]=(0,m.usePresence)(u),y=(0,r.useMemo)(()=>x(e),[e]),w=u&&!b?[]:y.map(g),j=(0,r.useRef)(!0),k=(0,r.useRef)(y),C=(0,n.useConstant)(()=>new Map),[A,E]=(0,r.useState)(y),[P,I]=(0,r.useState)(y);(0,o.useIsomorphicLayoutEffect)(()=>{j.current=!1,k.current=y;for(let e=0;e<P.length;e++){let t=g(P[e]);w.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}},[P,w.length,w.join("-")]);let N=[];if(y!==A){let e=[...y];for(let t=0;t<P.length;t++){let r=P[t],i=g(r);w.includes(i)||(e.splice(t,0,r),N.push(r))}return"wait"===d&&N.length&&(e=N),I(x(e)),E(y),null}let{forceRender:B}=(0,r.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:P.map(e=>{let r=g(e),i=(!u||!!b)&&(y===P||w.includes(r));return(0,t.jsx)(f,{isPresent:i,initial:(!j.current||!!a)&&void 0,custom:s,presenceAffectsLayout:c,mode:d,root:h,onExitComplete:i?void 0:()=>{if(!C.has(r))return;C.set(r,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(B?.(),I(k.current),u&&v?.(),l&&l())},anchorX:p,children:e},r)})})};e.s(["AnimatePresence",()=>b],58298)},83850,e=>{"use strict";var t=e.i(83117),r=e.i(23301),i=e.i(58298),n=e.i(64251),o=e.i(99304);function s({children:e,className:s,variant:a,duration:l=.4,delay:c=0,offset:d=6,direction:u="down",inView:p=!1,inViewMargin:f="-50px",blur:h="6px",...m}){let g=(0,r.useRef)(null),x=(0,o.useInView)(g,{once:!0,margin:f}),b={hidden:{["left"===u||"right"===u?"x":"y"]:"right"===u||"down"===u?-d:d,opacity:0,filter:`blur(${h})`},visible:{["left"===u||"right"===u?"x":"y"]:0,opacity:1,filter:"blur(0px)"}};return(0,t.jsx)(i.AnimatePresence,{children:(0,t.jsx)(n.motion.div,{ref:g,initial:"hidden",animate:!p||x?"visible":"hidden",exit:"hidden",variants:a||b,transition:{delay:.04+c,duration:l,ease:"easeOut"},className:s,...m,children:e})})}e.s(["BlurFade",()=>s])},69472,e=>{"use strict";var t=e.i(83117);let r=`
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
`;var i=e.i(4986),n=e.i(12878),o=e.i(71647);let s=(0,e.i(191).default)("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]);var a=e.i(25364),l=e.i(83850);function c(){return(0,t.jsxs)("div",{className:"min-h-screen bg-background relative pt-32 pb-24",children:[(0,t.jsx)("div",{className:"absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"}),(0,t.jsx)("main",{className:"container mx-auto px-6",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsx)(l.BlurFade,{delay:.1,inView:!0,children:(0,t.jsxs)("div",{className:"text-center mb-16",children:[(0,t.jsx)("div",{className:"flex justify-center mb-6",children:(0,t.jsx)(o.PageHeaderBadge,{icon:s,children:"Legal Agreement"})}),(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-foreground",children:"Terms of Service"}),(0,t.jsx)("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:"Please review the terms and conditions that govern your use of our website and services."})]})}),(0,t.jsx)(l.BlurFade,{delay:.2,inView:!0,children:(0,t.jsxs)("div",{className:"bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm",children:[(0,t.jsx)("article",{className:"prose prose-stone dark:prose-invert max-w-none  prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-secondary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic",children:(0,t.jsx)(i.default,{remarkPlugins:[n.default],children:r})}),(0,t.jsxs)("div",{className:"mt-12 pt-8 border-t border-border flex items-center justify-center text-sm text-muted-foreground gap-2",children:[(0,t.jsx)(a.FileText,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("span",{children:"Last reviewed: December 2025"})]})]})})]})})]})}e.s(["default",()=>c],69472)}]);