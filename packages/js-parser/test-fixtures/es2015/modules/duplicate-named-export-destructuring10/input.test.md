# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-destructuring10`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
		end: Object {
			column: 0
			index: 61
			line: 3
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
				end: Object {
					column: 24
					index: 24
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
					name: "foo"
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
						identifierName: "foo"
						end: Object {
							column: 19
							index: 19
							line: 1
						}
						start: Object {
							column: 16
							index: 16
							line: 1
						}
					}
				}
				loc: Object {
					filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
					end: Object {
						column: 24
						index: 24
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
						end: Object {
							column: 24
							index: 24
							line: 1
						}
						start: Object {
							column: 22
							index: 22
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
						filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
						end: Object {
							column: 21
							index: 21
							line: 1
						}
						start: Object {
							column: 19
							index: 19
							line: 1
						}
					}
				}
			}
		}
		JSEmptyStatement {
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
				end: Object {
					column: 25
					index: 25
					line: 1
				}
				start: Object {
					column: 24
					index: 24
					line: 1
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
				end: Object {
					column: 34
					index: 60
					line: 2
				}
				start: Object {
					column: 0
					index: 26
					line: 2
				}
			}
			declaration: JSVariableDeclarationStatement {
				loc: Object {
					filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
					end: Object {
						column: 34
						index: 60
						line: 2
					}
					start: Object {
						column: 7
						index: 33
						line: 2
					}
				}
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: Object {
						filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
						end: Object {
							column: 34
							index: 60
							line: 2
						}
						start: Object {
							column: 7
							index: 33
							line: 2
						}
					}
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingObjectPattern {
								rest: undefined
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
									end: Object {
										column: 27
										index: 53
										line: 2
									}
									start: Object {
										column: 13
										index: 39
										line: 2
									}
								}
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "a"
												loc: Object {
													filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
													identifierName: "a"
													end: Object {
														column: 16
														index: 42
														line: 2
													}
													start: Object {
														column: 15
														index: 41
														line: 2
													}
												}
											}
											loc: Object {
												filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
												end: Object {
													column: 16
													index: 42
													line: 2
												}
												start: Object {
													column: 15
													index: 41
													line: 2
												}
											}
										}
										value: JSBindingArrayPattern {
											rest: undefined
											loc: Object {
												filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
												end: Object {
													column: 25
													index: 51
													line: 2
												}
												start: Object {
													column: 18
													index: 44
													line: 2
												}
											}
											elements: Array [
												JSBindingObjectPattern {
													rest: undefined
													loc: Object {
														filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
														end: Object {
															column: 24
															index: 50
															line: 2
														}
														start: Object {
															column: 19
															index: 45
															line: 2
														}
													}
													meta: JSPatternMeta {
														optional: undefined
														typeAnnotation: undefined
														loc: Object {
															filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
															end: Object {
																column: 24
																index: 50
																line: 2
															}
															start: Object {
																column: 19
																index: 45
																line: 2
															}
														}
													}
													properties: Array [
														JSBindingObjectPatternProperty {
															key: JSStaticPropertyKey {
																value: JSIdentifier {
																	name: "foo"
																	loc: Object {
																		filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
																		identifierName: "foo"
																		end: Object {
																			column: 23
																			index: 49
																			line: 2
																		}
																		start: Object {
																			column: 20
																			index: 46
																			line: 2
																		}
																	}
																}
																loc: Object {
																	filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
																	end: Object {
																		column: 23
																		index: 49
																		line: 2
																	}
																	start: Object {
																		column: 20
																		index: 46
																		line: 2
																	}
																}
															}
															value: JSBindingIdentifier {
																name: "foo"
																loc: Object {
																	filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
																	identifierName: "foo"
																	end: Object {
																		column: 23
																		index: 49
																		line: 2
																	}
																	start: Object {
																		column: 20
																		index: 46
																		line: 2
																	}
																}
															}
															loc: Object {
																filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
																end: Object {
																	column: 23
																	index: 49
																	line: 2
																}
																start: Object {
																	column: 20
																	index: 46
																	line: 2
																}
															}
														}
													]
												}
											]
										}
										loc: Object {
											filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
											end: Object {
												column: 25
												index: 51
												line: 2
											}
											start: Object {
												column: 15
												index: 41
												line: 2
											}
										}
									}
								]
							}
							loc: Object {
								filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
								end: Object {
									column: 33
									index: 59
									line: 2
								}
								start: Object {
									column: 13
									index: 39
									line: 2
								}
							}
							init: JSReferenceIdentifier {
								name: "bar"
								loc: Object {
									filename: "es2015/modules/duplicate-named-export-destructuring10/input.js"
									identifierName: "bar"
									end: Object {
										column: 33
										index: 59
										line: 2
									}
									start: Object {
										column: 30
										index: 56
										line: 2
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