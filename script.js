const parent = document.getElementsByClassName('parent')[0]
const circle = document.getElementById('circle')


parent.addEventListener('mousemove',function(tripti){
circle.style.top= tripti.clientY + 'px'
circle.style.left = tripti.clientX + 'px'

})

