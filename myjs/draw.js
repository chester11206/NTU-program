function draw()
{
	var svgContainer = d3.selectAll(".center").append("svg").attr('width', 400).attr('height', 400);
    var lefteyebrow = svgContainer.append('path').attr('d', 'M 198 30 q 43 23 44 15').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var righteyebrow = svgContainer.append('path').attr('d', 'M 299 30 q -43 23 -44 15').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var lefteyelid = svgContainer.append('path').attr('d', "M 200 50 q 15 -8 30 0").attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var righteyelid = svgContainer.append('path').attr('d', "M 267 50 q 15 -8 30 0").attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var lefteyetop = svgContainer.append('path').attr('d', "M 198 55 q 17 -11 34 0").attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var righteyetop = svgContainer.append('path').attr('d', "M 265 55 q 17 -11 34 0").attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none'); 
    var lefteyebottom = svgContainer.append('path').attr('d', "M 198 60 q 17 10 34 0").attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var righteyebottom = svgContainer.append('path').attr('d', "M 265 60 q 17 10 34 0").attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var lefteyeball = svgContainer.append('circle').attr('cx', 215).attr('cy', 57).attr('r', 9).attr('fill', "black");
    var righteyeball = svgContainer.append('circle').attr('cx', 282).attr('cy', 57).attr('r', 9).attr('fill', "black");
    var noseleft = svgContainer.append('path').attr('d', 'M 245 52 l 0 57').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var noseright = svgContainer.append('path').attr('d', 'M 253 52 l 0 57').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var leftnosetril = svgContainer.append('path').attr('d', 'M 243 114 l -8 -3').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var rightnosetril = svgContainer.append('path').attr('d', 'M 255 114 l 8 -3').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var mouth = svgContainer.append('path').attr('d', 'M 217 133 q 34 -5 68 0').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var lip = svgContainer.append('path').attr('d', 'M 235 138 q 16 -3 32 0').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var leftface1 = svgContainer.append('path').attr('d', 'M 178 50 l 20 80').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var rightface1 = svgContainer.append('path').attr('d', 'M 319 50 l -15 80').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
    var chin = svgContainer.append('path').attr('d', 'M 198 130 q 53 55 106 0').attr('stroke', 'black').attr('stroke-width', 2).attr('fill', 'none');
}