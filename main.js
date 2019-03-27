/*
* @Author: Galena
* @Date:   2019-03-27 14:58:08
* @Last Modified by:   Galena
* @Last Modified time: 2019-03-27 16:35:57
*/

var n = 1
var statusNow = 'status'+n

function imageMove(number) {
	$('#image').removeClass(statusNow)
	statusNow = 'status'+number
	$('#image').addClass(statusNow)
	$('.button').removeClass('buttonActive')
	$('#b'+number).addClass('buttonActive')
}


var buttons = $('.button')
for (let i = 0; i<buttons.length; i++) {
	$(buttons[i]).on('click', function() {
		n = i+1
		imageMove(n)
	})
}
var timer
function setTime() {
	timer = setInterval(function() {
		n = n+1
		if (n === 5) {
			n=1
		}
		imageMove(n)
	}, 2000)
}

$('.container').on('mouseenter', function() {
	window.clearInterval(timer)
}).on('mouseleave', function() {
	setTime()
})

setTime()