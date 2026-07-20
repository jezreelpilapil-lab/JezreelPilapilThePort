# Jezreel Aldave Pilapil - Portfolio

## Overview

This is the personal portfolio website of Jezreel Aldave Pilapil, showcasing his professional experience, skills, projects, and certifications.

## Features

- Responsive design using Tailwind CSS
- Interactive sections for About, Skills, Experience, Projects, Awards, Certifications, and Contact
- Reaction system for engagement
- Visitor counter
- Hidden command line for resetting reactions/visitor counter

## Tech Stack

- Vanilla JavaScript
- Tailwind CSS
- HTML5
- JSON (for content management)

## Usage

The portfolio is hosted at [https://jezreelpilapil-lab.github.io/JezreelPilapilThePort/](https://jezreelpilapil-lab.github.io/JezreelPilapilThePort/)

## Local Development

1. Clone the repository
2. Open `index.html` in a web browser, or run a local server like:
   ```bash
   python -m http.server 8000
   ```
3. Visit `http://localhost:8000` in your browser

## Content Management

All content is managed via `portfolio.json` - updates to experience, skills, etc., can be made there without modifying HTML/JS directly.

## Hidden Commands

The portfolio includes a hidden command line interface that can be accessed by clicking the bottom-left corner of the page (where the invisible padlock icon is located).

### Available Commands:

- **`reset icon`**: Resets all reaction counts and clears the current reaction.
- **`reset visitor`**: (Note: Visitor counter is managed by an external service, so this command does not currently modify the counter.)

### Error Handling:
- If an unknown command is entered, a red error bubble saying "Bad or unknown command" will appear and fade out after 2 seconds.
