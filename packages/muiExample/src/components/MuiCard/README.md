# MUI Card with FClasses

In this example we wrap the MUI card with FClasses functionality to make it more maintainable
and extensible.
- We create an `MuiCardClean` which simply renders the core MUI components without props.
- We create a token collection with a `Default` token (applying default styling), as well as
  a separate token to add content, and one to create a layout variation.

This technique has several advantages:

- More DRY and thus more maintainable.  Variations are encapsulated in tokens. To add a layout
  variation requires less than 10 lines of code. WIthout this approach, we would have either to
  copy the orignial card component (as we do in the Vanilla example), or build the variation
  into the component (eg controlled by an 'orientation' prop).  The first approach leads to a
  lot of duplicated code and the need to propagate updates to all variations manually.  The second
  approach leads, over time, to a bloated and overly complex component.
- More easily extensible.  Variations can be created without dependency on changes to the core
  library.  A brand could easily make a new layout variaiton while preserving all the styling,
  SEO, Accessibility, Data Model, etc of the original component.
- Out of the box shadowing and static replacement and snapshot teesting. Since the component was
  ccreated using the component scaffolder, these key capabilites are implemented automatically, with
  no extra developer effort - improving performance and maintainability.
