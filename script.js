//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	const counterEl = document.getElementById('counter');
	const btn = document.getElementById('incrementBtn');

	if (!counterEl || !btn) return;

	// Ensure counter starts as a number
	if (counterEl.textContent.trim() === '') counterEl.textContent = '0';

	btn.addEventListener('click', () => {
		const current = parseInt(counterEl.textContent, 10) || 0;
		// Show alert with the un-incremented value
		alert(String(current));
		// Increment and update the DOM
		counterEl.textContent = String(current + 1);
	});
});
