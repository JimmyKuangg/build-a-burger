# Build-A-Burger

## Background

Build-A-Burger is a game where you work as a short order cook. It's the lunch rush, and you're the only one on the line today. Get as many of those burgers out as possible, and don't burn anything.

![Screen Shot 2021-10-20 at 3 52 34 PM](https://user-images.githubusercontent.com/66882632/138208527-46393cb1-9a35-4e07-b5ad-604175ae8c5b.png)

## Functionality

In Build-A-Burger, users will be able to:

- Click and drag ingredients
- Keep a score
- Assemble burgers
- Have some form of timer on the cooking of the burgers

## Wireframes

<img src='src/imgs/wireframe.png'/>

## Technologies, Libraries, APIs

This project is implemented with these technologies:

- Canvas to render the view
- HTML
- CSS

## Top Features

### The canvas

The entire project is built using Canvas. Alot of the art was also built by using Canvas code, so there are many elements of the canvas that is drawn using
Canvas' built-in methods to draw lines. An example of how I drew things out on Canvas is shown below.

```javascript
drawGriddle(){
    this.drawGriddleBottom();
    this.drawGriddleTop();
    this.drawGriddlePlate();
    this.drawGriddleSections();
  }

  drawGriddleBottom(){
    c.rect(600, 575, 610, 30);
    c.rect(625, 605, 610, 100);
    c.fillStyle = '#d7d7cb'
    c.fill();
    c.stroke();
  }
  drawGriddleTop(){
    c.beginPath();
    c.moveTo(600, 575);
    c.lineTo(725, 400);
    c.lineTo(1200, 400);
    c.lineTo(1200, 625);
    c.lineTo(1200, 575);
    c.fillStyle = '#d7d7cb'
    c.fill();
    c.stroke();
  }

  drawGriddleSections(){
    c.beginPath();
    c.moveTo(825, 530);
    c.lineTo(915, 400);
    c.moveTo(1000, 530);
    c.lineTo(1090, 400);
    c.stroke();
  }
```

## Implementation Timeline

- Friday - Initial setup of the project. Get used to Three.js and how to manipulate meshes, shapes, and rotations. Attempt to render a background and kitchen.

- Saturday - Learn more about Three.js. Render all ingredients to the view.

- Sunday - Figure out the implementation of classes for each ingredient. Work on underlying code for the classes and objects.

- Monday - If there are bugs (more than likely will be), fix them. Ensure all code is working before attempting to render more objects and add more complexity. Work on burger class.

- Tuesday - Add collision and stackability for the burgers on the view. Ensure scores can be updated and that burgers can be sent out.

- Wednesday - Styling the page and making sure everything looks pretty.

- Thursday Morning - Work out any remaining problems and push to Github.

## Roadmap for the Future

- Fix up code to be more DRY

- Change images of everything to a different less MS-Paint heavy style

- Add more ingredients to be able to click and stack onto the burgers

- Have tickets come in and order a specific burger
