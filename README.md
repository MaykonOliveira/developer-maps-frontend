<h1 align="center">
    <img src="https://image.flaticon.com/icons/png/512/235/235861.png" height=100/>
    <br>
    Developer Maps
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MaykonOliveira/developer-maps-frontend.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MaykonOliveira/developer-maps-frontend.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/MaykonOliveira/developer-maps-frontend.svg">

  <a href="https://github.com/MaykonOliveira/developer-maps-frontend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MaykonOliveira/developer-maps-frontend.svg">
  </a>

  <a href="https://github.com/MaykonOliveira/developer-maps-frontend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/MaykonOliveira/developer-maps-frontend.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/MaykonOliveira/developer-maps-frontend.svg">
</p>

# Screens

## Add developer

<img alt="Web" title="web" width="900" src="examples/gifs/create.gif">

## Delete developer

<img alt="Web" title="web" width="900" src="examples/gifs/delete.gif">

## Github acess

<img alt="Web" title="web" width="900" src="examples/gifs/github_access.gif">

# Prerequisites

- Node
- Yarn

# Run the project

To run this project you need execute the following steps:

1. Clone the repository: `git clone git@github.com:MaykonOliveira/developer-maps-frontend.git`

2. Enter in the directory of the project: `cd developer-maps-frontend`

3. Install the dependencies: `yarn`

4. Execute the project: `yarn start`

# Observations

* The backend used in the examples of this project is hosted on Heroku, so there may be lag in the gifs because of that.

* To run the joint project on the backend you can find it here, you just need to create a configuration file (.env) in this project with a variable called `REACT_APP_API_URL` containing the URL for accessing the backend, usually` localhost: 3333`

# What are the next steps?

- [ ] Adjust the layout to use Material-UI to be more responsive.
- [ ] Create a update function to the Dev cards.
- [ ] Create a Login interface with access levels.

## License

MIT

See the [License](LICENSE.md) file.
