function applyFormat(command) {
    document.execCommand(command, false, null);
}

document.getElementById('fontColorPicker').addEventListener('input', function() {
    var color = this.value;
    document.execCommand('foreColor', false, color);
});

function applyAlignment(align) {
    document.getElementById('editor').style.textAlign = align;
}

function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}