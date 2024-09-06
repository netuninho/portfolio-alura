function changeTheme() {
    const todayDate = new Date();
    const timeNow = todayDate.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", timeNow: "numeric", timeNow12: false });
  
    const container = document.querySelector('.container');
  
    if (timeNow >= 5 && timeNow < 18) {
      container.classList.remove('dark-theme');

    } else {
      container.classList.add('dark-theme');
    }
  }
  
  window.onload = changeTheme;
  
setInterval(changeTheme, 60000);
  