# Agrigistics Assignment

## Setup

### Run the project

- **Prerequisites**: Node.js 20+ and npm

- **Install dependencies**:

```bash
npm install
```

- **Start the dev server**:

```bash
npm start
```

- **Open the app**: visit `http://localhost:4200/`

### Optional

- **Build for production**:

```bash
npm run build
```

---

## Time Spent

1. Reading assignment, reading Angular docs: 15 minutes
2. Initial project setup and publish to GH: 10 minutes
3. Going over the initial project to understand it better. Some restructuring, removing unnecessary files/ code: 20 minutes
4. Explaining the assignment to Cursor, providing the assignment doc, screenshot of the figma design, and my own input to give context on my level of understanding of the required framework (Angular): 15 minutes
5. After initial AI implementation, some back and forth with the Agent about requirements and getting it to explain the reasoning behind the decisions that were made. Removing some unnecessary code: 20 minutes
6. Style and markup changes to match the Figma design: 80 minutes
7. Updating README.md: 20 minutes

180 minutes total

---

## Still TODO:

1. Fix responsive issues.
2. Complete styling of data table.
3. Refactor.

## Challenges

1. Time constraints. I would have liked double the time to complete this assignment in full. I addressed this by focusing on getting the skeleton built, and then starting refinement based on the order of importantnce specified.
2. Doing this assignment using a framework I've never used before. Addressed by leaning more heavily on AI tools, to translate what I wanted done conceptually into the required syntax.

---

## Improvements

1. The main improvement would be to make the project match the Figma design better. I simply ran out of time for this.
2. Second improvement would be to spend some time refactoring and abstracting the components or functionality that made sense to abstract.
3. Lastly a new feature I'd add would be an employee list section, that could be navigated to when the return button was clicked in the second column section. From there one would be able to select other employees and have their data shown in the dashboard.

---

## AI Tool Usage Reflection

The AI tools I used for this assignment were Claude (webapp) and Cursor (IDE).

I used Claude to generate the JSON file for the dummy data for the assignment. I simply provided it with the assignment document, and a screenshot of the Figma file, and it gave me the JSON.

I used Cursor for all development, in the interest of moving fast considering the time constraint. After providing Cursor with the assignment doc, the design screenshot, and some additional context about my knowledge of Angular, I prompted it to carry out the assignment. It basically one-shotted it, and there was only a small amount of back-and-forth to remove some things I did not ask for, and explain the reasoning and logic behind the generated code, to provide me with a better understanding of its purpose. I did not use tab-complete functionality in this, as I find it can be distracting, too often wrong, and likely to slow me down. I also used Cursor to get quick answers to questions like: "In an angular project like this, what's some generally acceptred ways of using icons from material ui?" (verbatim).

With regards to critique, the JSON Claude provided only contained 2 unnecessary properties, which I just removed myself. This was a huge time save compared to how long it would take me to write out the JSON for the data used in the dashboard. As far as my critique of Cursor in this case, it would be my usual critique of adding in unnecessary and unrequested code or features. I was quite surprised that it did the task in a single shot. Before pushing the code it had generated, I did a file by file review process where I asked it to do a self review of its code, and explain to me the purpose and logic behind the decisions that were made. This went very smoothly, and only fix had to be made. I will note here however that my perceived smoothness of the process may be due to my unfamiliarity with Angular, and there could well be issues with this code that I am not aware of, due to lack of experience with the framework itself. My issues with the generated code lay mainly in the markup and styles, with the usual suspects of div soup and lathering `display: flex` on everything.
