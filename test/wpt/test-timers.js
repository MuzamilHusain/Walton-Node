'use strict';

const { WPTRunner } = require('../common/wpt');

const runner = new WPTRunner('html/webappapis/timers', { concurrency: 1 });

runner.runJsTests();
