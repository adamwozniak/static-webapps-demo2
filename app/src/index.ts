import './app.css';

function main(): void {
    const button = document.querySelector("#testButton");
    button?.addEventListener("click", testSubmitHandler);

    const buttonFunc = document.querySelector("#testButtonFunc");
    buttonFunc?.addEventListener("click", testSubmitFuncHandler);
}

function testSubmitHandler(e: Event): void {
    e.preventDefault();
    const outputElement = document.querySelector('#output');
    outputElement.textContent = 'Scripts work!';
}

async function testSubmitFuncHandler(e: Event): Promise<void> {
    e.preventDefault();
    const apiResponse = await fetch('/api/Example');
    const apiResponseText = await apiResponse.text();
    const outputElement = document.querySelector('#outputFunc');
    outputElement.textContent = apiResponseText;
}

main();