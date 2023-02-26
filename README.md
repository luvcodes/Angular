# Angular
Angular repository for learning pupose

### Angular operation steps: 

1. Start with the `src/main.ts` file, we bootstrap an Angular application, and we pass this module as an argument -> `platformBrowserDynamic().bootstrapModule(AppModule)`
2. Then go to `src/app/app.module.ts` file, in the `@NgModule` component, we tell Angular there is this `bootstrap: [AppComponent]`
3. Then Angular will go to the `src/app/app.component.ts` file, then it reads the setup we pass here, and therefore knows this `selector` app route, in this case `app-root`
4. Then Angular will go to the `src/index.html` file, which means Angular will be able to handle the `app-root`, in this case, `<app-root></app-root>`. 
5. Then here Angular will insert the AppComponent. And the AppComponent happens to have a template attached to it, which is the `src/app/app.component.html` file   
   
### Create the first component - `ServerComponent`

1. Create a folder called `server` under the app folder
2. Create the `server.component.ts` file, create the export class, then create the `@Component`, define `selector` and the `templateUrl`
   1. The `selector` is considered as the target
   2. The `templateUrl` is considered as the the html file to be displayed on the webpage
3. Create the `server.component.html` file, as the templateUrl above
4. Go to `app/app.module.ts`
   1. under the declarations section, add the `ServerComponent`, which is the class name in the `server.component.ts` file
   2. import the ServerComponent class
5. Call the selector, which is `<app-server></app-server>` in the `app/app.component.html` file


### Create the second component with command at once - `ServersComponent`

1. Under the project folder, run command `ng generate component servers`, this will automatically create four essential files for the ServersComponent
2. Delete the testing .ts file
3. Go to `app.module.ts` file, include the new class - `ServersComponent` and also the import class for it
4. Go to servers.component.html file, call the `<app-server></app-server>` for **twice**
5. Go to `app.component.html` file, call the `<app-servers></app-servers>` for once
**So in this case, the contents in the `server` html will be called `twice`, and pass to the `servers`. Then the `app component` html file will call the `servers`, so the page will display the `<p>The Server Component</p>` twice.**   

### Key concepts:

**What is a app module?** A bundle of functionalities of our app and it basically gives angled information which features does my app have and use.

**Selectors:** selectors can select by element(common method), also can select attributes (attribute selector), and can select by class.