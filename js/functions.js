document.addEventListener('DOMContentLoaded', function(){

	const highlight = document.querySelectorAll('.hlt');
	const background = document.querySelector('.hl-background');

	function highlightElement(){
		background.classList.add('active');
		const rect = this.getBoundingClientRect();

		background.style.height = `${rect.height}px`;
		background.style.width = `${rect.width}px`;
		background.style.top = `${rect.top + window.scrollY}px`;
		background.style.left = `${rect.left + window.scrollX}px`;

		this.classList.add('active');

		this.addEventListener('mouseleave', function(){
			this.classList.remove('active');
			//background.classList.remove('active');
		})

	}

	highlight.forEach(highlight => highlight.addEventListener('mouseenter', highlightElement));

});