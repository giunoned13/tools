# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-export-default-and-export-as-default`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 57
			line: 3
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
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 23
					index: 53
					line: 2
				}
				start: Object {
					column: 9
					index: 39
					line: 2
				}
			}
			description: Object {
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Only one default export allowed per module."}
				advice: Array [
					log {
						category: "info"
						text: "Defined already here"
					}
					frame {
						location: Object {
							filename: "input.js"
							end: Object {
								column: 28
								index: 28
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
					}
				]
			}
		}
	]
	body: Array [
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 28
					index: 28
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "*default*"
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 28
							index: 28
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
				}
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 28
						index: 28
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 28
							index: 28
							line: 1
						}
						start: Object {
							column: 26
							index: 26
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
						filename: "input.js"
						end: Object {
							column: 25
							index: 25
							line: 1
						}
						start: Object {
							column: 23
							index: 23
							line: 1
						}
					}
				}
			}
		}
		JSEmptyStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 29
					index: 29
					line: 1
				}
				start: Object {
					column: 28
					index: 28
					line: 1
				}
			}
		}
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 26
					index: 56
					line: 2
				}
				start: Object {
					column: 0
					index: 30
					line: 2
				}
			}
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 23
							index: 53
							line: 2
						}
						start: Object {
							column: 9
							index: 39
							line: 2
						}
					}
					exported: JSIdentifier {
						name: "default"
						loc: Object {
							filename: "input.js"
							identifierName: "default"
							end: Object {
								column: 23
								index: 53
								line: 2
							}
							start: Object {
								column: 16
								index: 46
								line: 2
							}
						}
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 12
								index: 42
								line: 2
							}
							start: Object {
								column: 9
								index: 39
								line: 2
							}
						}
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

 input.js:2:9 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Only one default export allowed per module.

  ℹ Defined already here

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```