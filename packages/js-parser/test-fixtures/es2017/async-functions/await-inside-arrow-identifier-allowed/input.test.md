# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-arrow-identifier-allowed`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
		end: Object {
			column: 15
			index: 15
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
					end: Object {
						column: 15
						index: 15
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
						end: Object {
							column: 5
							index: 5
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
						end: Object {
							column: 15
							index: 15
							line: 1
						}
						start: Object {
							column: 6
							index: 6
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
								end: Object {
									column: 13
									index: 13
									line: 1
								}
								start: Object {
									column: 8
									index: 8
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "await"
								loc: Object {
									filename: "es2017/async-functions/await-inside-arrow-identifier-allowed/input.js"
									identifierName: "await"
									end: Object {
										column: 13
										index: 13
										line: 1
									}
									start: Object {
										column: 8
										index: 8
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```