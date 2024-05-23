;(() => {
    window.addEventListener('DOMContentLoaded', () => {
        const root = document.createElement('div');
        root.style.position = "absolute";

        document.body.parentElement.insertBefore(root, document.body);
        document.body.style.transform = "translateY(20px)";
        const toolbar = document.createElement("header");
        toolbar.onmousedown = async (e) => {
            await window.__FLURX__.core.invoke("FLURX|mouse::webview_move_start", {
                x: e.clientX,
                y: e.clientY
            });
        };
        toolbar.style.height = "20px";
        toolbar.style.width = "100%";
        toolbar.style.position = "fixed";
        toolbar.style.top = "0";
        toolbar.style.zIndex = "calc(infinity)";

        root.appendChild(toolbar);
        root.appendChild(document.body);
        document.onmousedown = async (e) => {
            await window.__FLURX__.core.invoke("FLURX|mouse::down")
        }
        document.onmouseup = async (e) => {
            await window.__FLURX__.core.invoke("FLURX|mouse::up")
        }
    });
})();