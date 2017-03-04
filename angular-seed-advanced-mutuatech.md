# Customization and Configuration on angular-seed-advanced-mutuatech

This document explains what are the *mutuatech patches* applied to the *angular-seed-advanced* project, the problem they solve and the philosophy behind them.
  
The technology brought by *Angular*, *angular-seed* and the *angular-seed-advanced* projects opened up the horizon for a
common framework able to deploy for web, desktop and mobile, to be reused by several projects, promoting the needed
decoupling and modularization of components (or Angular Modules), easing maintenance and lowering production costs while
speeding up the whole development cycle by enabling instances of this "common framework" (called here **instance projects**)
to focus on their business logic.

The *mutuatech* patches are, therefore, a set of improvements on the mentioned projects, allowing us to accomplish these
goals by providing **a central framework to be used as a base for all website, desktop and mobile development, to the point where
new projects, ideally, will only have to care about their business logic, leaving web, desktop and mobile idiosyncrasies
to the framework itself to solve.**

Since instance projects derive from the common framework (via the **git fork** mechanism), a two way channel to communicate
enhancements and improvements is stablished: on one hand, instance project developers are able to update their code with the
**upstream changes** (a git term denoting the instance project team will benefit, throught time, from any improvements
the framework team adds to the code base) and, on the other hand, any improvements to the mobile and web modules, themes, ...
may be shared back upstream (what git calls a **pull request**, or PR for short).


## Requisites

Without the *mutuatech patches*... *Angular*, *angular-seed* and the *angular-seed-advanced* lacks the following requisites
to be able to provide the described framework:

1. **Theming** -- since several projects may use the same theme, the work of coding and updating a set of starter themes should be a
                 task of the framework. Please refer to [Theming on angular-seed-advanced-mutuatech](themes/README.md).
2. **Programmatic Dependencies** -- Since these projects already use Typescript for most of it's configuration, there is
                                   no need to hard code external dependencies and integration code (on npm packages, for
                                   instance). Instead, new pages (Angular components) and components (Angular modules)
                                   should integrate theirselves and their external dependencies into the framework,
                                   allowing instances to not care about including or excluding them; *we'll have to deal
                                   with* **package.json***, which, as any other json, is hard coded -- maybe we can place
                                   section marks on the package.json file and provide a script to update the contents
                                   on that section*.
3. **The set of reusable modules** -- These are modules commonly used by websites, desktop applications and mobile apps,
                                      which, for the sake of reusability, will be taken care by the framework development
                                      team.
4. **A workflow** -- Our base projects are the state-of-art in web development. It may or may not be a metter of time, but,
                     truth to be told: none of them define a formal workflow. Here, we will not hesitate into making assumptions
                     like: we are using **git** to store source codes, developers will use a **unix based platform** (like
                     linux or mac) running **IntelliJ IDEA Ultimate** for development, different teams (in the eclectic
                     sense) will be working on the framework / instance projects and so on...

To make matters more clear, we will unify the concepts of the *mutuatech patches* and *the framework* for the rest of the document, meaning they are
the same thing -- and it is called **angular-seed-advanced-mutuatech**.
                                   

## The Problems

Each of the requisites above present their own problems, for which a solution will be tought of:

1. Since no theme support exists on the base projects, this issue is addressed from the ground by the
   [Theming on angular-seed-advanced-mutuatech](themes/README.md) document. Nevertheless, the selection of the active theme
   is still a problem to be solved.
2. [One of the currently documented ways of adding external dependencies on *angular-seed*](https://github.com/mgechev/angular-seed/wiki/Add-external-dependency)
   involves a lot of hard coding and editing a lot of files (even more files for *angular-seed-advanced*, since we also have to
   contemplate desktop and mobile). We expect to have to edit *zero framework files* when each instance adds its own
   dependencies, in order to minimize git upstream merge conflicts.
3. It will be an ongoing effort to be always updating both the modules and the themes to attend to real world project needs,
   effectively requiring this framework to be maintained through the lifetime of instance projects. 

## Implementation Architecture

The mentioned problems will be dealt with as follows:

### - Solving problem 1: Theming ###

Please refer to [Theming on angular-seed-advanced-mutuatech](themes/README.md) for a comprehensive analysis on the
problems and solutions regarding the theming engine. Please, also read the next section regarding the configuration files,
since the theme selection for instance applications will be done using those files.

### - Solving problem 2: Programmatic Dependencies ###

Adding external dependencies to instances of the *angular-seed-** family of projects means three things:

  * We need to *install* the dependencies -- that is, include them into *package.json* or into an
    *unmanaged_dependencies* directory;
  * We need to take care of dependencies when building and bundling the instance projects -- like copying
    the right files along with the web, desktop and mobile bundles;
  * We need to load any typescript classes and modules so that they may be actually used in the code and HTML.

To solve these issues, we'll have two sets of configuration files: one set to be included by the gulp build scripts and another
set to be included by the class and module loading scripts. These two groups of configuration files should read a third configuration
file, which is the instance's configuration file, to be filled with the minimum needed information: the module names, as strings,
meaning to the framework: "if the name of a framework module is listed on that file, the framework should take care of:
* Including all the module's external dependencies on the package.json; 
* Turn on the build configuration for that module;
* Turn on the loading configuration for that module".

Therefore, the **workflow for adding a new framework module to an instance project** will be:

1. Edit the instance's module activation file ```mutua.instance-project.config.ts``` and add the module name to the list;
2. Run the module activation scripts in order to get the updated *package.json* -- ```npm run mutua.update.packages```;
3. Run ```npm install``` to actually install the external dependencies;
4. Use the module as usual, i.e. on any HTML template of any component of the instance project;
5. Proceed to the normal ```npm run test```, ```npm run start.desktop```, ```npm run start.android```, ```npm start``` and
   ```npm run build.prod``` development, testing and integration workflows.

On the other hand, **framework developers will add new modules using the following workflow**:

1. Create the module as a normal Angular module, placing it under **src/client/app/shared/modules/...**;
2. ~~Let the module's **index.ts** export two classes: *MutuatechModuleBuildingConfiguration* and
   *MutuatechModuleLoadingConfiguration*. Documentation on these classes will come;~~
2. Edit ```mutua.available.modules.and.components.config.ts``` and add both building and loading configuration for the
   module/component -- programmatic inclusion of modules configuration is delayed since *angular-seed-** build scripts
   need a hardcoded *import* clause by now;
3. Follow the steps of the workflow above, in order to make use of the module on the framework's example application
   and to test it.

With the described implementation and workflows, developers now may:

* Implement reusable modules (to be reused on forked projects, called here "framework instance projects");
* Easily activate and deactivate modules on framework instances without incurring into merge conflicts, allowing the
  instances to be always updated with the upstream.
  
## Workflows ##

### Setting up a new development workstation ###

* Please download the Mutua Technologies Developer Linux Distribution;
* On **IntelliJ IDEA Ultimate**, configure the templates for Typescript files: open
  ```Settings->Preferences->Editor->File and Code Templates->TypeScript File``` and set the following as a template:
```
/** <pre>
 * ${NAME}
 * ====================
 * (created by ${USER} on ${DAY_NAME_SHORT}, ${MONTH_NAME_SHORT}, ${DAY}, ${YEAR})
 *
 * TYPE HERE WHY THIS CLASS MUST EXIST AND HOW
 * IT LINKS WITH THE OTHER CLASSES
 *
 * @see RelatedClass(es)
 * @author ${USER}
*/
```

### Creating an instance project ###

* Start a new git project and add this repository as the ```upstream```;
* Edit ```mutua.instance-project.config.ts``` and follow the instructions therein, specially to set the application name;
* In a terminal, go to the ```nativescript``` directory and set the android application to run with the minimum required
  SDK version with the command```tns platform add android --sdk 17``` --
  You may have to execute ```tns platform remove android``` before.

### Running the Android version ###

* ```cd nativescript/; tns run android --geny "Custom Phone - 4.3 - API 18 - 768x1280" --watch --timeout 180; cd ..```