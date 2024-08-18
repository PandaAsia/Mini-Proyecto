document.addEventListener('DOMContentLoaded', ()=>{
	const imglightBox = document.querySelectorAll('.materailboxed');
	M.Materialbox.init(imglightBox, {
		inDuration: 500,
		outDuration: 500,
	});
});
