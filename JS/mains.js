// Filtro de categorias — Catálogo
const filterBtns = document.querySelectorAll('.btn-cat');
const productItems = document.querySelectorAll('.product-item');
 
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
 
    const filter = btn.dataset.filter;
 
    productItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});