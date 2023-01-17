"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[6334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},s="4.4.1 Server",c={unversionedId:"rust/socket_networking/server",id:"rust/socket_networking/server",title:"4.4.1 Server",description:"As we described in the client chapter, with the WasmEdge socket API, it is also possible for Rust developers to work directly on the socket level. In order for WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. So, in this chapter, we will discussan HTTP server example and a non-blocking HTTP server example.",source:"@site/docs/rust/socket_networking/server.md",sourceDirName:"rust/socket_networking",slug:"/rust/socket_networking/server",permalink:"/book/docs/rust/socket_networking/server",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/rust/socket_networking/server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.4.1 Client",permalink:"/book/docs/rust/socket_networking/client"},next:{title:"4.5 AI Inference",permalink:"/book/docs/category/45-ai-inference"}},i={},l=[{value:"An HTTP server example",id:"an-http-server-example",level:2},{value:"A non-blocking HTTP server example",id:"a-non-blocking-http-server-example",level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"441-server"},"4.4.1 Server"),(0,o.kt)("p",null,"As we described in the ",(0,o.kt)("a",{parentName:"p",href:"/book/docs/rust/socket_networking/client"},"client")," chapter, with the WasmEdge socket API, it is also possible for Rust developers to work directly on the socket level. In order for WasmEdge to become a cloud-native runtime for microservices, it needs to support HTTP servers. So, in this chapter, we will discuss",(0,o.kt)("a",{parentName:"p",href:"#an-http-server"},"an HTTP server example")," and ",(0,o.kt)("a",{parentName:"p",href:"#a-non-blocking-http-server-example"},"a non-blocking HTTP server example"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before we started, make sure ",(0,o.kt)("a",{parentName:"p",href:"/book/docs/rust/setup"},"you have Rust and WasmEdge installed"),".")),(0,o.kt)("h2",{id:"an-http-server-example"},"An HTTP server example"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/tree/main/examples/http_server"},"source code")," for the HTTP server application is available as follows. The example below shows an HTTP server that echoes back any incoming request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use bytecodec::DecodeExt;\nuse httpcodec::{HttpVersion, ReasonPhrase, Request, RequestDecoder, Response, StatusCode};\nuse std::io::{Read, Write};\n#[cfg(feature = "std")]\nuse std::net::{Shutdown, TcpListener, TcpStream};\n#[cfg(not(feature = "std"))]\nuse wasmedge_wasi_socket::{Shutdown, TcpListener, TcpStream};\n\nfn handle_http(req: Request<String>) -> bytecodec::Result<Response<String>> {\n  Ok(Response::new(\n    HttpVersion::V1_0,\n    StatusCode::new(200)?,\n    ReasonPhrase::new("")?,\n    format!("echo: {}", req.body()),\n  ))\n}\n\nfn handle_client(mut stream: TcpStream) -> std::io::Result<()> {\n  let mut buff = [0u8; 1024];\n  let mut data = Vec::new();\n\n  loop {\n    let n = stream.read(&mut buff)?;\n    data.extend_from_slice(&buff[0..n]);\n    if n < 1024 {\n      break;\n    }\n  }\n\n  let mut decoder =\n    RequestDecoder::<httpcodec::BodyDecoder<bytecodec::bytes::Utf8Decoder>>::default();\n\n  let req = match decoder.decode_from_bytes(data.as_slice()) {\n    Ok(req) => handle_http(req),\n    Err(e) => Err(e),\n  };\n\n  let r = match req {\n    Ok(r) => r,\n    Err(e) => {\n      let err = format!("{:?}", e);\n      Response::new(\n        HttpVersion::V1_0,\n        StatusCode::new(500).unwrap(),\n        ReasonPhrase::new(err.as_str()).unwrap(),\n        err.clone(),\n      )\n    }\n  };\n\n  let write_buf = r.to_string();\n  stream.write(write_buf.as_bytes())?;\n  stream.shutdown(Shutdown::Both)?;\n  Ok(())\n}\n\nfn main() -> std::io::Result<()> {\n  let port = std::env::var("PORT").unwrap_or(1234.to_string());\n  println!("new connection at {}", port);\n  let listener = TcpListener::bind(format!("0.0.0.0:{}", port))?;\n  loop {\n    let _ = handle_client(listener.accept()?.0);\n  }\n}\n')),(0,o.kt)("p",null,"You can build and run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/tree/main/examples/http_server"},"the example")," in WasmEdge as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Get the source code\n$ git clone https://github.com/second-state/wasmedge_wasi_socket.git\n$ cd wasmedge_wasi_socket/http_server\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/http_server.wasm target/wasm32-wasi/release/http_server.wasm\n\n# Run the example\n$wasmedge target/wasm32-wasi/release/http.wasm\nnew connection at 1234\n")),(0,o.kt)("p",null,"To test the HTTP server, you can submit a HTTP request to it via ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -d "name=WasmEdge" -X POST http://127.0.0.1:1234\necho: name=WasmEdge\n')),(0,o.kt)("h2",{id:"a-non-blocking-http-server-example"},"A non-blocking HTTP server example"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge_wasi_socket/blob/main/examples/poll_tcp_listener.rs"},"source code")," for a non-blocking HTTP server application is available. The following ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function starts an HTTP server. It receives events from multiple open connections, and processes those events as they are received by calling the async handler functions registered to each connection. This server can process events from multiple open connections concurrently."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() -> std::io::Result<()> {\n    let mut connects = Connects::new();\n    let server = TcpListener::bind("127.0.0.1:1234", true)?;\n    connects.add(NetConn::Server(server));\n\n    loop {\n        let subs = connects_to_subscriptions(&connects);\n        let events = poll::poll(&subs)?;\n\n        for event in events {\n            let conn_id = event.userdata as usize;\n            match connects.get_mut(conn_id) {\n                Some(NetConn::Server(server)) => match event.event_type {\n                    poll::EventType::Timeout => unreachable!(),\n                    poll::EventType::Error(e) => {\n                        return Err(e);\n                    }\n                    poll::EventType::Read => {\n                        let (mut tcp_client, addr) = server.accept(true)?;\n                        println!("accept from {}", addr);\n\n                        match tcp_client.write(DATA) {\n                            Ok(n) if n < DATA.len() => {\n                                println!(\n                                    "write hello error: {}",\n                                    io::Error::from(io::ErrorKind::WriteZero)\n                                );\n                                continue;\n                            }\n                            Ok(_) => {}\n                            Err(ref err) if would_block(err) => {}\n                            Err(ref err) if interrupted(err) => {}\n                            Err(err) => {\n                                println!("write hello error: {}", err);\n                                continue;\n                            }\n                        }\n\n                        let id = connects.add(NetConn::Client(tcp_client));\n                        println!("add conn[{}]", id);\n                    }\n                    poll::EventType::Write => unreachable!(),\n                },\n                Some(NetConn::Client(client)) => {\n                    match event.event_type {\n                        poll::EventType::Timeout => {\n                            // if Subscription timeout is not None.\n                            unreachable!()\n                        }\n                        poll::EventType::Error(e) => {\n                            println!("tcp_client[{}] recv a io error: {}", conn_id, e);\n                            connects.remove(conn_id);\n                        }\n                        poll::EventType::Read => match handle_connection_read(client) {\n                            Ok(true) => {\n                                println!("tcp_client[{}] is closed", conn_id);\n                                connects.remove(conn_id);\n                            }\n                            Err(e) => {\n                                println!("tcp_client[{}] recv a io error: {}", conn_id, e);\n                                connects.remove(conn_id);\n                            }\n                            _ => {}\n                        },\n                        poll::EventType::Write => unreachable!(),\n                    }\n                }\n                _ => {}\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle_connection()")," function processes the data from those open connections. In this case, it just writes the request body into the response. It is also done asynchronously -- meaning that the ",(0,o.kt)("inlineCode",{parentName:"p"},"handle_connection()")," function creates an event for the response, and puts it in the queue. The main application loop processes the event and sends the response when it is waiting for data from other connections."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn handle_connection_read(connection: &mut TcpStream) -> io::Result<bool> {\n    let mut connection_closed = false;\n    let mut received_buff = [0u8; 2048];\n\n    let mut received_data = Vec::with_capacity(2048);\n    loop {\n        match connection.read(&mut received_buff) {\n            Ok(0) => {\n                connection_closed = true;\n                break;\n            }\n            Ok(n) => {\n                received_data.extend_from_slice(&received_buff[0..n]);\n            }\n            Err(ref err) if would_block(err) => break,\n            Err(ref err) if interrupted(err) => continue,\n            Err(err) => return Err(err),\n        }\n    }\n\n    if !received_data.is_empty() {\n        if let Ok(str_buf) = std::str::from_utf8(&received_data) {\n            println!("Received data: {}", str_buf.trim_end());\n        } else {\n            println!("Received (none UTF-8) data: {:?}", received_data);\n        }\n    }\n\n    if connection_closed {\n        return Ok(true);\n    }\n\n    Ok(false)\n}\n')),(0,o.kt)("p",null,"You can build and run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/wasmedge_hyper_demo/blob/main/server/"},"the example")," in WasmEdge as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Get the source code\n$ git clone https://github.com/second-state/wasmedge_wasi_socket.git\n$ cd wasmedge_wasi_socket\n\n# Build the Rust code\ncargo build --target wasm32-wasi --release\n\n# Use the AoT compiler to get better performance\nwasmedgec target/wasm32-wasi/release/poll_tcp_listener.wasm target/wasm32-wasi/release/poll_tcp_listener.wasm\n\n# Run the example\nwasmedge target/wasm32-wasi/release/poll_tcp_listener.wasm\n")),(0,o.kt)("p",null,"To test the HTTP server, you can submit a HTTP request to it via ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -d "name=WasmEdge" -X POST http://127.0.0.1:1234\necho: name=WasmEdge\n')))}d.isMDXComponent=!0}}]);