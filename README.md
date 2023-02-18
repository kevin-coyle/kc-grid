# KC - Grid

The purpose of this component is to have a really solid reusable grid component that can be utilised across multiple projects

## Usage

### Importing the project

Install the project:

```bash
npm install -D @kevincoyle/kc-grid
```

Import the component into your project:

```javascript
import "@kevincoyle/kc-grid";
```

Then in your HTML you can use the `<kc-grid>` component:

```html
<kc-grid>
  <div>Your content</div>
</kc-grid>
```

### Default Breakpoints

The default breakpoints are as follows:

| Breakpoint Name | Override Property        | Size/px |
| --------------- | ------------------------ | ------- |
| Small Mobile    | `smallMobileBreakpoint`  | 320     |
| Mobile          | `mobileBreakpoint`       | 480     |
| Tablet          | `tabletBreakpoint`       | 768     |
| Desktop         | `desktopBreakpoint`      | 1024    |
| Large Desktop   | `largeDesktopBreakpoint` | 1280    |

These can be overridden by applying the appropriate breakpoint property to the component. For example:

```html
<kc-grid smallmobilebreakpoint="200">
  <div>Content</div>
</kc-grid>
```

### Grid Variants

The component has the following variants available which can be specified by using the `variant` property on the component:

| Variant | Small Mobile Columns | Mobile Columns | Tablet Columns | Desktop Columns | Large Desktop Columns |
| ------- | -------------------- | -------------- | -------------- | --------------- | --------------------- |
| 1       | 1                    | 1              | 1              | 1               | 1                     |
| 1-2     | 1                    | 1              | 1              | 2               | 2                     |
| 1-3     | 1                    | 1              | 1              | 3               | 3                     |
| 1-4     | 1                    | 1              | 1              | 4               | 4                     |

For example to add a 3 column grid you'd put into your html:

```html
<kc-grid variant="1-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</kc-grid>
```

### Layout Container

An optional layout container is provided so that your content can sit in the middle of the page. This is by default 100% of the breakpoint width.

### Gap

A CSS custom property has been added to select the gap this is called `--kc-grid-gap` and can be set in css like so:

```css
kc-grid {
  --kc-grid-gap: 20px;
}
```

## Compatibility

This component should work on all modern browsers. Safari does not yet support Constructable Stylesheets which is required to add in the dynamic breakpoints so this has been added into the bundle.
