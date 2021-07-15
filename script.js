window.addEventListener('load', () => {
	bodyload();
	loadJumbo();
});

const loadJumbo = () => {
	const jumbotro = document.body.querySelector('.jumbotron');
	jumbotro.style.opacity = '1';
};
const bodyload = () => {
	const body = document.querySelector('.body-loader');
	body.style.opacity = '1';
};

const deleteRow1 = () => {
	document.querySelector('.row-1').remove();
};
const deleteRow2 = () => {
	document.querySelector('.row-2').remove();
};
const deleteRow3 = () => {
	document.querySelector('.row-3').remove();
};
const savechanges = () => {
	document.querySelector('.hidden-form').style.opacity = '0';
	alert('you successfully added your track');
};
