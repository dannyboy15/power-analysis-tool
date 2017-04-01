var _shape = 'Square';
var canvas = new fabric.Canvas('content', { selection: false });
var grid = 50;

// create grid

for (var i = 0; i < (600 / grid); i++) {
	canvas.add(new fabric.Line([ i * grid, 0, i * grid, 600], { stroke: '#ccc', selectable: false }));
	canvas.add(new fabric.Line([ 0, i * grid, 600, i * grid], { stroke: '#ccc', selectable: false }))
}

function updatePolyType(button, shape) {
	_shape = shape;
	button.addClass('active');
}

canvas.on('object:moving', function(options) { 
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
  });

function addShape(shape) {
	if (shape != null)
		_shape = shape;

	switch(_shape) {
		case 'Square':
			var rect = new fabric.Rect({
				left: 0,
				top: 0,
				originX: 'left',
				originY: 'top',
				width: 50,
				height: 50,
				fill: 'rgba(255,0,0,0.5)',
				hasControls: false,
				selectable: true
			});

			canvas.add(rect).setActiveObject(rect);
			canvas.renderAll();
			break;
		case 'Triangle':
			var tri = new fabric.Triangle({
				left: 0,
				top: 0,
				originX: 'left',
				originY: 'top',
				width: 50,
				height: 50,
				fill: 'rgba(255,0,0,0.5)',
				hasControls: false,
				selectable: true
			});

			canvas.add(tri).setActiveObject(tri);
			canvas.renderAll();
			break;
		case 'Circle':
		var cir = new fabric.Circle({
				left: 0,
				top: 0,
				originX: 'left',
				originY: 'top',
				radius: 25,
				fill: 'rgba(255,0,0,0.5)',
				hasControls: false,
				selectable: true
			});

			canvas.add(cir).setActiveObject(tri);
			canvas.renderAll();
			break;
		default:
			break;

	}

}