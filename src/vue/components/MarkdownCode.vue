<template>
	<div class="markdown-code">
		<pre><code class="hljs" v-html="markdownContent"></code></pre>
	</div>
</template>

<script>

// Import hljs
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import 'highlight.js/styles/github-dark.css';

export default {
	props: {
		language: {
			type: String,
			default: 'javascript'
		},
		code: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			markdownContent: '',
		}
	},
	mounted() {
		this.markdownContent = hljs.highlight(this.code, { language: 'javascript' }).value;
	},
}
</script>