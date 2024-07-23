document.getElementById('toggle-switch').addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  const newTheme = isChecked ? 'dark' : 'light';
  const modeTitle = document.getElementById('mode-title');
  document.documentElement.setAttribute('data-theme', newTheme);
  modeTitle.textContent = '切り替え中...';
  document.body.classList.add('animate-background');
  setTimeout(() => {
    modeTitle.textContent = isChecked ? 'ダークモード🌙' : 'ライトモード🌞';
    document.body.classList.remove('animate-background');
  }, 1000);
});