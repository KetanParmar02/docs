"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[9075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),s=(a(7294),a(3905));const n={sidebar_position:7},i="4.7 Use WasmEdge's Dapr SDK to Connect Dapr Sidecar",o={unversionedId:"rust/dapr",id:"rust/dapr",title:"4.7 Use WasmEdge's Dapr SDK to Connect Dapr Sidecar",description:"Second State launched a new WebAssembly-based SDK for the Dapr API, which provides an easy way for Rust-based microservices in WasmEdge to interact with Dapr APIs and sidecar services.",source:"@site/docs/rust/dapr.md",sourceDirName:"rust",slug:"/rust/dapr",permalink:"/book/docs/rust/dapr",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/rust/dapr.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"4.6 MySQL-based Database Driver",permalink:"/book/docs/rust/my_sql_driver"},next:{title:"Developing Wasm Apps in JavaScript",permalink:"/book/docs/category/developing-wasm-apps-in-javascript"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The template project explanation",id:"the-template-project-explanation",level:2},{value:"Build and deploy these microservices in Dapr",id:"build-and-deploy-these-microservices-in-dapr",level:2},{value:"The image grayscale microservice",id:"the-image-grayscale-microservice",level:3},{value:"The image classification microservice",id:"the-image-classification-microservice",level:3},{value:"The events recorder microservice",id:"the-events-recorder-microservice",level:3},{value:"Test",id:"test",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"47-use-wasmedges-dapr-sdk-to-connect-dapr-sidecar"},"4.7 Use WasmEdge's Dapr SDK to Connect Dapr Sidecar"),(0,s.kt)("p",null,"Second State launched a new ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/dapr-sdk-wasi"},"WebAssembly-based SDK for the Dapr API"),", which provides an easy way for Rust-based microservices in WasmEdge to interact with Dapr APIs and sidecar services."),(0,s.kt)("p",null,"The figure below shows a Dapr-enabled microservice running inside the WasmEdge sandbox."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(857).Z,width:"1514",height:"1040"})),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before we started, make sure ",(0,s.kt)("a",{parentName:"p",href:"/book/docs/rust/setup"},"you have Rust and WasmEdge installed"),"."),(0,s.kt)("p",null,"You also need to install the following tools."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.dapr.io/getting-started/install-dapr-cli/"},"Dapr CLI installed")),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/"},"MySQL")," or ",(0,s.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/getting-installing-and-upgrading-mariadb/"},"MariaDB")," or ",(0,s.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/dev/quick-start-with-tidb"},"TiDB")," databases installed")),(0,s.kt)("h2",{id:"the-template-project-explanation"},"The template project explanation"),(0,s.kt)("p",null,"The template application showcases how ",(0,s.kt)("a",{parentName:"p",href:"https://dapr.io/"},"Dapr")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/"},"WasmEdge")," work together to support ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/microservice-rust-mysql"},"lightweight WebAssembly-based microservices")," in a cloud-native environment. The microservices are all written in Rust and compiled into WebAssembly."),(0,s.kt)("p",null,"This application consists of three microservices and a standalone web page that enables users to interact with the microservices using a HTML+JavaScript UI. It is a very typical JAMstack setup. Each microservice is attached to a Dapr sidecar, which provides a suite of useful services commonly required by cloud-native microservices. "),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9647).Z,width:"1258",height:"870"})),(0,s.kt)("p",null,"The WasmEdge's Dapr SDK is used to access Dapr sidecars from the microservice apps. Specifically, the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/dapr-wasm/tree/main/image-api-grayscale"},"grayscale")," microservice takes an image from an HTTP POST, turns it into grayscale, and returns the result image data in the HTTP response. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It uses Dapr to discover and invoke the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm/tree/main/events-service"},"events")," microservice to record every successful user request. "),(0,s.kt)("li",{parentName:"ul"},"It also stores each user\u2019s IP address and last timestamp data in its Dapr sidecar\u2019s state database. That allows the service to rate limit users if needed. ")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/dapr-wasm/tree/main/image-api-classify"},"classify")," microservices takes an image from an HTTP POST, runs a Tensorflow model against it to classify the object on the image, and returns the result as a text label in the HTTP response. You can learn more about AI inference in Rust and WasmEdge ",(0,s.kt)("a",{parentName:"p",href:"https://wasmedge.org/book/en/write_wasm/rust/wasinn.html"},"here"),". It uses its own Dapr sidecar the same way as the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/dapr-wasm/tree/main/image-api-grayscale"},"grayscale")," microservice. "),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/second-state/dapr-wasm/tree/main/events-service"},"events")," microservice takes JSON data from a HTTP POST and saves it to an external MySQL database for later analysis. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It uses Dapr to make itself discoverable by name by other microservices that need to record events. "),(0,s.kt)("li",{parentName:"ul"},"It also uses its Dapr sidecar to store secrets such as the MySQL database credentials.")),(0,s.kt)("p",null,"Ok, enough concepts for the template project.  Let's go ahead."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://dapr-demo.secondstate.co"},"Live Demo")," | ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3v37pAT9iK8"},"Tutorial video")),(0,s.kt)("h2",{id:"build-and-deploy-these-microservices-in-dapr"},"Build and deploy these microservices in Dapr"),(0,s.kt)("p",null,"First, start the database and place the connection string in the ",(0,s.kt)("a",{parentName:"p",href:"chttps://github.com/second-state/dapr-wasm/blob/main/config/secrets.json"},"config/secrets.json")," file under ",(0,s.kt)("inlineCode",{parentName:"p"},"DB_URL:MYSQL"),". "),(0,s.kt)("p",null,"Next, start Dapr with the following commands."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dapr init\n")),(0,s.kt)("h3",{id:"the-image-grayscale-microservice"},"The image grayscale microservice"),(0,s.kt)("p",null,"Build."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd image-api-grayscale\ncargo build --target wasm32-wasi --release\nwasmedgec ./target/wasm32-wasi/release/image-api-grayscale.wasm image-api-grayscale.wasm\n")),(0,s.kt)("p",null,"Deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dapr run --app-id image-api-grayscale \\\n        --app-protocol http \\\n        --app-port 9005 \\\n        --dapr-http-port 3503 \\\n        --components-path ../config \\\n        --log-level debug \\\n    wasmedge image-api-grayscale.wasm\n")),(0,s.kt)("h3",{id:"the-image-classification-microservice"},"The image classification microservice"),(0,s.kt)("p",null,"Build."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd image-api-classify\ncargo build --target wasm32-wasi --release\nwasmedgec target/wasm32-wasi/release/wasmedge_hyper_server_tflite.wasm wasmedge_hyper_server_tflite.wasm\n")),(0,s.kt)("p",null,"Deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dapr run --app-id image-api-classify \\\n        --app-protocol http \\\n        --app-port 9006 \\\n        --dapr-http-port 3504 \\\n        --log-level debug \\\n        --components-path ../config \\\n        wasmedge-tensorflow-lite wasmedge_hyper_server_tflite.wasm\n")),(0,s.kt)("h3",{id:"the-events-recorder-microservice"},"The events recorder microservice"),(0,s.kt)("p",null,"Build."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd events-service\ncargo build --target wasm32-wasi --release\nwasmedgec target/wasm32-wasi/release/events_service.wasm events_service.wasm\n")),(0,s.kt)("p",null,"Deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dapr run --app-id events-service \\\n        --app-protocol http \\\n        --app-port 9007 \\\n        --dapr-http-port 3505 \\\n        --log-level debug \\\n        --components-path ../config \\\n        wasmedge events_service.wasm\n")),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("a",{parentName:"p",href:"http://dapr-demo.secondstate.co/"},"static web page UI")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," to test the services."),(0,s.kt)("p",null,"Initialize the events database table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:9007/init\n{"status":true}\n\n$ curl http://localhost:9007/events\n[]\n')),(0,s.kt)("p",null,"Use the grayscale microservice. The return data is base64 encoded grayscale image."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd docs\n$ curl http://localhost:9005/grayscale -X POST --data-binary '@food.jpg'\nABCDEFG ...\n")),(0,s.kt)("p",null,"Use the image classification microservice."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd docs\n$ curl http://localhost:9006/classify -X POST --data-binary '@food.jpg'\nhotdog is detected with 255/255 confidence\n")),(0,s.kt)("p",null,"Query the events database again."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:9007/events\n[{"id":1,"event_ts":1665358852918,"op_type":"grayscale","input_size":68016},{"id":2,"event_ts":1665358853114,"op_type":"classify","input_size":68016}]\n')),(0,s.kt)("p",null,"Next, you could use WasmEdge and WasmEdge's Dapr SDK to create your own lightweight microservices with better security, faster performance, and smaller footprints."))}d.isMDXComponent=!0},9647:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dapr-wasmedge-c0b5fd9f7aa75f9771104553f4d031fc.png"},857:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dapr_wasm_sdk-1ccc0b2f5372bb54111007642766fab5.png"}}]);