# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > var`

```javascript
CSSRoot {
	body: [
		CSSRule {
			prelude: [
				CSSSelector {
					patterns: [
						CSSClassSelector {
							value: "style"
							loc: SourceLocation invalid/var/input.css 1:0-1:6
						}
					]
					loc: SourceLocation invalid/var/input.css 1:0-1:7
				}
			]
			block: CSSBlock {
				value: [
					CSSDeclaration {
						name: "border"
						value: [
							CSSVarFunction {
								name: "var"
								params: [
									CSSHash {
										value: "fff"
										loc: SourceLocation invalid/var/input.css 2:13-2:17
									}
								]
								loc: SourceLocation invalid/var/input.css 2:9-2:18
							}
						]
						important: false
						loc: SourceLocation invalid/var/input.css 2:1-2:18
					}
					CSSDeclaration {
						name: "border"
						value: [
							CSSVarFunction {
								name: "var"
								params: [
									CSSCalcFunction {
										name: "calc"
										params: [
											CSSCalcSum {
												value: [
													CSSCalcProduct {
														value: [
															CSSCalcValue {
																value: CSSDimension {
																	value: 10
																	unit: "px"
																	loc: SourceLocation invalid/var/input.css 3:18-3:22
																}
																loc: SourceLocation invalid/var/input.css 3:18-3:22
															}
														]
														loc: SourceLocation invalid/var/input.css 3:22-3:23
													}
													CSSCalcOperation {
														value: "+"
														loc: SourceLocation invalid/var/input.css 3:24-3:25
													}
													CSSCalcProduct {
														value: [
															CSSCalcValue {
																value: CSSDimension {
																	value: 10
																	unit: "px"
																	loc: SourceLocation invalid/var/input.css 3:25-3:29
																}
																loc: SourceLocation invalid/var/input.css 3:25-3:29
															}
														]
														loc: SourceLocation invalid/var/input.css 3:29-3:29
													}
												]
												loc: SourceLocation invalid/var/input.css 3:18-3:29
											}
										]
										loc: SourceLocation invalid/var/input.css 3:18-3:30
									}
								]
								loc: SourceLocation invalid/var/input.css 3:9-3:31
							}
						]
						important: false
						loc: SourceLocation invalid/var/input.css 3:1-3:31
					}
					CSSDeclaration {
						name: "border"
						value: [
							CSSVarFunction {
								name: "var"
								params: [
									CSSDimension {
										value: 90
										unit: "rem"
										loc: SourceLocation invalid/var/input.css 4:13-4:18
									}
								]
								loc: SourceLocation invalid/var/input.css 4:9-4:19
							}
						]
						important: false
						loc: SourceLocation invalid/var/input.css 4:1-4:19
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation invalid/var/input.css 1:7-5:1
			}
			loc: SourceLocation invalid/var/input.css 1:0-5:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<css>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "css"
				message: RAW_MARKUP {value: "Invalid custom property found inside the \"var\" function."}
			}
			location: {
				language: "css"
				path: RelativePath<invalid/var/input.css>
				end: Position 2:18
				start: Position 2:17
			}
		}
	]
	path: RelativePath<invalid/var/input.css>
	loc: SourceLocation invalid/var/input.css 1:0-5:1
}
```
