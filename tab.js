const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown', changeTabFocus);


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    // Change the tab index of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
       tabs[tabFocus].setAttribute('tabindex', -1);
    }
    
    // If the right key is pushed, move to the next tab on the right, if it exists if not, move to the first tab
    if (e.keyCode === keydownRight) {
        tabFocus += 1;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    // If the left key is pushed, move to the next tab on the left, if it exists if not, move to the last tab
    if (e.keyCode === keydownLeft) {
        tabFocus -= 1;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }
    
    tabs[tabFocus].setAttribute("tabIndex", 0);
    tabs[tabFocus].focus();
    
}