# Scientific Calculator

A scientific calculator I made using HTML, CSS and JavaScript.

I wanted to build something a little more interesting than a basic calculator, so I decided to make a scientific one. I also wanted it to look good, not just work, which is why I went with a dark design.

It can handle normal calculations along with scientific ones like functions like sin, cos, tan, logarithms, square roots and powers. It also has DEG and RAD modes, supports brackets and includes constants like π and e.

The best part is that you do not need to install anything to use it. Just open it in your browser and you're good to go.



*The calculator's dark interface.*

---

## How you use it

Using it is pretty simple. Open `index.html` in your browser and the calculator is ready.

You can either click the buttons or use your keyboard to enter expressions. Press Enter or `=` to calculate the answer, and use Backspace if you want to remove something.

Here's a quick look at what it can do:

| You press / enter  | What happens                             |
| ------------------ | ---------------------------------------- |
| `0-9`              | Enters numbers                           |
| `+`, `-`, `*`, `/` | Performs basic calculations              |
| `sin(30)`          | Calculates the sine of an angle          |
| `cos(60)`          | Calculates the cosine of an angle        |
| `tan(45)`          | Calculates the tangent of an angle       |
| `log(100)`         | Calculates logarithm (base 10)           |
| `ln(e)`            | Calculates natural logarithm             |
| `√(16)`            | Calculates the square root               |
| `2^3`              | Calculates powers                        |
| `π`, `e`           | Uses mathematical constants              |
| `(5+3)*2`          | Calculates expressions using brackets    |
| `DEG / RAD`        | Switches between degree and radian modes |
| `AC`               | Clears the display                       |
| `DEL`              | Removes the last entered character       |
| `Enter` or `=`     | Calculates the result                    |

---

## The design

I wanted the calculator to have a slightly different look from the usual ones we see everywhere.

The interface uses a dark theme with soft shadows, glowing indicators and different colours for different buttons.

Orange is used for mathematical operations, while green is used for scientific functions. The overall dark background keeps everything looking clean without making the screen too crowded.

I took some inspiration from physical scientific calculators like from the Casio fx-82MS, but wanted to give mine a bit more modern & digital look.

---

## How it works

The calculator is made using: HTML, CSS and JavaScript.&#x20;

1. HTML creates the structure of the calculator, including the display and all the buttons.
2. CSS handles the design, colours, shadows, spacing and button effects.
3. JavaScript does the actual calculations and makes the buttons functional.
4. Whenever you click a button or press a key, JavaScript updates the expression on the display.
5. When you press `=`, the expression is processed and the result is displayed.
6. For trigonometric functions, the calculator checks whether DEG or RAD mode is selected and calculates accordingly.

The keyboard support is also handled through JavaScript, so you don't have to depend on clicking every button.

---

## Files in this repo

| File         | What it's for                                                                  |
| ------------ | ------------------------------------------------------------------------------ |
| `index.html` | Contains the main structure, display and calculator buttons                    |
| `style.css`  | Handles the design, dark theme, shadows and button styling                     |
| `script.js`  | Handles calculations, scientific functions, DEG/RAD modes and keyboard support |

I kept the HTML, CSS and JavaScript in separate files to make things easier to manage and modify and also because I've learned that doing this is a good practice.

---

## Setting it up

There's not much to set up here. You do not need any special software, libraries or build tools.

All you need is a browser.

**1.** Clone the repository:

```bash
git clone https://github.com/morrhez/scientific-calculator.git
```

**2.** Open the downloaded folder.

**3.** Find `index.html` and open it in your browser.

That's it! Your calculator should be ready to use.

---

## Things worth knowing

**No installation required.** The entire project runs in your browser. There is no need to install Python, Node.js or any additional libraries.

**DEG and RAD modes.** Both modes are supported for trigonometric calculations. Just make sure you've selected the correct one before calculating.

**Keyboard support.** You can enter numbers and operators directly from your keyboard. Enter calculates the result, while Backspace deletes the last character.

**Works offline.** Once you've downloaded the project, you can use it without an internet connection.

---

## Why I made this

I made this project mainly to practise my HTML, CSS and JavaScript skills.

While making it, I got to practise working with JavaScript functions, handling user input, updating the interface and connecting everything together.

It's not the most advanced scientific calculator, but it was really a fun project to build and helped me learn quite a bit along the way.

---

## Author

Created by Mohammad Faraz Idreesi ([@morrhez](https://github.com/morrhez)).

If you use or build on this project, I'd love to hear about it!

---

*Made with HTML, CSS, JavaScript, and a lot of trial and error.*
