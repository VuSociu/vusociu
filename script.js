
function change1(){
    var ct = document.getElementById("no");
    ct.textContent = "Cóaaa";
}
function change2(){
    var ct = document.getElementById("no");
    ct.textContent = "Hôngg";
}
$(document).ready(function() {
	$('#yes').click(function(event) {
		$('.hopthoai').addClass('hienra');
		$('.nen').addClass('hienra');
	});
	$('#no').click(function(event) {
		$('.hopthoai').addClass('hienra');
		$('.nen').addClass('hienra');
	});
	$('.nen').click(function(event) {
		$('.hopthoai').removeClass('hienra');
		$('.nen').removeClass('hienra')
	});
});
