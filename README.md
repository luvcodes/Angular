# Angular
Angular repository for learning pupose

### Angular operation steps: 
1. Start with the `src/main.ts` file, we bootstrap an Angular application, and we pass this module as an argument -> `platformBrowserDynamic().bootstrapModule(AppModule)`
2. Then go to `src/app/app.module.ts` file, in the `@NgModule` component, we tell Angular there is this `bootstrap: [AppComponent]`
3. Then Angular will go to the `src/app/app.component.ts` file, then it reads the setup we pass here, and therefore knows this `selector` app route, in this case `app-root`
4. Then Angular will go to the `src/index.html` file, which means Angular will be able to handle the `app-root`, in this case, `<app-root></app-root>`. 
5. Then here Angular will insert the AppComponent. And the AppComponent happens to have a template attached to it, which is the `src/app/app.component.html` file