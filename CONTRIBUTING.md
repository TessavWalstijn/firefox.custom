# Contributing Guidelines

Welcome to a project of [TessavWalstijn](https://tessavwalstijn.com)

Thank you for considering contributing to our open source projects. Here you will find our general guidelines for contributing. Please note that certain repositories may have slightly different guidelines.

We appreciate all kinds of contributions. **However, we prioritize PRs from existing community members, and underrepresented genders in tech**.

We take our [Code of Conduct](https://github.com/TessavWalstijn/tessavwalstijn/blob/master/CODE_OF_CONDUCT.md) very seriously, and all contributors must abide by it. Please take time to read it before contributing.

To dive deep:

- [Custom Firefox](#development-on-custom-theming-Firefox)
- [Custom Sidebery](#development-on-custom-theming-sidebery)

## New Contributors

If you're new to open source, check out the resources below to familiarize yourself with open source:

- [Git and GitHub learning resources](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources)
- [Git Guide](https://github.com/git-guides)
- [Git CLI Cheat Sheet](https://github.com/TessavWalstijn/git.cheat-sheet)

## Working With Issues

If you find an issue you would like to work on, comment on it, and a maintainer will respond and assign it to you. Only work on changes and create a PR after it's assigned to you.

**We only accept PRs from contributors who get assigned to the issues**.

Or had confirmation via an other medium. (Please have that clip when it was via a video format)

### 1. Finding Bugs or Suggesting Improvements

- If you find a bug or have a suggestion, [create a new issue](../../issues/new/choose).
- Select the appropriate template for bug reports or suggestions.
- Fill in the details and submit the issue.
- If you want to work on the issue, comment on it and _wait until a maintainer assigns it to you_ before you start work on changes.

### 2. Making Changes

- Fork the repository by clicking the "Fork" button.
- Clone your fork to your local machine and navigate to it:

  ```bash
  git clone https://github.com/your-username/project-name.git
  cd project-name
  ```

- Create a new branch for your changes:

  ```bash
  git checkout -b your-feature
  ```

- Make your changes in the new branch.
- Add and commit your changes:

  ```bash
  git add .
  git commit -m "Brief description of your changes"
  ```

- Push your changes to your fork:

  ```bash
  git push origin your-feature
  ```

### 3. Creating Pull Requests

- Go to your forked repository on GitHub.
- Merge in to the branch `develop`
- Click the green "Compare & pull request" button.
- Fill in the pull request form and click the green "Create pull request" button at the bottom.
- Make sure all the tests succeed

## License

By contributing, you agree that your contributions will be licensed under the [LICENSE](LICENSE.md) of this project.

## Development on custom theming Firefox

1. Follow the [README.md](./README.md)
1. Go to `about:config`
1. Set `devtools.chrome.enabled` to `true`
1. Set `devtools.debugger.remote-enabled` to `true`
1. Go 3 dashes > More tools > Browser Toolbox
1. Now you can find classes and id's for styling Firefox.
1. Close and restart to see changes in Firefox.

## Development on custom theming Sidebery

1. Follow the [README.md](./README.md)
1. Go to Sidebery settings
1. Click "Copy devtools URL" button in the bottom bar
1. Open a new tab with that URL
1. Select frame to inspect
   - Click on the rectangular icon (with three sections) in top-right area of the debugger page
   - Select "/sidebar/sidebar.html" for sidebar frame
   - Select "/sidebery/group.html" for group page frame
1. Browse "Inspector" tab

## Need Help?

If you have any questions or need assistance, feel free to reach out at the `#code-help` channel on [Discord](https://discord.gg/MkDbn4v) or open a discussion in the discussion board that you can find at the top bar of this repository.

Thank you for contributing to our project! 🚀
