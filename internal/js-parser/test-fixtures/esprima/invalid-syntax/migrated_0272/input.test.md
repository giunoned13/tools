# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0272`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0272/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0272/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0272/input.js"
					identifierName: "A"
					end: Object {
						column: 7
						line: 1
					}
					start: Object {
						column: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0272/input.js"
				end: Object {
					column: 29
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0272/input.js"
					end: Object {
						column: 29
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "get"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "constructor"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0272/input.js"
									identifierName: "constructor"
									end: Object {
										column: 24
										line: 1
									}
									start: Object {
										column: 13
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0272/input.js"
								end: Object {
									column: 24
									line: 1
								}
								start: Object {
									column: 13
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0272/input.js"
							end: Object {
								column: 28
								line: 1
							}
							start: Object {
								column: 9
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0272/input.js"
								end: Object {
									column: 28
									line: 1
								}
								start: Object {
									column: 26
									line: 1
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0272/input.js"
								end: Object {
									column: 26
									line: 1
								}
								start: Object {
									column: 24
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 9
								line: 1
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0272/input.js"
								end: Object {
									column: 24
									line: 1
								}
								start: Object {
									column: 9
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```