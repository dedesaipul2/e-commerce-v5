function toggleSearch() {
  const input = document.querySelector('.search-input');
  input.style.display = input.style.display === 'block' ? 'none' : 'block';
  input.focus();
}

function searchCards() {
  const query = document.querySelector('.search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
}