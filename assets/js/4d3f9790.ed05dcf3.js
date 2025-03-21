"use strict";(self.webpackChunkbyeong=self.webpackChunkbyeong||[]).push([[9051],{7462:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"CompterScience/Network/Network Layer","title":"Network Layer","description":"Router\uc5d0\uc11c \ud558\ub294 \uc77c","source":"@site/docs/CompterScience/Network/Network Layer.mdx","sourceDirName":"CompterScience/Network","slug":"/CompterScience/Network/Network Layer","permalink":"/byeong/docs/CompterScience/Network/Network Layer","draft":false,"unlisted":false,"editUrl":"https://github.com/chan-byeong/byeong/docs/CompterScience/Network/Network Layer.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Application Layer","permalink":"/byeong/docs/CompterScience/Network/Application Layer"},"next":{"title":"Transport Layer","permalink":"/byeong/docs/CompterScience/Network/Transport Layer"}}');var d=t(4848),s=t(8453);const i={},c="Network Layer",l={},h=[{value:"Router\uc5d0\uc11c \ud558\ub294 \uc77c",id:"router\uc5d0\uc11c-\ud558\ub294-\uc77c",level:2},{value:"Forwarding",id:"forwarding",level:3},{value:"Routing",id:"routing",level:3}];function o(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"network-layer",children:"Network Layer"})}),"\n",(0,d.jsx)(r.h2,{id:"router\uc5d0\uc11c-\ud558\ub294-\uc77c",children:"Router\uc5d0\uc11c \ud558\ub294 \uc77c"}),"\n",(0,d.jsx)(r.h3,{id:"forwarding",children:"Forwarding"}),"\n",(0,d.jsx)(r.p,{children:"\ud328\ud0b7\uc758 \ubaa9\uc801\uc9c0\uc5d0 \uc54c\ub9de\uc740 \ub77c\uc6b0\ud130\ub85c \ud328\ud0b7\uc744 \ubcf4\ub0b4\ub294 \uc77c."}),"\n",(0,d.jsx)(r.p,{children:"\uc774\ub54c \ub77c\uc6b0\ud130 \ub0b4\ubd80\uc5d0\ub294 Forwarding Table\uc774 \uc874\uc7ac\ud558\uba70, \uc774 \ud14c\uc774\ube14\uc744 \ud1b5\ud574 \ud328\ud0b7\uc758 \ubaa9\uc801\uc9c0\uc5d0 \uc54c\ub9de\uc740 \ub77c\uc6b0\ud130\ub97c \ucc3e\uc544 \ud328\ud0b7\uc744 \uc804\uc1a1\ud55c\ub2e4."}),"\n",(0,d.jsxs)(r.p,{children:["\ubaa9\uc801\uc9c0\uc640 \uc8fc\uc18c\ub97c \ub9e4\ud551\ud560 \ub54c\ub294 ",(0,d.jsx)(r.code,{children:"Longest Prefix Matching"}),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4."]}),"\n",(0,d.jsxs)(t,{children:[(0,d.jsx)("summary",{children:"Longest Prefix Matching"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Destination Address Range"}),(0,d.jsx)(r.th,{children:"Link Interface"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"11001000 00010111 00010*** ********"}),(0,d.jsx)(r.td,{children:"0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"11001000 00010111 00011000 ********"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"11001000 00010111 00011*** ********"}),(0,d.jsx)(r.td,{children:"2"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"otherwise"}),(0,d.jsx)(r.td,{children:"3"})]})]})]}),(0,d.jsx)(r.p,{children:"\uc704\uc640 \uac19\uc740 Forwarding Table\uc774 \uc788\ub2e4\uace0 \ud558\uc790."}),(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"11001000 00010111 00011000 10101010"})," \ubaa9\uc801\uc9c0 \uc8fc\uc18c\ub97c \uac00\uc9c4 \ud328\ud0b7\uc774 \ub3c4\ucc29\ud588\uc744 \ub54c \uc5b4\ub5a4 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc804\uc1a1\ub420\uae4c?"]}),(0,d.jsx)(r.p,{children:"\ud14c\uc774\ube14\uc758 Range \uac12\uacfc \ube44\uad50\ud558\uba74\uc11c \uac00\uc7a5 \ub9e4\uce58\uac00 \ub9ce\uc774 \ub41c \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc804\uc1a1\ub41c\ub2e4."}),(0,d.jsx)(r.p,{children:"\uc778\ud130\ud398\uc774\uc2a4 1,2 \ubaa8\ub450 \uc77c\uce58\ud558\uc9c0\ub9cc \uc778\ud130\ud398\uc774\uc2a4 1\ubc88\uc774 \uac00\uc7a5 \ub9ce\uc774 \uc77c\uce58\ud558\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \ud328\ud0b7\uc740 1\ubc88 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc804\uc1a1\ub41c\ub2e4."})]})]}),"\n",(0,d.jsx)(r.p,{children:"Forwarding Table\uc740 \uc5b4\ub5bb\uac8c \uc0dd\uacbc\uc744\uae4c?"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Network Destination"}),(0,d.jsx)(r.th,{children:"Netmask"}),(0,d.jsx)(r.th,{children:"Gateway"}),(0,d.jsx)(r.th,{children:"Interface"}),(0,d.jsx)(r.th,{children:"Metric"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"101.25.67.0"}),(0,d.jsx)(r.td,{children:"255.255.255.0"}),(0,d.jsx)(r.td,{children:"10.0.0.2"}),(0,d.jsx)(r.td,{children:"eth3"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"101.25.67.0"}),(0,d.jsx)(r.td,{children:"255.255.255.0"}),(0,d.jsx)(r.td,{children:"10.0.0.2"}),(0,d.jsx)(r.td,{children:"eth3"}),(0,d.jsx)(r.td,{children:"1"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"101.25.67.0"}),(0,d.jsx)(r.td,{children:"255.255.255.0"}),(0,d.jsx)(r.td,{children:"10.0.0.2"}),(0,d.jsx)(r.td,{children:"eth3"}),(0,d.jsx)(r.td,{children:"1"})]})]})]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\uad6c\uc131\uc694\uc18c"}),(0,d.jsx)(r.th,{children:"\uc5ed\ud560"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Network Destination"}),(0,d.jsx)(r.td,{children:"\ubaa9\uc801\uc9c0 \ub124\ud2b8\uc6cc\ud06c\uc758 IP \uc8fc\uc18c"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Netmask"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.em,{children:"\uc11c\ube0c\ub137 \ub9c8\uc2a4\ud06c, \ub300\uc0c1 \uc8fc\uc18c\ub97c \uc124\uba85\ud560 \ub54c \uc4f0\uc774\ub294 \uac12"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Gateway"}),(0,d.jsxs)(r.td,{children:["\uc774 \uc7a5\uce58\uc640 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 ",(0,d.jsx)(r.em,{children:"\ud649"}),",\ud328\ud0b7\uc774 \uc804\ub2ec\ub418\ub294 \ub2e4\uc74c IP \uc8fc\uc18c"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Interface"}),(0,d.jsx)(r.td,{children:"\uac8c\uc774\ud2b8\uc6e8\uc774\ub85c \uac00\uae30 \uc704\ud574 \uac70\uce58\ub294 \uc7a5\uce58"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Metric"}),(0,d.jsx)(r.td,{children:"\uc6b0\uc120\uc21c\uc704\ub77c\uace0 \ubd88\ub9ac\uba70 \ud328\ud0b7 \uc804\uc1a1\uc744 \uc704\ud574 \ucd5c\uc801\uc758 \uacbd\ub85c\uac00 \uc120\ud0dd\ub418\ub3c4\ub85d \ucc38\uace0\ub418\ub294 \uac12, \ub0ae\uc740 \uac83\uc774 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\ub2e4\ub294 \uac83"})]})]})]}),"\n",(0,d.jsx)(r.p,{children:"#Gateway"}),"\n",(0,d.jsx)(r.p,{children:"\uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \ud504\ub85c\ud1a0\ucf5c \ubcc0\ud658\uae30\ub77c\uace0\ub3c4 \ud558\uba70 \ub124\ud2b8\uc6cc\ud06c\uc640 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc787\ub294 \uc7a5\uce58\uc774\ub2e4"}),"\n",(0,d.jsx)(r.h3,{id:"routing",children:"Routing"})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(6540);const d={},s=n.createContext(d);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);