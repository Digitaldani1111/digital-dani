// Work dropdown, disclosure pattern
(function(){
  var btn=document.getElementById('workbtn'),menu=document.getElementById('workmenu');
  function close(){menu.dataset.open='false';btn.setAttribute('aria-expanded','false');}
  function open(){menu.dataset.open='true';btn.setAttribute('aria-expanded','true');}
  btn.addEventListener('click',function(e){
    e.stopPropagation();
    menu.dataset.open==='true'?close():open();
  });
  document.addEventListener('click',function(e){
    if(!menu.contains(e.target)&&e.target!==btn) close();
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&menu.dataset.open==='true'){close();btn.focus();}
  });
})();

// Spine colour change pinned to the pivot line
(function(){
  var wrap=document.querySelector('.wrap'),
      spine=document.querySelector('.spine'),
      pivot=document.getElementById('pivot');
  if(!pivot||!spine||!wrap) return;
  function set(){
    var pct=((pivot.offsetTop)/wrap.offsetHeight*100).toFixed(2);
    spine.style.setProperty('--pivot',pct+'%');
  }
  set();
  window.addEventListener('resize',set);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(set);
})();
