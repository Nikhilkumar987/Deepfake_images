import React, { useState, useRef } from 'react';

export default function DeepFake() {
	const [file, setFile] = useState(null); // { file, preview }
	const [result, setResult] = useState(null); // { label }
	const [loading, setLoading] = useState(false);
	const inputRef = useRef(null);

	function handleFile(selectedFiles) {
		const first = selectedFiles && selectedFiles[0];
		if (!first) return;
		if (!first.type.startsWith('image/')) return alert('Please select an image file');
		if (file?.preview) URL.revokeObjectURL(file.preview);
		setResult(null);
		setFile({ file: first, preview: URL.createObjectURL(first) });
	}

	function onDrop(e) {
		e.preventDefault();
		if (e.dataTransfer?.files?.length) handleFile(e.dataTransfer.files);
	}

	function onSelectClick() {
		inputRef.current?.click();
	}

	async function upload() {
		if (!file) return alert('Select an image first');
		setLoading(true);
		setResult(null);
		try {
			const fd = new FormData();
			fd.append('file', file.file);

			const res = await fetch('/api/predict/', {
				method: 'POST',
				body: fd,
			});
			const json = await res.json();
			setResult({ label: json.prediction });
		} catch (err) {
			alert('Error: ' + err);
		} finally {
			setLoading(false);
		}
	}

	function clearAll() {
		if (file?.preview) URL.revokeObjectURL(file.preview);
		setFile(null);
		setResult(null);
	}

	return (
		<div className="min-h-screen bg-gray-100 p-6 flex justify-center">
			<div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-6">
				<h1 className="text-2xl font-bold mb-4">Deepfake Image Detector</h1>

				<div
					onDrop={onDrop}
					onDragOver={(e) => e.preventDefault()}
					className="border-2 border-dashed border-gray-300 rounded-xl p-6 mb-4 text-center cursor-pointer"
					onClick={onSelectClick}
				>
					<input
						ref={inputRef}
						type="file"
						accept="image/*"
						className="hidden"
						onChange={(e) => handleFile(e.target.files)}
					/>
					<p className="text-gray-500">Drag & drop an image here or click to select</p>
				</div>

				{file && (
					<div className="mb-4">
						<div className="bg-gray-50 rounded-lg p-2 flex flex-col items-center">
							<img src={file.preview} alt="preview" className="w-full max-h-80 object-contain rounded-md" />
							{result ? (
								<div className={`mt-3 text-base font-semibold ${result.label?.toLowerCase() === 'fake' ? 'text-red-600' : 'text-green-600'}`}>
									{result.label}
								</div>
							) : (
								<div className="mt-3 text-sm text-gray-500">Not predicted</div>
							)}
						</div>
						<div className="flex gap-2 mt-4">
							<button onClick={upload} disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50">
								{loading ? 'Processing...' : 'Predict'}
							</button>
							<button onClick={clearAll} className="px-4 py-2 border rounded">Clear</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}