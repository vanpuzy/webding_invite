const params = new URLSearchParams(window.location.search);
const guestName = params.get('name');
if (guestName) {
  document.getElementById('guestName').textContent = guestName.replace(/\+/g, ' ');
}
