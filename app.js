// toggleResetBtn


function toggleResetBtn(){
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active')
}
// Switch left, Middle and Right Part of Banner
function switchBanner(name){
    const banner = document.querySelector('#banner');
    if(!banner.classList.contains(name)){
        banner.className = 'banner'
        banner.classList.add(name);
        //whenerver the switch the banner, the button should toggle
        toggleResetBtn();
    }
    return;
    
}

// Reset Button

function resetBanner(){
    const banner = document.querySelector('#banner');
    banner.className = 'banner'
}



