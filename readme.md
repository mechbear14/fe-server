# FE Server: The workflow for Gabe's FE Level challenge

For whatever reason, the SVG plugin in VS Code didn't work well for Gabe when he wrote SVG in HTML. Thus, Gabe used a template engine to plug the SVG file into the HTML file for him. That way, he could write SVG in a separate file, where SVG plugin worked properly.

## Features

- Uses Liquid as template language
- Browser auto reload
- Build SVG into static pages

## Limitations

- Only one page supported
- The file must be called "index.liquid"
  ... but for this challenge it's fine. It's not meant to be reusable anyways. (May be fixed in the future)

## Dependencies

- express
- liquidjs
- browser-refresh
