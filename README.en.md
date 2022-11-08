**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Preparing a project

1. You have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. This project was created with
   [Create React App](https://github.com/facebook/create-react-app). To get
   acquainted and configure additional features
   [refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running the `npm start` command.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

# Admission criteria

- The `The goit-react-hw-04-feedback`.
- When submitting homework, there are two links: to the source files and the
  working pages of each assignment on `GitHub Pages`.
- There are no errors or warnings in the console when you run the code for the
  assignment.
- For each component has a separate folder with a React-component file and
  styles.
- The `propTypes` are described for the components.
- Component names are clear, descriptive.

**_Refactor the "Feedback Widget" task code from the second module using
React-hooks._**

## Previous task - Feedback Widget.

Like most companies, Expresso Cafe collects reviews from its customers. Your
task is to create an application to collect statistics. There are only three
options for feedback: good, neutral, and bad.

### Step 1.

The app should display the number of reviews collected for each category. The
app should not save review statistics between different sessions (page refresh).

The state of the application must be of the following form, no new properties
must not be added.

```js
state = { good: 0, neutral: 0, bad: 0 };
```

The interface might look like this.

<Image
  src="./assets/step_1.png"
  alt="component preview"
  maxWidth={960}
/>

### Step 2.

Expand the app's functionality so that the interface displays more statistics
about the collected feedback. Add a display of the total number of collected
reviews from all categories and the percentage of positive reviews. To do this,
create helper methods `countTotalFeedback()` and
`countPositiveFeedbackPercentage()` methods that calculate these values based on
state data (computable data).

<Image
  src="./assets/step_2.png"
  alt="component preview"
  maxWidth={960}
/>

### Step 3.

Perform a refactoring of the application. The state of the application must
remain in the `<App>` root component.

- Put the statistics display in a separate component
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}`
- Put the button box into a component
  `<FeedbackOptions options={} onLeaveFeedback={}`
- Create a component `<Section title="">` that renders a section with title and
  (children). Wrap each of the `<Statistics>` and `<FeedbackOptions>` in the
  created section component.

### Step 4.

Extend the functionality of the application so that the statistics block is
rendered only after after at least one feedback has been collected. The message
about absence of statistics put in the component
`<Notification message="There is no feedback">`.

<Image
  src="./assets/step_4.gif"
  alt="component preview"
  maxWidth={960}
/>
