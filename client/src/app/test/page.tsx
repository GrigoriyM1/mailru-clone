'use client';

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';
import { axiosWithAuth } from '@/api/interceptors';
import QuilEditor from '@/components/ui/quil-editor/quil-editor';

const Page = () => {
	const quillRef = useRef<ReactQuill | null>(null);

	const handleImageUpload = () => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();

		input.onchange = async () => {
			if (input.files && input.files[0]) {
				const file = input.files[0];

				const maxSizeInMB = 5;
				if (file.size > maxSizeInMB * 1024 * 1024) {
					alert(`Размер файла должен быть не более ${maxSizeInMB} МБ`);
					return;
				}

				const formData = new FormData();
				formData.append('file', file);

				const { data } = await axiosWithAuth.post('/files/upload', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				});
				console.log(data);

				const imageUrl = data.filePath; // Assuming the server returns the uploaded image URL

				// Retrieve the Quill editor instance
				const quill = quillRef.current?.getEditor();
				if (quill) {
					const range = quill.getSelection();
					if (range) {
						quill.insertEmbed(range.index, 'image', imageUrl);
					}
				}
			}
		};
	};

	const modules = {
		toolbar: {
			container: [
				[
					'image',
					'video',
					'link',
					'code',
					'blockquote',
					{ list: 'ordered' },
					{ list: 'bullet' },
				],
			],
			handlers: {
				image: handleImageUpload,
			},
		},
	};

	return (
		<div>
			{/* <ReactQuill ref={quillRef} modules={modules} /> */}
			<QuilEditor />
		</div>
	);
};

export default Page;
