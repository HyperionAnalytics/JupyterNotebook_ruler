# Add Ruler to Code Cells of Jupyter and IPython Notebook

Jupyter and IPython notebook setting enabling ruler in code cells using custom.js and custom.css files. Ruler will appear when user click-select code cell to edit it and disappear when user goes into command mode.<br>

## Installation
These installation instructions are for "vanilla" Jupyter and IPython notebook setup. If you have themed and customized your setup, I will assume you know how to patch this into custom.css and custom.js files.
#### Linux and OS X
Copy **custom.css** and **custom.js** files into:<br>
**~/.ipython/profile_default/static/custom**<br>
You will overwrite two existing place-holding files with same names.<br><br>
#### Windows
Copy **custom.css** and **custom.js** files into:<br>
**C:\Users\YourUserName\\.ipython\profile_default\static\custom**<br>
You will overwrite two existing place-holding files with same names.<br><br>
## Custom settings
* To change column at which ruler is displayed, change variable `column_number` in file **custom.js**.
* To style ruler, change values of `.CodeMirror-ruler` CSS class in file **custom.css**.
![alt txt](https://github.com/HyperionAnalytics/JupyterNotebook_ruler/blob/master/Jupyter_ruler "Jupyter ruler")
