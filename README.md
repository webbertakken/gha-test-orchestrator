# GitHub Actions Test Orchestrator

This repository demonstrates a concept for orchestrating test execution in large monorepos using GitHub Actions. It shows how to:

1. Split test execution across multiple runners
2. Report progress back to a single GitHub Check
3. Maintain a clean PR/Merge Queue interface

## Architecture

The repository uses:
- Turborepo for monorepo management
- Jest for test execution
- GitHub Actions for CI/CD
- GitHub Checks API for progress reporting

## How it Works

1. When a PR is opened or updated, a single GitHub Check is created
2. Tests are split across multiple runners
3. Each test runner reports its progress back to the main check
4. The check is updated in real-time with test progress
5. All results are aggregated into a single check line in the PR

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run tests:
   ```bash
   yarn test
   ```

## Adding New Packages

To add a new package:

1. Create a new directory in `packages/`
2. Copy the structure from an existing package
3. Update the GitHub Actions workflow to include the new package

## Contributing

Feel free to open issues and pull requests to improve this concept. 
