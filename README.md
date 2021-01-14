1. Navigate to where you want to create your project in a terminal. Type: ng new cat-facts
2. Once the project is created, cd into it, and open your code in VS Code. Typing: code src in a terminal will launch the src files in VS Code
3. In app.module.ts import the HttpClientModule (slide 134)
4. In the terminal create a service by typing: ng generate service cat
5. In cat.service.ts import the HttpClient (slide 136) and inject it into the constructor
6. Create a url property of type string, and assign it the Cat Fact API url: "https://cat-fact.herokuapp.com/facts"
7. Write a getCatFact() function using the .get method of the HttpClient, and console.log the data for testing purposes. Start with:

  `getCatFact() {
    return this.http.get(this.urlString).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}`

8. In the terminal make a component. Type: ng generate component cat-fact
9. In app.component.html delete the boilerplate code and replace it with `<app-cat-fact></app-cat-fact>`
10. Fire up you app. In the terminal type: ng serve -o
11. Make a cup of tea and wait patiently.
12. Express mild amusement when your browser opens and the page says "cat-fact works!"
13. In the cat-fact.component.ts import your service, and add it as a provider in your component, and add it to the constructor
14. In onInit() call the getCatFact funtion of your catService
15. Save your project, go to the browser and open the developer console. You should see an array of objects, each of which contains a cat fact!
16. Examine the structure of this array, and puzzle over how you can model your interface to match. And which data you want to capture.
17. In the service, before the class, create an interface to hold your data (a cat fact). Your property names must match the names in the JSON (ie they called the cat fact 'text')
18. Inside the class, give it a public property of an array of your interface, and initialize it to an empty array.
19. In the service, edit the getCatFact() function to loop over the data and push it onto the array. Type: forin and let VS Code create a loop for you. Edit the varible names so your function now looks something like:

`getCatFact() {
    return this.http.get(this.urlString).subscribe(
      (data) => {
        console.log(data);
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const catFact = data[key];
            this.catFacts.push(catFact);
          }
        }
      },
      (error) => console.log(error)
    );
  }`
  
20. Return to your cat-fact component html. Now you can loop over the array provided by your service:
`<div *ngFor="let fact of catService.catFacts">{{fact.type | uppercase}}: {{fact.text}}</div>`

BEHOLD!



# CatFacts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
