# MUI Card with Bodiless Data

In this example, we show how to add Bodiless editors to the content fields of the card.

We demonstrate two alternatives:
- For the image, we write a small transformer which adapts the Bodiless image data model
(which matches the props of the html `img` tag) to the props expected by the MUI `MediaWrapper`
component.
- For the text fields, we simply insert the Bodiless `Editable` into the content areas of
the card.

This is useful even if we don't want to use the Bodiless editors, because it provides a
standard data model to which external content (eg from a CMS) can be mapped.

> @TODO Add example of external data.