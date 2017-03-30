Theme gathered from https://github.com/BlackrockDigital/startbootstrap-freelancer

Steps for updating:

1. Clone the git repo: cd /tmp; git clone //github.com/BlackrockDigital/startbootstrap-freelancer.git; cd startbootstrap-freelancer
   -- you may do a 'git checkout v4-dev' to get early access to the development version, which uses bootstrap 4;
2. To test the theme: chromium index.html -- you may also execute "npm install" and "gulp" to build the css folder, or "gulp dev" to test the theme;
3. Copy the following folders to "assets": img js lib. You may delete 'lib/bootstrap' and 'lib/font-awesome', but this will require instance applications to enable the modules 'NgbModule' (ng-bootstrap) and 'PRIMENG_MODULES' (PrimeNG);
4. Grab the original 'index.html' from 'seed-theme' and copy it here, mixing with the startbootstrap-freelancer's index.html
5. Grab the original 'components/app.component.html' from 'seed-theme' and move there the relevant contents of startbootstrap-freelancer's index.html, preserving the <div platform> and <router-outlet> tags. Tip: include everything inside the body tag and preserve the body tag id into the app.component's div
6. Copy startbootstrap-freelancer's 'css/freelancer.css' here, on 'css/main.css' -- making sure no 'css/main.scss' exists

--
This theme seems to require the following components:
<m-product-title img='' title='' subtitle=''/>
<m-welcome [data] = "{img: '', title: '', slogan: ''}" />
<m-portfolio-list [data] = "[{img: '', title: '', subTitle: '', route: ''}, {imgFile: '', title: '', subTitle: '', route: ''}]" />
<m-about [data] = "[{p: ''}, {link: '', url: ''}, {img: ''}]" />
<m-contact [data] = "{nameStr: 'Name', nameValidationStr: 'Please enter your name.', emailStr: 'Email Address', emailValidationStr: 'Please enter your email address.', phoneStr: 'Phone Number', phoneValidationStr: 'Please enter your phone number.', messageStr: 'Message', messageValidationStr: 'Please enter a message.', submitStr: 'Send'}" />
<m-footer...>
<m-portfolio-entry...>

And, for mutua & instant vas:
m-audio-player
m-beta-disclaimer
m-carousel
m-contact-us
m-faq
m-features
m-navigation-menu
m-pricing
m-proposal
m-signup
m-slides
m-social-networks
m-subscribe
m-timeline
m-video-player
m-welcome