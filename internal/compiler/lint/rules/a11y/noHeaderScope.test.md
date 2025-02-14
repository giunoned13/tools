# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `a11y/noHeaderScope`

### `0`

```

 lint/a11y/noHeaderScope/reject/1/file.tsx:1 lint/a11y/noHeaderScope  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid using the scope attribute on elements other than th elements.

    <div scope={scope} />
    ^^^^^^^^^^^^^^^^^^^^^

  ℹ Using the scope attribute incorrectly on tables makes them difficult to navigate using the
    keyboard.

  ℹ Safe fix

  - <div·scope={scope}·/>
  + <div·/>


```

### `0: formatted`

```tsx
<div />;

```

### `1`

```

 lint/a11y/noHeaderScope/reject/2/file.tsx:1 lint/a11y/noHeaderScope  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid using the scope attribute on elements other than th elements.

    <div scope='col' />
    ^^^^^^^^^^^^^^^^^^^

  ℹ Using the scope attribute incorrectly on tables makes them difficult to navigate using the
    keyboard.

  ℹ Safe fix

  - <div·scope="col"·/>
  + <div·/>


```

### `1: formatted`

```tsx
<div />;

```

### `2`

```

```

### `2: formatted`

```tsx
<th scope={scope}>
</th>;

```

### `3`

```

```

### `3: formatted`

```tsx
<th scope="col">
</th>;

```

### `4`

```

 lint/a11y/noHeaderScope/reject/1/file.html:1 lint/a11y/noHeaderScope  FIXABLE  ━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid using the scope attribute on elements other than th elements.

    <div scope="col" />
    ^^^^^^^^^^^^^^^^

  ℹ Using the scope attribute incorrectly on tables makes them difficult to navigate using the
    keyboard.

  ℹ Safe fix

  - <div·scope="col"·/>
  + <div·/>


```

### `4: formatted`

```html
<div />

```

### `5`

```

```

### `5: formatted`

```html
<th scope="col">
</th>

```
