import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import FileManageModal from './FileManagerModal';
import { useFilesManager } from '../../hooks/hook';
import { useModal } from '../..';

export default {
	title: 'FileManager',
	component: () => {
		const fileManageHook = useFilesManager();
		const modalHook = useModal();
		return <FileManageModal uploaderHook={fileManageHook} modalHook={modalHook} />;
	},
	decorators: [ withKnobs ]
};

export const standard = () => {
	const fileManageHook = useFilesManager();
	const modalHook = useModal(true);
	return <FileManageModal uploaderHook={fileManageHook} modalHook={modalHook} />;
};

standard.story = {
	name: 'standard'
};
