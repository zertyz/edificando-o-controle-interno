Theme gathered from https://github.com/BlackrockDigital/startbootstrap-freelancer

Steps for updating:

1. Download the bootstrap 4.0's zip version from the master repository and unzip it somewhere else
2. Execute "npm install" and "gulp" to build the css folder, or "gulp dev" to test the theme
3. Copy the following folders to "assets": img js lib
4. Copy the relevant contents of "index.html" to components/app.component.html, preserving the <div platform> and <router-outlet> tags
   and not using (or not using only for freelancer.min.js, which should not be included anyway?) the *.min.* versions
   (should we also theme the angular2's index.html?? to include jquery and other javascripts, fonts, stylesheets...)
5. Copy "css/freelancer.css" to css/main.scss