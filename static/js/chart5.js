
		Chart.defaults.global.pointHitDetectionRadius = 1;

		var customTooltips = function(tooltip) {
			// Tooltip Element
			var tooltipEl = document.getElementById('chartjs-tooltip');

			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				this._chart.canvas.parentNode.appendChild(tooltipEl);
			}

			// Hide if no tooltip
			if (tooltip.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set caret Position
			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltip.yAlign) {
				tooltipEl.classList.add(tooltip.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			// Set Text
			if (tooltip.body) {
				var titleLines = tooltip.title || [];
				var bodyLines = tooltip.body.map(getBody);

				var innerHtml = '<thead>';

				titleLines.forEach(function(title) {
					innerHtml += '<tr><th>' + title + '</th></tr>';
				});
				innerHtml += '</thead><tbody>';

				bodyLines.forEach(function(body, i) {
					var colors = tooltip.labelColors[i];
					var style = 'background:' + colors.backgroundColor;
					style += '; border-color:' + colors.borderColor;
					style += '; border-width: 2px';
					var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
					innerHtml += '<tr><td>' + span + body + '</td></tr>';
				});
				innerHtml += '</tbody>';

				var tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			var positionY = this._chart.canvas.offsetTop;
			var positionX = this._chart.canvas.offsetLeft;

			// Display, position, and set styles for font
			tooltipEl.style.opacity = 1;
			tooltipEl.style.left = positionX + tooltip.caretX + 'px';
			tooltipEl.style.top = positionY + tooltip.caretY + 'px';
			tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
			tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
			tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
			tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
		};
        
                    
                                 
        window.onload = function () {
        
            console.log(currentKey);
            console.log(currentType);
        
            console.log(lineChartData);
            var chartEl = document.getElementById('chart');
			window.myLine = new Chart(chartEl, {
				type: 'line',
				data: lineChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js Line Chart - Custom Tooltips'
					},
					tooltips: {
						enabled: false,
						mode: 'index',
						position: 'nearest',
						custom: customTooltips
					}
				}
			});
            //window.myline.update()
            
        }    
        
        document.getElementById('select-key').addEventListener('change', function() {
			var e = document.getElementById('select-key');
            var value = e.options[e.selectedIndex].value;
            currentKey = value;
            generateData(currentKey, currentType);
            console.log("key-here");
            var chartEl = document.getElementById('chart');
			window.myLine = new Chart(chartEl, {
				type: 'line',
				data: lineChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js Line Chart - Custom Tooltips'
					},
					tooltips: {
						enabled: false,
						mode: 'index',
						position: 'nearest',
						custom: customTooltips
					}
				}
			});
			//window.myLine.update();
            
           
		});

        document.getElementById('select-type').addEventListener('change', function() {
			var e = document.getElementById('select-type');
            var value = e.options[e.selectedIndex].value;
            currentType = value;
            generateData(currentKey, currentType);
        }
            console.log("type - here");
            var chartEl = document.getElementById('chart');
			window.myLine = new Chart(chartEl, {
				type: 'line',
				data: lineChartData,
				options: {
					title: {
						display: true,
						text: 'Chart.js Line Chart - Custom Tooltips'
					},
					tooltips: {
						enabled: false,
						mode: 'index',
						position: 'nearest',
						custom: customTooltips
					}
				}
			});
			window.myLine.update();
            
           
		});

        
	