import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeBlock.module.css';

const CodeBlock = ({ title, body, animation}) => (
	<div className={ styles.blockWrapper }>
		<h2>
			{ title }
		</h2>
		{ body }
		<div className={ styles.animation }>
			{ animation }
		</div>
	</div>
);

CodeBlock.propTypes = {
	title: PropTypes.string,
	body: PropTypes.node,
	animation: PropTypes.element,
};

export default CodeBlock;