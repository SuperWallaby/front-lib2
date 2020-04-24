import classNames from 'classnames';
import React from 'react';
import ReactTable, { TableProps, ReactTableDefaults, RowRenderProps } from 'react-table';

interface JDrowInfo<T> extends RowRenderProps {
	original: T;
}

export interface JDcolumn<T> {
	[key: string]: any;
	accessor?: keyof T;
	Cell?: (props: JDrowInfo<T>) => string | JSX.Element | JSX.Element[] | void;
}

type TLang = {
	previousText: string;
	nextText: string;
	loadingText: string;
	noDataText: string;
	pageText: string;
	rowsText: string;
};

export interface IJDTableProps<D = any> extends TableProps<D> {
	langs?: TLang;
	align?: 'center';
	inClassNames?: string;
	isCheckable?: boolean;
	marginAtuo?: boolean;
	visibleOver?: boolean;
}

const JDtable: React.FC<IJDTableProps> = ({
	align,
	langs,
	children,
	visibleOver,
	inClassNames,
	marginAtuo = true,
	isCheckable,
	...props
}) => {
	const classes = classNames('JDtable', inClassNames, {
		'JDtable--center ': align === 'center',
		'JDtable--checkable': isCheckable,
		'JDtable--marginAtuo': marginAtuo,
		'JDtable--visibleOver': visibleOver
	});

	return <ReactTable {...props} {...langs} className={classes} />;
};

export default JDtable;

export const ReactTableDefault = Object.assign(ReactTableDefaults, {
	defaultPageSize: 10,
	minRows: 3,
	showPagination: false,
	sortable: false,
	resizable: false,
	ofText: '/'
});
