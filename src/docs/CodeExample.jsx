import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';


export default class CodeExample extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		hljs.registerLanguage('javascript', javascript);
        hljs.highlightBlock(this.element)
	}
	render() {
		return (
			<pre ref={ref => {this.element = ref}}>
                <code>
                    {this.props.children}
                </code>
            </pre>
		);
	}
}

CodeExample.propTypes = {
   children: PropTypes.string.isRequired
};

