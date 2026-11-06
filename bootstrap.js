import('./app.js').catch(() => {
  const root = document.querySelector('#app');
  root.innerHTML = '<main class="shell"><section class="startup-error"><span class="brand-mark">♡</span><h1>页面暂时没能加载完整</h1><p>请检查网络后重试。已保存的答题记录不会被清除。</p><button class="btn btn-primary" id="retry-load">重新加载</button></section></main>';
  document.querySelector('#retry-load').addEventListener('click', () => location.reload());
});
