# SWE-Second-Year — Course Work & Weekly Projects

This repository collects the coursework, labs, and projects produced for the second-year Software Engineering (SWE) curriculum. It is organized by week and contains a mixture of small labs, front-end prototypes, and exercise solutions intended to demonstrate incremental learning across the semester. The repository functions both as a development sandbox and a portfolio of the practical work completed during the course.

## Repository purpose

- Provide a single canonical location for weekly assignments, lab solutions, and small projects produced during the course.
- Preserve incremental progress: each week’s folder contains the materials delivered for that period (exercises, demos, and templates).
- Make it straightforward for instructors and collaborators to inspect, run, and evaluate the work.

## High-level contents

- week1/ — Initial exercises and a React + Vite starter project.
  - week1/lab1/README.md — early lab notes and a placeholder README.
  - week1/my-react-app/ — a React + Vite scaffold (development template).
- week2/ — Front-end practice project(s) (fe-pp1-part1 includes a React + Vite template/readme).
- week3/ — (folder present; contains that week’s exercises and projects)
- week4/ — (folder present)
- week5/ — (folder present)
- week6/ — (folder present)
- week7/ — (folder present)


Note: Several week folders contain scaffolds and templates (notably React + Vite). Where a folder contains a full application (for example a small front-end assignment), you will find local README files and the application source.

## What work has been done

- Foundations and labs: The repository begins with lab write-ups and small exercise artifacts that capture the earliest, formative activities for the course.
- Front-end prototypes: Multiple entries use the React + Vite template to demonstrate front-end development practice — these act as practical implementations of weekly frontend tasks and small projects.
- Incremental structure: Work is grouped by week so that each week’s learning outcomes, exercises, and short projects are isolated and reproducible.

Where specific READMEs exist (for example `week1/lab1/README.md` and `week1/my-react-app/README.md`), they provide per-folder context. If you prefer, these can be expanded into a consistent format across all weeks (see “Suggested improvements” below).

## How to run front-end projects (React + Vite)

Most front-end folders that use the Vite template will follow the same basic commands:

1. Install dependencies
   - npm: `npm install`
   - yarn: `yarn install`
2. Run the dev server
   - npm: `npm run dev`
   - yarn: `yarn dev`
3. Build for production
   - npm: `npm run build`
   - yarn: `yarn build`
4. Preview the production build
   - npm: `npm run preview`
   - yarn: `yarn preview`

These commands assume that each front-end subproject contains its own package.json and the standard Vite scripts.

## Recommended repository conventions (suggested improvements)

To raise clarity and maintainability, consider the following:

- Unified top-level README (this file) plus consistent per-week README templates:
  - Purpose, learning outcomes, how to run, notable decisions, next steps.
- Add CONTRIBUTING.md with guidance on branch naming, pull requests, and issue templates for collaborative improvement.
- Add a LICENSE file (if not yet present) to clarify reuse and distribution permissions.
- Consider tagging or labelling weeks that contain complete demos vs. exercises to signal which folders are runnable demos.
- If exercises include sensitive or personal data, ensure those are removed before sharing.

## Contribution & workflow

- Branch for each feature or week improvement: `weekX/<short-description>`
- Open a pull request with:
  - Description of changes
  - How to reproduce or run the updated content
  - Any screenshots or demo links if applicable
- Use meaningful commit messages and keep commits focused (one logical change per commit).

If you want me to add this README.md to the repository directly, I can create a commit and push it to `main` (I will need your confirmation before making changes).

## Contact / author

Repository owner: mustah21  

