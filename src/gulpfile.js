import gulp from 'gulp';
import glob from 'globby';

import {
    lintText,
    lintFiles,
    getFormatter
} from 'canonical';

gulp.task('lint-javascript', () => {
    return glob(['./src/**/*.js'])
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
