import Griddle from './griddle.js';
import Condiments from './condiments.js';
import Window from './window.js';
import Patty from './patty.js';
import Burger from './burger.js';

class Game {
  constructor() {
    //Splash
    this.started = false;
    this.splash = new Image();
    this.splash.src = './src/imgs/splash2.png';
    this.gameOver = false;
    //Points
    this.points = 0;
    //Background elements
    this.griddle = new Griddle();
    this.condiments = new Condiments();
    this.window = new Window();
    //Interactive elements
    //Patties
    this.patty1 = new Patty();
    this.patty2 = new Patty();
    this.patty3 = new Patty();
    this.patties = [new Patty(), new Patty(), new Patty()];
    //Burgers
    this.burger1 = new Burger();
    this.burger2 = new Burger();
    this.burger3 = new Burger();
    this.burger1.burgerSection.x = 40;
    this.burger1.burgerSection.y = 500;
    this.burger2.burgerSection.x = 250;
    this.burger2.burgerSection.y = 500;
    this.burger3.burgerSection.x = 460;
    this.burger3.burgerSection.y = 500;
    //Attributes to aid in interactivity
    this.mousePatty = new Patty();
    this.cookedPatty = new Patty();
    this.cookedPatty.patty = this.cookedPatty.cookedPatty;
    this.mouseBurger = new Burger();
    this.draggingRaw = false;
    this.draggingBun = false;
    this.draggingHamburger = false;
    this.mouse = { x: 0, y: 0 };
    this.timeLeft = 60;
    this.timerIncremeneter = 0;
  }

  drawAll(x, y) {
    if (!this.started) {
      c.drawImage(this.splash, 0, 0);
      c.fillStyle = 'rgba(255, 255, 255, 0.7)';
      c.fillRect(0, 200, canvas.width, 180);
      c.font = '20px Arial';
      c.fillStyle = 'black';
      c.fillText('Welcome to Build-A-Burger!', 490, 230);
      c.fillText(
        'Your job will be to send out as many completed burgers as you can in under a minute.',
        235,
        270
      );
      c.fillText(
        'Grab raw patties from the door and place them onto the griddle. When ready, click on a patty to flip it.',
        200,
        295
      );
      c.fillText(
        'When the patties are cooked, place them onto the awating buns.',
        300,
        320
      );
      c.fillText(
        'Place a top bun onto the newly formed burger, and send it out the window to score points!',
        250,
        345
      );
      c.fillText(
        'If your clicks happen to be misaligned, please refresh the window!',
        300,
        370
      );
    }

    if (this.started) {
      this.griddle.drawGriddle();
      this.condiments.drawCondimentsTable();
      this.window.drawWindow();
      this.burger1.drawBurgers();
      this.burger2.drawBurgers();
      this.burger3.drawBurgers();
      //Checking patty1 "state"
      if (this.patty1.cooking) {
        this.patty1.drawOnGrill();
      } else if (this.patty1.flipping) {
        this.patty1.drawFlipping();
      }
      //Checking patty2 "state"
      if (this.patty2.cooking) {
        this.patty2.drawOnGrill();
      } else if (this.patty2.flipping) {
        this.patty2.drawFlipping();
      }
      //Checking patty3 "state"
      if (this.patty3.cooking) {
        this.patty3.drawOnGrill();
      } else if (this.patty3.flipping) {
        this.patty3.drawFlipping();
      }
      //If mouse is moving and held down, draw a patty onto the mouse
      if (this.draggingRaw) {
        this.mousePatty.x = x;
        this.mousePatty.y = y;
        this.mousePatty.drawPatty();
      }

      if (this.draggingCooked) {
        this.cookedPatty.x = x;
        this.cookedPatty.y = y;
        this.cookedPatty.drawPatty();
      }

      if (this.draggingBun) {
        this.mouseBurger.drawTopBun(x - 30, y - 30);
      }

      if (this.draggingHamburger) {
        this.mouseBurger.drawHamburger(x, y);
      }

      c.font = '30px Arial';
      c.fillStyle = 'black';
      c.fillText(`Score: ${this.points}`, 1000, 50);
      c.fillText(`Time Left: ${Math.floor(this.timeLeft)}`, 1000, 100);
    }
  }

  whichSectionGriddle(x, y) {
    if (!(y >= 400 && y <= 530)) {
      return '';
    }

    if (x >= 725 && x <= 825) {
      return 'section 1';
    } else if (x >= 915 && x <= 1000) {
      return 'section 2';
    } else if (x >= 1090 && x <= 1200) {
      return 'section 3';
    } else {
      return '';
    }
  }

  whichSectionBoard(x, y) {
    if (!(y >= 485 && y <= 550)) return '';

    if (x >= 20 && x <= 165) {
      return 'board section 1';
    } else if (x >= 230 && x <= 355) {
      return 'board section 2';
    } else if (x >= 440 && x <= 565) {
      return 'board section 3';
    }
  }

  resetPatty1() {
    this.patty1 = new Patty();
  }

  resetPatty2() {
    this.patty2 = new Patty();
  }

  resetPatty3() {
    this.patty3 = new Patty();
  }

  score(section) {
    switch (section) {
      case 'board section 1':
        this.burger1 = new Burger();
        this.burger1.burgerSection.x = 40;
        this.burger1.burgerSection.y = 500;
        this.points += 1;
        return true;
      case 'board section 2':
        this.burger2 = new Burger();
        this.burger2.burgerSection.x = 250;
        this.burger2.burgerSection.y = 500;
        this.points += 1;
        return true;
      case 'board section 3':
        this.burger3 = new Burger();
        this.points += 1;
        this.burger3.burgerSection.x = 460;
        this.burger3.burgerSection.y = 500;
        return true;
      case '':
        return false;
    }
  }

  inWindow(x, y) {
    return x >= 200 && x <= 500 && y >= 90 && y <= 340;
  }

  decreaseTimer() {
    if (this.timeLeft <= 0) {
      if (!this.gameOver)
        alert(`Game over! Your score is ${this.points}. Start over?`);
      this.gameOver = true;
      this.started = false;
      this.timeLeft = 360;
      this.points = 0;
      this.resetAll();
    } else {
      if (this.timerIncremeneter >= 60) {
        this.timeLeft -= 1;
        this.timerIncremeneter = 0;
      } else {
        this.timerIncremeneter++;
      }
    }
  }

  resetAll() {
    this.resetPatty1();
    this.resetPatty2();
    this.resetPatty3();
    this.burger1 = new Burger();
    this.burger2 = new Burger();
    this.burger3 = new Burger();
    this.burger1.burgerSection.x = 40;
    this.burger1.burgerSection.y = 500;
    this.burger2.burgerSection.x = 250;
    this.burger2.burgerSection.y = 500;
    this.burger3.burgerSection.x = 460;
    this.burger3.burgerSection.y = 500;
  }
}

export default Game;
