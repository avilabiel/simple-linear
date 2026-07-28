# Simple Linear

This app is a simple linear using no AI and no libraries, bringing back the fun part of coding: coding!

If you want to understand more about requirements and technical decisions, please read this [document](https://docs.google.com/document/d/1upFruEOgCUIiuLwlROuEnUjlpPHtc0y0G4_q2QGj1OE/edit?usp=sharing).

## Commands

These are all the commands you will need in this project:

Start the app:

```bash
npm install
npm run dev
```

Automated tests:

```bash
npm tests
```

## Layers

This app will have the following layers:

- ui: components dealing with the UI
- app: high order components dealing with the logic
- services: different services like logic, API or 3rd party libraries (future). All 3rd parties will be implemented with Facade Design Pattern
