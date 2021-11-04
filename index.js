const skillHover = function(event) => {
    event.target.style.fontSize = "4em";
}

const skillReturn = function(event) => {
    event.target.style.fontSize = "2em";
}



let eventAssignment = function(note) {
    note.onmouseover = function() {
      skillHover(event);
    }
    note.onmouseout = function() {
      skillReturn(event);
    }  
  }