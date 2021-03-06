
// The `enyo.application` entry point: `enyo.App`
// ----------------------------------------------
// An _application_ is a _component_ that includes some additional
// functionality based on the premise that there is only one
// application. Once an app has started, the top-level application
// object may be accessed as `enyo.application` from any point in the
// code.
//
// By default, `index.html` and `debug.html` contain calls to a new
// method, `enyo.start`. This looks for the singleton instance
// generated by calling `enyo.App` and passing in the properties for
// the `rootView` of the application.
//
// The properties passed to `enyo.App` constitute the base view of the
// application and can always be referenced in one of two ways--as
// `enyo.application.rootView`, or as the namespace (in this case,
// `App.rootView`) created from the `name` property passed into `enyo.App`.
//
// At this point, without further modification, your app is ready to
// run and your root view will be rendered as usual into `document.body`.
enyo.App({
    // The `name` property is key, since this is assumed to be the default
    // namespace of the application. While there is no limit regarding the
    // namespaces you use for your objects, the convention is to rely on
    // the name you chose for your app.
    name: "App",
    // You can always apply CSS classes, even to the `rootView`.
    classes: "mvc-app",
    fit: true,
    layoutKind: "enyo.FittableRowsLayout",
    // Make sure to take a closer look at all of the subkind views in
    // this application, as they do a lot of interesting things.
    components: [
        {name: "toolbar", kind: "App.Toolbar"},
        {name: "main", kind: "App.Main"}
    ]
});
