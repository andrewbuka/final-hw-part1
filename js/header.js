const svgAdversite = document.querySelector('.svg-adversite');
const hiddenWindow = document.querySelector('.hidden-window');
const svgAdversiteHidden = document.querySelector('.svg-adversite-hidden');

const svgSupport = document.querySelector('.svg-support');
const svgSupportHidden = document.querySelector('.svg-support-hidden');
const supportHiddenWindow = document.querySelector('.support-hidden-window');

const transparentBgHeader = document.querySelector('.transparent-bg-header');


// adversite window

svgAdversite.onclick = function() {
  
  hiddenWindow.style.display = 'block';
  svgAdversite.style.display = 'none';
  svgAdversiteHidden.style.display = 'block';
  supportHiddenWindow.style.display = 'none';
  transparentBgHeader.style.display = 'block'; 
}
svgAdversiteHidden.onclick = function() {  

  hiddenWindow.style.display = 'none';
  svgAdversite.style.display = 'block';
  svgAdversiteHidden.style.display = 'none';
  supportHiddenWindow.style.display = 'none';
  }

  // support window

svgSupport.onclick = function () {
  
  supportHiddenWindow.style.display = 'block';
  svgSupport.style.display = 'none';
  svgSupportHidden.style.display = 'block';
  hiddenWindow.style.display = 'none';
  transparentBgHeader.style.display = 'block'; 
}

svgSupportHidden.onclick = function () {

  supportHiddenWindow.style.display = 'none';
  svgSupport.style.display = 'block';
  svgSupportHidden.style.display = 'none';
  hiddenWindow.style.display = 'none';
}

// bg 

 transparentBgHeader.onclick = function() {

    hiddenWindow.style.display = 'none';
    supportHiddenWindow.style.display = 'none';
    transparentBgHeader.style.display = 'none';

    svgAdversite.style.display = 'block';
    svgAdversiteHidden.style.display = 'none';

    svgSupport.style.display = 'block';
    svgSupportHidden.style.display = 'none';
 }