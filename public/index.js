window.onload = function(){

  var canvas = document.querySelector('canvas')
  var context = canvas.getContext('2d')

  var start_x = 0
  var start_y = 0

  canvas.onclick = function(event){
    start_x = event.x
    start_y = event.y
  }

  window.addEventListener('keydown', function (e) {
    var key = e.key
    
    if (key === 'ArrowDown'){
      drawLine(0, 25)
    } else if (key === 'ArrowUp'){
      drawLine(0, -25)
    } else if (key === 'ArrowLeft'){
      drawLine(-25, 0)
    } else if (key === 'ArrowRight'){
      drawLine(25, 0)
    } else {
      var pTag = document.querySelector("#instruction")
      pTag.innerText = "Please use the arrow keys!"
    }
  })

  var drawLine = function(x, y){
    context.beginPath()
    context.moveTo(start_x, start_y)
    context.lineTo((start_x + x), (start_y + y))
    context.stroke()


    start_x = start_x + x
    start_y = start_y + y


    if (start_x > 535){
      start_x = 535
    } else if (start_x < 0){
      start_x = 0
    }

    if (start_y > 400){
      start_y = 400
    } else if (start_y < 0){
      start_y = 0
    }

    console.log(start_x, start_y)
  }
}