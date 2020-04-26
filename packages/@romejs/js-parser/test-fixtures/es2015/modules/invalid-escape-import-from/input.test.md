# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > invalid-escape-import-from`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 23
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
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Expected keyword from'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 8
          index: 8
          line: 1
        }
        start: Object {
          column: 9
          index: 9
          line: 1
        }
      }
    }
  ]
  body: Array [
    ImportDeclaration {
      importKind: undefined
      namedSpecifiers: Array []
      namespaceSpecifier: undefined
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 8
          index: 8
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      source: StringLiteral {
        value: ''
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 8
            index: 8
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
      }
      defaultSpecifier: ImportDefaultSpecifier {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 8
            index: 8
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        local: ImportSpecifierLocal {
          name: BindingIdentifier {
            name: 'X'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 8
                index: 8
                line: 1
              }
              start: Object {
                column: 7
                index: 7
                line: 1
              }
            }
          }
          importKind: undefined
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 8
              index: 8
              line: 1
            }
            start: Object {
              column: 7
              index: 7
              line: 1
            }
          }
        }
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 18
          index: 18
          line: 1
        }
        start: Object {
          column: 9
          index: 9
          line: 1
        }
      }
      expression: ReferenceIdentifier {
        name: 'from'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 18
            index: 18
            line: 1
          }
          start: Object {
            column: 9
            index: 9
            line: 1
          }
        }
      }
    }
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 22
          index: 22
          line: 1
        }
        start: Object {
          column: 19
          index: 19
          line: 1
        }
      }
      expression: StringLiteral {
        value: 'x'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 22
            index: 22
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
  ]
}
```