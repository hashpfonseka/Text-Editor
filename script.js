function applyFormat(command) {
    document.execCommand(command, false, null);
}

document.getElementById('fontColorPicker').addEventListener('input', function() {
    var color = this.value;
    document.execCommand('foreColor', false, color);
});