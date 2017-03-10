Theme gathered from https://github.com/BlackrockDigital/startbootstrap-freelancer

Steps for updating:

1. Clone the git repo: cd /tmp; git clone //github.com/BlackrockDigital/startbootstrap-freelancer.git; cd startbootstrap-freelancer
   -- you may do a 'git checkout v4-dev' to get early access to the development version, which uses bootstrap 4;
2. To test the theme: chromium index.html -- you may also execute "npm install" and "gulp" to build the css folder, or "gulp dev" to test the theme;
3. Copy the following folders to "assets": img js lib. You may delete 'lib/bootstrap' and 'lib/font-awesome', but this will require instance applications to enable the modules 'NgbModule' (ng-bootstrap) and 'PRIMENG_MODULES' (PrimeNG);
4. Grab the original 'index.html' from 'seed-theme' and copy it here, mixing with the startbootstrap-freelancer's index.html
5. Grab the original 'components/app.component.html' from 'seed-theme' and move there the relevant contents of startbootstrap-freelancer's index.html, preserving the <div platform> and <router-outlet> tags. Tip: include everything inside the body tag and preserve the body tag id into the app.component's div
6. Copy startbootstrap-freelancer's 'css/freelancer.css' here, on 'css/main.css' -- making sure no 'css/main.scss' exists