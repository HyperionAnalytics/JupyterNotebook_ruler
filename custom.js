// Custom JavaScript settings for Jupyter notebook

$([IPython.events]).on('command_mode.Cell', function (event, data) {

    function clearRulers(cm) {
      for (var i = cm.display.lineSpace.childNodes.length - 1; i >= 0; i--) {
        var node = cm.display.lineSpace.childNodes[i];
        if (/(^|\s)CodeMirror-ruler($|\s)/.test(node.className))
          node.parentNode.removeChild(node);
      }
    }

    selected_cell = IPython.notebook.get_selected_cell();
      if ((selected_cell instanceof IPython.CodeCell)) {
          var cm = selected_cell.code_mirror;
          clearRulers(cm);
      }

});

$([IPython.events]).on('edit_mode.Cell', function (event, data) {

    function setRulers(cm) {
        var val = cm.getOption('rulers');
        var cw = cm.defaultCharWidth();
        var left = cm.charCoords(CodeMirror.Pos(cm.firstLine(), 0), 'div').left;
        var minH = cm.display.scroller.offsetHeight + 30;
        for (var i = 0; i < val.length; i++) {
          var elt = document.createElement('div');
          elt.className = 'CodeMirror-ruler';
          var col, cls = null, conf = val[i];
          if (typeof conf == 'number') {
            col = conf;
          } else {
            col = conf.column;
            if (conf.className) elt.className += ' ' + conf.className;
            if (conf.color) elt.style.borderColor = conf.color;
            if (conf.lineStyle) elt.style.borderLeftStyle = conf.lineStyle;
            if (conf.width) elt.style.borderLeftWidth = conf.width;
            cls = val[i].className;
          }
          elt.style.left = (left + col * cw) + 'px';
          elt.style.top = '-60px';
          elt.style.bottom = '-20px';
          elt.style.minHeight = minH + 'px';
          cm.display.lineSpace.insertBefore(elt, cm.display.cursorDiv);
        }
      }

    var ruler = [{column: 79}];

    selected_cell = IPython.notebook.get_selected_cell();
    if ((selected_cell instanceof IPython.CodeCell)) {
        var cm = selected_cell.code_mirror;
        cm.setOption('rulers', ruler);
        setRulers(cm);
    }
});
