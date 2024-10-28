"use client";
import "@mdxeditor/editor/style.css";

import {
	MDXEditor,
	type MDXEditorMethods,
	type MDXEditorProps,
	headingsPlugin,
	listsPlugin,
	tablePlugin,
} from "@mdxeditor/editor";

import type { ForwardedRef } from "react";

export default function InitializedMDXEditor({
	editorRef,
	...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
	return (
		<MDXEditor
			plugins={[headingsPlugin(), listsPlugin(), tablePlugin()]}
			toMarkdownOptions={{}}
			{...props}
			contentEditableClassName="prose"
			ref={editorRef}
		/>
	);
}
