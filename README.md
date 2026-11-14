<h1 align="center">anuraj-dev.github.io</h1>

<p align="center">
  GitHub Pages repo for the public page at anuraj-dev.github.io.<br />
  Push to main and Pages publishes it. Right now that page is this README.
</p>

<p align="center">
  <a href="https://anuraj-dev.github.io/">Live site</a>
  ·
  <a href="https://github.com/Anuraj-dev/Anuraj-dev">Profile repo</a>
  ·
  <a href="https://github.com/Anuraj-dev/portfolio">Portfolio repo</a>
</p>

Visitors who open anuraj-dev.github.io see this README, rendered as the homepage. The repo holds only this file, so Pages has nothing else to serve. Pages builds the root of the `main` branch, so a change goes live when you push it.

There is nothing to install and no keys or accounts to set up. You need push access to this repo and nothing else.

## What you get

- **The README is the homepage.** The repo has no `index.html`, so GitHub Pages renders `README.md` at the site root. Every edit to this file appears on the live site after the next Pages build.
- **Pages builds on every push to main.** The source is the `main` branch at path `/`, using the legacy Pages builder. No build script or framework is involved.
- **HTTPS is enforced.** The `github.io` address serves over HTTPS only. No custom domain is set on the repo.
- **The profile rebuilds itself daily.** The profile README in Anuraj-dev/Anuraj-dev is refreshed by `refresh-readme.yml` at 01:20 UTC. The workflow runs `scripts/build_readme.py` and commits the output when anything changed. Portfolio work lives in Anuraj-dev/portfolio.

## Publishing

Edit a file, commit it, and push to `main`. Pages rebuilds the site from there.

To ship a real homepage, add an `index.html` at the root of `main`. It replaces this README on the site. Pages can also be pointed at another branch in the repo's Pages settings.

## License

MIT. See [LICENSE](LICENSE).
