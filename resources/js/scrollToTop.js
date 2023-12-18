(() => {
    let config;
    try {
        config = (window.config || config || {});
    } catch (e) {
        config = {};
    }

    const pluginConfig = config?.scrollToTop || {};
    const scrollToTopRadius = pluginConfig?.radius || '10px';
    const scrollTopPosition = Number(pluginConfig?.scrollToPosition || 0) || 0;
    const scrollTopBehavior = pluginConfig?.scrollBehavior || 'smooth';
    const scrollToTopPadding = pluginConfig?.padding || '15px';
    const scrollToTopMinHeight = Number(pluginConfig?.minHeight) || 20;
    const scrollToTopDir = String(pluginConfig?.direction || document.dir || "ltr").toLowerCase();
    const scrollToTopStartSpaceSizeStyle = pluginConfig?.startSpaceSize || "30px";
    const scrollToTopBottomSpaceSizeStyle = pluginConfig?.bottomSpaceSize || "20px";
    const scrollToTopClasses = pluginConfig?.classes || "inline-flex items-center justify-center focus:ring focus:ring-primary-200 focus:outline-none rounded scrollToTop--Button align-middle text-primary-500 hover:text-primary-600 focus:text-primary-400 active:text-primary-600";
    const scrollToTopTag = pluginConfig?.tag || "button";
    const scrollToTopAttributes = pluginConfig?.attributes || " type='button' ";
    const scrollToTopToggleKey = pluginConfig?.toggle_key || undefined;
    const scrollToTopContent = pluginConfig?.content || `<svg class="inline-block hover:opacity-50" fill="currentColor" height="20" role="presentation" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" fill-rule="evenodd"></path></svg>`;
    const scrollToTopCssCode = pluginConfig?.css || `
.scrollToTop--Button {
  border: 1px solid;
  background-color: inherit;
}
.scrollToTop--Button:hover {
  //background-color: #ccc;
}
`;

    let scrollToTopPaddingStyle = scrollToTopPadding ? `padding: ${scrollToTopPadding};` : '';
    let scrollToTopRadiusStyle = scrollToTopRadius ? `border-radius: ${scrollToTopRadius};` : '';
    let scrollToTopDirStyle = scrollToTopDir === "ltr" ? "left" : (scrollToTopDir === "rtl" ? "right" : undefined);
    scrollToTopDirStyle = scrollToTopDirStyle && scrollToTopStartSpaceSizeStyle ? `${scrollToTopDirStyle}: ${scrollToTopStartSpaceSizeStyle};` : '';
    let scrollToTopButtomStyle = scrollToTopBottomSpaceSizeStyle ? `bottom: ${scrollToTopBottomSpaceSizeStyle};` : '';
    const scrollToTopCss = `
.scrollToTop--Button {
  display: none;
  position: fixed;
  ${scrollToTopButtomStyle}
  ${scrollToTopDirStyle}
  z-index: 1000;
  cursor: pointer;
  ${scrollToTopPaddingStyle}
  ${scrollToTopRadiusStyle}
}`;

    const scrollToTopHTML = `
<${scrollToTopTag} 
    class="${(Array.isArray(scrollToTopClasses) ? scrollToTopClasses : [scrollToTopClasses]).join(" ")} scrollToTop--Button" 
    ${(Array.isArray(scrollToTopAttributes) ? scrollToTopAttributes : [scrollToTopAttributes]).join(" ")}
>
    ${scrollToTopContent}
</${scrollToTopTag}>
`;

    window.scrollToTopFunction = () => {
        window.scroll({
            top: scrollTopPosition,
            left: 0,
            behavior: scrollTopBehavior
        });
    };

    function getScrollElement() {
        return window.document.body.querySelector(".scrollToTop--Button");
    }

    function scrollFunction(autoload = false) {
        let btn = getScrollElement();
        if (btn) {
            btn.style.display =
                (window.document.body.scrollTop > scrollToTopMinHeight || window.document.documentElement.scrollTop > scrollToTopMinHeight) ?
                    "block" : "none";
        } else if (autoload) {
            setTimeout(() => scrollFunction(autoload), 100);
        }
    }

    const style = document.createElement('style')
    style.innerHTML = scrollToTopCss + scrollToTopCssCode;
    style.setAttribute('data-id', 'scrollToTop-plugin');
    document.head.append(style);

    let btn = document.createElement('div')
    btn.innerHTML = scrollToTopHTML;
    btn = btn.firstElementChild;
    btn.setAttribute('data-id', 'scrollToTop-plugin');
    document.body.append(btn);

    (window.onscroll = scrollFunction)(1);

    if (scrollToTopToggleKey) {
        let $scrollToTopToggleKey = String(scrollToTopToggleKey)
            .trim()
            .split("+")
            .filter(x => x)
            .map(x => String(x).trim().toLowerCase());

        document.addEventListener('keyup', (event) => {
            let keyPressed = $scrollToTopToggleKey.find(x => x.length === 1 && !['alt', 'ctrl', 'shift', 'meta'].includes(
                String(x).trim().toLowerCase()
            ));
            if (
                event.altKey === $scrollToTopToggleKey.includes('alt') &&
                event.ctrlKey === $scrollToTopToggleKey.includes('ctrl') &&
                event.shiftKey === $scrollToTopToggleKey.includes('shift') &&
                event.metaKey === $scrollToTopToggleKey.includes('meta') &&
                (
                    !keyPressed ||
                    String(event.key).trim().toLowerCase() === keyPressed
                )
            ) {
                event.preventDefault();
                getScrollElement()?.click();
            }

            return;
        });
    }

    getScrollElement().addEventListener("click", window.scrollToTopFunction);
})();
