# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0067`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0067/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0067/input.js"
		end: Object {
			column: 0
			index: 8
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Invalid left-hand side in "}
						"assignment expression"
					]
				}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0067/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 2
					index: 2
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0067/input.js"
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0067/input.js"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0067/input.js"
						end: Object {
							column: 2
							index: 2
							line: 1
						}
						start: Object {
							column: 3
							index: 3
							line: 1
						}
					}
				}
				right: JSNumericLiteral {
					value: 42
					format: undefined
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0067/input.js"
						end: Object {
							column: 7
							index: 7
							line: 1
						}
						start: Object {
							column: 5
							index: 5
							line: 1
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0067/input.js:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in assignment expression

    +i = 42
    ^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```