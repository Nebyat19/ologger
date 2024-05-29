<h1>OLogger</h1>

<p>
  <a href="https://opensource.org/licenses/ISC">
    <img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License: ISC">
  </a>
  <a href="https://badge.fury.io/js/ologger">
    <img src="https://badge.fury.io/js/ologger.svg" alt="npm version">
  </a>
</p>

<p>OLogger is a lightweight logger library designed for Vue.js and React applications. It provides an easy-to-use interface to replace <code>console.log</code>, <code>console.warn</code>, <code>console.error</code>, and <code>console.info</code> with a customizable logger that can be disabled in production environments.</p>

<h2>Installation</h2>

<p>You can install OLogger via npm:</p>

<pre>
npm install ologger
</pre>

<h2>Usage</h2>

<h3>Vue.js Integration</h3>

<pre>
// main.js or where you initialize Vue
import Vue from 'vue';
import OLoggerPlugin from 'ologger';

Vue.use(OLoggerPlugin);

// Now you can use $logger in your Vue components
</pre>

<h3>React Integration</h3>

<pre>
// index.js or where you initialize React
import OLogger from 'ologger';

// OLogger is available globally
</pre>

<h3>Logging Examples</h3>

<pre>
import OLogger from 'ologger';

OLogger.log('This is a log message');
OLogger.warn('This is a warning message');
OLogger.error('This is an error message');
OLogger.info('This is an info message');
</pre>

<h3>Disabling Logging</h3>

<p>In production, you can disable logging to improve performance:</p>

<pre>
import OLogger from 'ologger';

// Disable logging
OLogger.disable();

// Enable logging (if needed)
OLogger.enable();
</pre>

<h2>Contributing</h2>

<p>Contributions are welcome! Please feel free to submit issues and pull requests.</p>

<ol>
  <li>Fork the repository.</li>
  <li>Create your feature branch (<code>git checkout -b feature/MyFeature</code>).</li>
  <li>Commit your changes (<code>git commit -am 'Add some feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature/MyFeature</code>).</li>
  <li>Open a pull request.</li>
</ol>

<h2>License</h2>

<p>OLogger is licensed under the ISC License. See the <a href="LICENSE">LICENSE</a> file for more information.</p>

<h2>Contact</h2>

<p>For questions or suggestions, feel free to reach out to <a href="https://github.com/nebyat19">Nebyat Bekele</a>.</p>
