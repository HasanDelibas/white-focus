var white_focus_background ;
Node.prototype.wFocusIn = function(){
    this.wFocusOut();
    if( white_focus_background == null ){
        var white = document.createElement('div');
        white.className = 'white-focus-background';
        white.onclick = function(){
            this.focusedElement.wFocusOut();
        }
        document.body.appendChild(white);
        white_focus_background = white;
    }
    
    white.focusedElement = this;
    this.classList.add('white-focused-element');
    this.wFocusBackground = white;
    
}
Node.prototype.wFocusOut = function(){

    if( white_focus_background != null ){ 
        if(white_focus_background.focusedElement != null){ 
            white_focus_background.focusedElement.classList.remove('white-focused-element');
        }
        document.body.removeChild( white_focus_background );
        white_focus_background = null;
    }

}
