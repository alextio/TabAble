"use strict"; debugger;
function sendTextContent() {
    let payload = [];
    var browser = chrome || browser;
    const matches = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, em, cite, strong, figcaption, blockquote");
    // const highlightedItems = userList.querySelectorAll(".highlighted");
    matches.forEach(function (node) {
        // console.log(node);
        // console.log("---");
        let content = {
            tag: node.tagName,
            text: node.textContent
        }
        if(node.textContent.trim().length != 0) payload.push(content);
    });
    browser.runtime.sendMessage({
        from: "readPage",
        result: payload,
        result2: "hi"
    });
}

sendTextContent();