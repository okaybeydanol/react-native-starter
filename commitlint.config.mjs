/**
 * Commitlint Configuration
 *
 * This configuration enforces Conventional Commits standard to maintain a
 * structured git history for semantic versioning and automated changelogs.
 *
 * Rule format: [level, applicable, value]
 * Levels: 0 = disabled, 1 = warning, 2 = error
 */
export default {
  // Use the conventional commits standard as base configuration
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Require a blank line between subject and body
    // Improves readability in git log and changelogs
    'body-leading-blank': [1, 'always'],

    // Limit body line length to 100 characters for better readability
    // in terminals, git UIs, and GitHub displays
    'body-max-line-length': [2, 'always', 100],

    // Require a blank line before footer section (breaking changes, references)
    // Separates footer from body content visually
    'footer-leading-blank': [1, 'always'],

    // Limit footer line length to 100 characters for consistent display
    'footer-max-line-length': [2, 'always', 100],

    // Limit header (type(scope): subject) length to 100 characters
    // Ensures commit messages are concise and readable in git logs
    'header-max-length': [2, 'always', 100],

    // Enforce specific casing for subject line
    // Prevents capitalized subjects (e.g., "Fixed bug") for consistency
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],

    // Require a subject line (message after type/scope)
    // Ensures descriptive commit messages
    'subject-empty': [2, 'never'],

    // Prevent trailing period in subject line
    // Maintains consistent formatting
    'subject-full-stop': [2, 'never', '.'],

    // Enforce lowercase for commit type (feat, fix, etc.)
    // Ensures visual consistency across commits
    'type-case': [2, 'always', 'lower-case'],

    // Require commit type to be specified
    // Critical for automated semantic versioning
    'type-empty': [2, 'never'],

    // Define allowed commit types
    // Categorizes changes for semantic versioning and release notes
    'type-enum': [
      2,
      'always',
      [
        'build', // Changes to build system or external dependencies
        'chore', // Maintenance tasks, dependency updates, etc.
        'ci', // Changes to CI configuration and scripts
        'docs', // Documentation updates only
        'feat', // New features (triggers MINOR version in semver)
        'fix', // Bug fixes (triggers PATCH version in semver)
        'perf', // Performance improvements
        'refactor', // Code changes that neither fix bugs nor add features
        'revert', // Reverts a previous commit
        'style', // Code style changes (whitespace, formatting, etc.)
        'test', // Adding or correcting tests
      ],
    ],
  },
};
