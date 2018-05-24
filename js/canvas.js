class Canvas {
  constructor(id){
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(10, 10, 100, 100);
  }


}

export default Canvas;
