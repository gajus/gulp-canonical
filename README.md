# Canonical

Using [Canonical](https://github.com/gajus/canonical) does not require a special gulp package. Canonical has a programmatic interface to access all its features. You can use it in combination with a glob package, such as [globby](https://www.npmjs.com/package/globby) to lint multiple files, e.g.

```js
import gulp from 'gulp';
import glob from 'globby';

import {
    lintText,
    lintFiles,
    getFormatter
} from 'canonical';

gulp.task('lint-javascript', () => {
    return glob(['./**/*.js'])
        .then((paths) => {
            let formatter,
                report;

            formatter = getFormatter();
            report = lintFiles(paths);

            if (report.errorCount || report.warningCount) {
                console.log(formatter(report.results));
            }
        });
});
```

Note that this file example is written using ES6 syntax. If you want your `gulpfile.js` to use ES6 syntax, you have to execute it using [Babel](babeljs.io) or an equivalent code-to-code compiler (ES6 to ES6), e.g.

```sh
babel-node ./node_modules/.bin/gulp lint-javascript
```
