function get_time() {
    var time = new Date().toLocaleTimeString();
    var template = `${time}`
    document.getElementById('clock').innerHTML = template;
  }
  
  function set_style() {
  
    const nightBg = '#2a3444';
    const nightText = '#fadb44';
    const dayBg = '#d4d2d4';
    const dayText = '#FF0000';
  
    var hour = new Date().getHours();
    if([18,19,20,21,22,23,0,1,2,3,4,5,6].includes(hour)) {
      document.getElementById('main').style.backgroundColor = nightBg;
      document.getElementById('clock').style.color = nightText;
    }
    else {
      document.getElementById('main').style.backgroundColor = dayBg;
      document.getElementById('clock').style.color = dayText;
    }
  }
  
  window.setInterval(get_time, 100)
  window.setInterval(set_style, 60000)