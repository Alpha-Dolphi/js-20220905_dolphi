class Tooltip {
  static instance;

  constructor() {
    if (Tooltip.instance) {
      return Tooltip.instance;
    }

    Tooltip.instance = this;
  }

  onPointerOver = (event) => {    
    const element = event.target.closest('[data-tooltip]');
    if (!element) return;
    
    this.render(element.dataset.tooltip);    
    
    document.addEventListener('pointermove', this.onPointerMove);      
    
  }
  
  render(text) {
    this.element = document.createElement('div');
    this.element.className = 'tooltip';
    this.element.innerHTML = text;

    document.body.append(this.element);
  }
  
  
  onPointerMove = (event) => {    
    this.moveTooltip(event);
  };

  moveTooltip(event) {
    let left = event.clientX + 5;
    let top = event.clientY + 5;
    this.element.style.left = left +'px';
    this.element.style.top = top + 'px';
  }

  onPointerOut = (event) => {
    this.remove();
    document.removeEventListener('pointermove', this.onPointerMove);

  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  initialize () {
    document.addEventListener('pointerover', this.onPointerOver);        
    document.addEventListener('pointerout', this.onPointerOut);    
  }

  destroy() {
    this.remove();
    this.element = null;
    this.instance = null;
  }
}

export default Tooltip;
