debugger;
function sendTextContent() {
    let text = [];
    const matches = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p")
    // const highlightedItems = userList.querySelectorAll(".highlighted");
    matches.forEach((node) => {
        console.log(node);
        console.log("---");
        text.push(node.textContent);
    });
    let browser = chrome || browser;
    browser.runtime.sendMessage({
        from: "readPage",
        result: text,
        result2: "hi"
    });
}

sendTextContent();