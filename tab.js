const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    // Change the tab index of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1);
            // If the right key is pushed, move to the next tab on the right, if it exists if not, move to the first tab
            if (e.keyCode === keydownRight) {
                tabFocus += 1;
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
            } else if (e.keyCode === keydownLeft) {
                tabFocus -= 1;
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1;
                }
            }
        
            tabs[tabFocus].setAttribute("tabIndex", 0);
            tabs[tabFocus].focus();
    }


}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const targetImage = targetTab.getAttribute('data-image');


    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false);

    targetTab.setAttribute('aria-selected', true);

    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);


    // console.log(mainContainer); // This is the id of the panel that needs to be shown
    // console.log(targetPanel); // This is the id of the panel that needs to be shown
    // console.log(targetTab); // This is the tab that was clicked
    // console.log(tabContainer); // This is the tablist
    // console.log(mainContainer); // This is the main container

    // Hide all the images

    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);


}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute('hidden', true));
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}