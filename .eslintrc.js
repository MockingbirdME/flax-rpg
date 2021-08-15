module.exports = {
  env: {
    es6: true,
    mocha: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: ["eslint:recommended"],

  rules: {
    // //////// Possible Errors //////////

    "for-direction": 2, // Enforce “for” loop update clause moving the counter in the right direction
    "getter-return": 2, // Enforce return statements in getters
    // "n o-async-promise-executor": 2, // disallow using an async function as a Promise executor
    "no-await-in-loop": 2, // Disallow await inside of loops
    "no-compare-neg-zero": 2, // Disallow comparing against -0
    "no-cond-assign": 2, // Disallow assignment operators in conditional expressions
    "no-console": 0, // Disallow the use of console
    "no-constant-condition": 2, // Disallow constant expressions in conditions
    "no-control-regex": 2, // Disallow control characters in regular expressions
    "no-debugger": 2, // Disallow the use of debugger
    "no-dupe-args": 2, // Disallow duplicate arguments in function definitions
    "no-dupe-keys": 2, // Disallow duplicate keys in object literals
    "no-duplicate-case": 2, // Disallow duplicate case labels
    "no-empty": 2, // Disallow empty block statements
    "no-empty-character-class": 2, // Disallow empty character classes in regular expressions
    "no-ex-assign": 2, // Disallow reassigning exceptions in catch clauses
    "no-extra-boolean-cast": 2, // Disallow unnecessary boolean casts
    "no-extra-parens": 0, // Disallow unnecessary parentheses
    "no-extra-semi": 2, // Disallow unnecessary semicolons
    "no-func-assign": 2, // Disallow reassigning function declarations
    "no-inner-declarations": 2, // Disallow variable or function declarations in nested blocks
    "no-invalid-regexp": 2, // Disallow invalid regular expression strings in RegExp constructors
    "no-irregular-whitespace": 2, // Disallow irregular whitespace
    "no-misleading-character-class": 2, // Disallow characters which are made with multiple code points in character class synta
    "no-obj-calls": 2, // Disallow calling global object properties as functions
    "no-prototype-builtins": 0, // Disallow calling some Object.prototype methods directly on objects
    "no-regex-spaces": 2, // Disallow multiple spaces in regular expressions
    "no-sparse-arrays": 2, // Disallow sparse arrays
    "no-template-curly-in-string": 2, // Disallow template literal placeholder syntax in regular strings
    "no-unexpected-multiline": 2, // Disallow confusing multiline expressions
    "no-unreachable": 2, // Disallow unreachable code after return, throw, continue, and break statements
    "no-unsafe-finally": 2, // Disallow control flow statements in finally blocks
    "no-unsafe-negation": 2, // Disallow negating the left operand of relational operators
    "require-atomic-updates": 2, // Disallow assignments that can lead to race conditions due to usage of await or yield
    "use-isnan": 2, // Require calls to isNaN() when checking for NaN
    "valid-typeof": 2, // Enforce comparing typeof expressions against valid strings

    // //////// Best Practices //////////

    "accessor-pairs": 2, // Enforce getter and setter pairs in objects
    "array-callback-return": 2, // Enforce return statements in callbacks of array methods
    // "b lock-scoped-var": 2, // enforce the use of variables within the scope they are defined
    "class-methods-use-this": 0, // Enforce that class methods utilize this
    complexity: 2, // Enforce a maximum cyclomatic complexity allowed in a program
    "consistent-return": 0, // Require return statements to either always or never specify values
    curly: 0, // Enforce consistent brace style for all control statements
    "default-case": 2, // Require default cases in switch statements
    "dot-location": 0, // Enforce consistent newlines before and after dots
    "dot-notation": 2, // Enforce dot notation whenever possible
    eqeqeq: 2, // Require the use of === and !==
    "guard-for-in": 2, // Require for-in loops to include an if statement
    "max-classes-per-file": 2, // Enforce a maximum number of classes per file
    "no-alert": 2, // Disallow the use of alert, confirm, and prompt
    "no-caller": 2, // Disallow the use of arguments.caller or arguments.callee
    "no-case-declarations": 2, // Disallow lexical declarations in case clauses
    "no-div-regex": 2, // Disallow division operators explicitly at the beginning of regular expressions
    "no-else-return": 1, // Disallow else blocks after return statements in if statements
    "no-empty-function": 2, // Disallow empty functions
    "no-empty-pattern": 2, // Disallow empty destructuring patterns
    "no-eq-null": 2, // Disallow null comparisons without type-checking operators
    "no-eval": 2, // Disallow the use of eval()
    "no-extend-native": 2, // Disallow extending native types
    "no-extra-bind": 2, // Disallow unnecessary calls to .bind()
    "no-extra-label": 2, // Disallow unnecessary labels
    "no-fallthrough": 2, // Disallow fallthrough of case statements
    "no-floating-decimal": 2, // Disallow leading or trailing decimal points in numeric literals
    "no-global-assign": 2, // Disallow assignments to native objects or read-only global variables
    "no-implicit-coercion": 1, // Disallow shorthand type conversions
    "no-implicit-globals": 2, // Disallow variable and function declarations in the global scope
    "no-implied-eval": 2, // Disallow the use of eval()-like methods
    "no-invalid-this": 0, // Disallow this keywords outside of classes or class-like objects
    "no-iterator": 2, // Disallow the use of the __iterator__ property
    "no-labels": 2, // Disallow labeled statements
    "no-lone-blocks": 2, // Disallow unnecessary nested blocks
    "no-loop-func": 2, // Disallow function declarations that contain unsafe references inside loop statements
    "no-magic-numbers": 0, // Disallow magic numbers
    "no-multi-spaces": 2, // Disallow multiple spaces
    "no-multi-str": 2, // Disallow multiline strings
    "no-new": 2, // Disallow new operators outside of assignments or comparisons
    "no-new-func": 2, // Disallow new operators with the Function object
    "no-new-wrappers": 2, // Disallow new operators with the String, Number, and Boolean objects
    "no-octal": 2, // Disallow octal literals
    "no-octal-escape": 2, // Disallow octal escape sequences in string literals
    "no-param-reassign": 0, // Disallow reassigning function parameters
    "no-proto": 2, // Disallow the use of the __proto__ property
    "no-redeclare": 2, // Disallow variable redeclaration
    "no-restricted-properties": 2, // Disallow certain properties on certain objects
    "no-return-assign": 0, // Disallow assignment operators in return statements
    "no-return-await": 2, // Disallow unnecessary return await
    "no-script-url": 2, // Disallow javascript: urls
    "no-self-assign": 2, // Disallow assignments where both sides are exactly the same
    "no-self-compare": 2, // Disallow comparisons where both sides are exactly the same
    "no-sequences": 2, // Disallow comma operators
    "no-throw-literal": 2, // Disallow throwing literals as exceptions
    "no-unmodified-loop-condition": 2, // Disallow unmodified loop conditions
    "no-unused-expressions": 2, // Disallow unused expressions
    "no-unused-labels": 2, // Disallow unused labels
    "no-useless-call": 2, // Disallow unnecessary calls to .call() and .apply()
    "no-useless-catch": 2, // Disallow unnecessary catch clauses
    "no-useless-concat": 2, // Disallow unnecessary concatenation of literals or template literals
    "no-useless-escape": 2, // Disallow unnecessary escape characters
    "no-useless-return": 2, // Disallow redundant return statements
    "no-void": 2, // Disallow void operators
    "no-warning-comments": 0, // Disallow specified warning terms in comments
    "no-with": 2, // Disallow with statements
    "prefer-named-capture-group": 2, // Enforce using named capture group in regular expression
    "prefer-promise-reject-errors": 2, // Require using Error objects as Promise rejection reasons
    radix: 2, // Enforce the consistent use of the radix argument when using parseInt()
    "require-await": 0, // Disallow async functions which have no await expression
    "require-unicode-regexp": 2, // Enforce the use of u flag on RegExp
    "vars-on-top": 2, // Require var declarations be placed at the top of their containing scope
    "wrap-iife": 2, // Require parentheses around immediate function invocations
    yoda: 2, // Require or disallow “Yoda” conditions

    // //////// Strict Mode //////////

    strict: 0, // Controls location of Use Strict Directives

    // //////// Variables //////////
    "init-declarations": 0, // Require or disallow initialization in variable declarations
    "no-delete-var": 2, // Disallow deleting variables
    "no-label-var": 2, // Disallow labels that share a name with a variable
    "no-restricted-globals": 2, // Disallow specified global variables
    "no-shadow": 0, // Disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow-restricted-names": 2, // Disallow identifiers from shadowing restricted names
    "no-undef": 2, // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    "no-undef-init": 0, // Disallow initializing variables to undefined
    "no-undefined": 0, // Disallow the use of undefined as an identifier
    "no-unused-vars": 2, // Disallow unused variables
    "no-use-before-define": 0, // Disallow the use of variables before they are defined

    // //////// Node.js //////////

    "callback-return": 0, // Require return statements after callbacks

    "global-require": 0, // Require require() calls to be placed at top-level module scope

    "handle-callback-err": 2, // Require error handling in callbacks

    "no-buffer-constructor": 2, // Disallow use of the Buffer() constructor

    "no-mixed-requires": 2, // Disallow require calls to be mixed with regular variable declarations

    "no-new-require": 2, // Disallow new operators with calls to require

    "no-path-concat": 2, // Disallow string concatenation with __dirname and __filename

    "no-process-env": 0, // Disallow the use of process.env

    "no-process-exit": 0, // Disallow the use of process.exit()

    "no-restricted-modules": 2, // Disallow specified modules when loaded by require

    "no-sync": 1, // Disallow synchronous methods

    // //////// Stylistic Issues //////////

    "array-bracket-newline": 2, // Enforce linebreaks after opening and before closing array brackets
    "array-bracket-spacing": 2, // Enforce consistent spacing inside array brackets
    "array-element-newline": 0, // Enforce line breaks after each array element
    "block-spacing": 0, // Disallow or enforce spaces inside of blocks after opening block and before closing block
    "brace-style": 0, // Enforce consistent brace style for blocks
    camelcase: [2, { allow: ["include_docs"] }], // Enforce camelcase naming convention
    "capitalized-comments": 1, // Enforce or disallow capitalization of the first letter of a comment
    "comma-dangle": 2, // Require or disallow trailing commas
    "comma-spacing": 2, // Enforce consistent spacing before and after commas
    "comma-style": 2, // Enforce consistent comma style
    "computed-property-spacing": 2, // Enforce consistent spacing inside computed property brackets
    "consistent-this": 2, // Enforce consistent naming when capturing the current execution context
    "eol-last": 2, // Require or disallow newline at the end of files
    "func-call-spacing": 2, // Require or disallow spacing between function identifiers and their invocations
    "func-name-matching": 2, // Require function names to match the name of the variable or property to which they are assigned
    "func-names": 2, // Require or disallow named function expressions
    "func-style": 0, // Enforce the consistent use of either function declarations or expressions
    "function-paren-newline": 2, // Enforce consistent line breaks inside function parentheses
    "id-blacklist": 2, // Disallow specified identifiers
    "id-length": 0, // Enforce minimum and maximum identifier lengths
    "id-match": 2, // Require identifiers to match a specified regular expression
    "implicit-arrow-linebreak": 2, // Enforce the location of arrow function bodies
    indent: [2, 2], // Enforce consistent indentation
    "jsx-quotes": 2, // Enforce the consistent use of either double or single quotes in JSX attributes
    "key-spacing": 2, // Enforce consistent spacing between keys and values in object literal properties
    "keyword-spacing": 2, // Enforce consistent spacing before and after keywords
    "line-comment-position": 0, // Enforce position of line comments
    "linebreak-style": 2, // Enforce consistent linebreak style
    "lines-around-comment": 0, // Require empty lines around comments
    "lines-between-class-members": 2, // Require or disallow an empty line between class members
    "max-depth": 2, // Enforce a maximum depth that blocks can be nested
    "max-len": 0, // Enforce a maximum line length
    "max-lines": 0, // Enforce a maximum number of lines per file
    "max-lines-per-function": 0, // Enforce a maximum number of line of code in a function
    "max-nested-callbacks": 2, // Enforce a maximum depth that callbacks can be nested
    "max-params": 0, // Enforce a maximum number of parameters in function definitions
    "max-statements": 0, // Enforce a maximum number of statements allowed in function blocks
    "max-statements-per-line": 0, // Enforce a maximum number of statements allowed per line
    "multiline-comment-style": 0, // Enforce a particular style for multiline comments
    "multiline-ternary": 0, // Enforce newlines between operands of ternary expressions
    "new-cap": 0, // Require constructor names to begin with a capital letter
    "new-parens": 2, // Enforce or disallow parentheses when invoking a constructor with no arguments
    "newline-per-chained-call": 2, // Require a newline after each call in a method chain
    "no-array-constructor": 2, // Disallow Array constructors
    "no-bitwise": 2, // Disallow bitwise operators
    "no-continue": 0, // Disallow continue statements
    "no-inline-comments": 0, // Disallow inline comments after code
    "no-lonely-if": 2, // Disallow if statements as the only statement in else blocks
    "no-mixed-operators": 2, // Disallow mixed binary operators
    "no-mixed-spaces-and-tabs": 2, // Disallow mixed spaces and tabs for indentation
    "no-multi-assign": 0, // Disallow use of chained assignment expressions
    "no-multiple-empty-lines": 2, // Disallow multiple empty lines
    "no-negated-condition": 0, // Disallow negated conditions
    "no-nested-ternary": 2, // Disallow nested ternary expressions
    "no-new-object": 2, // Disallow Object constructors
    "no-plusplus": 0, // Disallow the unary operators ++ and --
    "no-restricted-syntax": 2, // Disallow specified syntax
    "no-tabs": 2, // Disallow all tabs
    "no-ternary": 0, // Disallow ternary operators
    "no-trailing-spaces": 0, // Disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0, // Disallow dangling underscores in identifiers
    "no-unneeded-ternary": 2, // Disallow ternary operators when simpler alternatives exist
    "no-whitespace-before-property": 2, // Disallow whitespace before properties
    "nonblock-statement-body-position": 0, // Enforce the location of single-line statements
    "object-curly-newline": 2, // Enforce consistent line breaks inside braces
    "object-curly-spacing": 0, // Enforce consistent spacing inside braces
    "object-property-newline": 0, // Enforce placing object properties on separate lines
    "one-var": 0, // Enforce variables to be declared either together or separately in functions
    "one-var-declaration-per-line": 2, // Require or disallow newlines around variable declarations
    "operator-assignment": 2, // Require or disallow assignment operator shorthand where possible
    "operator-linebreak": 0, // Enforce consistent linebreak style for operators
    "padded-blocks": 0, // Require or disallow padding within blocks
    "padding-line-between-statements": 2, // Require or disallow padding lines between statements
    "prefer-object-spread": 2, // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    "quote-props": 0, // Require quotes around object literal property names
    quotes: 0, // Enforce the consistent use of either backticks, double, or single quotes
    semi: 2, // Require or disallow semicolons instead of ASI
    "semi-spacing": 2, // Enforce consistent spacing before and after semicolons
    "semi-style": 2, // Enforce location of semicolons
    "sort-keys": 0, // Require object keys to be sorted
    "sort-vars": 0, // Require variables within the same declaration block to be sorted
    "space-before-blocks": 2, // Enforce consistent spacing before blocks
    "space-before-function-paren": 0, // Enforce consistent spacing before function definition opening parenthesis
    "space-in-parens": 2, // Enforce consistent spacing inside parentheses
    "space-infix-ops": 2, // Require spacing around infix operators
    "space-unary-ops": 2, // Enforce consistent spacing before or after unary operators
    "spaced-comment": 2, // Enforce consistent spacing after the // or /* in a comment
    "switch-colon-spacing": 2, // Enforce spacing around colons of switch statements
    "template-tag-spacing": 2, // Require or disallow spacing between template tags and their literals
    "unicode-bom": 2, // Require or disallow Unicode byte order mark (BOM)
    "wrap-regex": 2, // Require parenthesis around regex literals

    // //////// ECMAScript 6 //////////

    "arrow-body-style": 2, // Require braces around arrow function bodies
    "arrow-parens": 0, // Require parentheses around arrow function arguments
    "arrow-spacing": 2, // Enforce consistent spacing before and after the arrow in arrow functions
    "constructor-super": 2, // Require super() calls in constructors
    "generator-star-spacing": 2, // Enforce consistent spacing around * operators in generator functions
    "no-class-assign": 2, // Disallow reassigning class members
    "no-confusing-arrow": 2, // Disallow arrow functions where they could be confused with comparisons
    "no-const-assign": 2, // Disallow reassigning const variables
    "no-dupe-class-members": 2, // Disallow duplicate class members
    "no-duplicate-imports": 2, // Disallow duplicate module imports
    "no-new-symbol": 2, // Disallow new operators with the Symbol object
    "no-restricted-imports": 2, // Disallow specified modules when loaded by import
    "no-this-before-super": 2, // Disallow this/super before calling super() in constructors
    "no-useless-computed-key": 2, // Disallow unnecessary computed property keys in object literals
    "no-useless-constructor": 2, // Disallow unnecessary constructors
    "no-useless-rename": 2, // Disallow renaming import, export, and destructured assignments to the same name
    "no-var": 2, // Require let or const instead of var
    "object-shorthand": 2, // Require or disallow method and property shorthand syntax for object literals
    "prefer-arrow-callback": 2, // Require using arrow functions for callbacks
    "prefer-const": 1, // Require const declarations for variables that are never reassigned after declared
    "prefer-destructuring": 2, // Require destructuring from arrays and/or objects
    "prefer-numeric-literals": 2, // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-rest-params": 2, // Require rest parameters instead of arguments
    "prefer-spread": 2, // Require spread operators instead of .apply()
    "prefer-template": 2, // Require template literals instead of string concatenation
    "require-yield": 2, // Require generator functions to contain yield
    "rest-spread-spacing": 2, // Enforce spacing between rest and spread operators and their expressions
    "sort-imports": 0, // Enforce sorted import declarations within modules
    "symbol-description": 2, // Require symbol descriptions
    "template-curly-spacing": 2, // Require or disallow spacing around embedded expressions of template strings
    "yield-star-spacing": 2 // Require or disallow spacing around the * in yield* expressions
  }
};
