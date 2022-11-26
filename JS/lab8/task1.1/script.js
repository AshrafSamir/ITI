function ChangeFont(font) {
  document.getElementById("PAR").style.fontFamily = font;
}

function ChangeAlign(align) {
  document.getElementById("PAR").style.textAlign = align;
}

function ChangeHeight(size) {
  if (size == "normal") {
    document.getElementById("PAR").style.lineHeight = "normal";
  } else {
    size = parseInt(size);
    document.getElementById("PAR").style.lineHeight = size;
  }
}

function ChangeLSpace(space) {
  document.getElementById("PAR").style.letterSpacing = space;
}

function ChangeIndent(indent) {
  document.getElementById("PAR").style.textIndent = indent;
}

function ChangeTransform(transform) {
  document.getElementById("PAR").style.textTransform = transform;
}

function ChangeDecorate(decoration) {
  document.getElementById("PAR").style.textDecoration = decoration;
}

function ChangeBorder(border) {
  document.getElementById("PAR").style.border = border;
}

function ChangeBorderColor(color) {
  document.getElementById("PAR").style.borderColor = color;
}
