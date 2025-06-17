import { Plugin } from 'grapesjs';
import juice from 'juice';

export interface PluginOptions {
	/**
	 * Which blocks to add.
	 */
	blocks?: string[];
	/**
	 * Add custom block options, based on block id.
	 * @default (blockId) => ({})
	 * @example (blockId) => blockId === 'quote' ? { attributes: {...} } : {};
	 */
	block?: (blockId: string) => ({});
	/**
	 * Custom style for table blocks.
	 */
	tableStyle?: Record<string, string>;
	/**
	 * Custom style for table cell blocks.
	 */
	cellStyle?: Record<string, string>;
	/**
	 * Import command id.
	 * @default 'gjs-open-import-template'
	 */
	cmdOpenImport?: string;
	/**
	 * Toggle images command id.
	 * @default 'gjs-toggle-images'
	 */
	cmdTglImages?: string;
	/**
	 * Get inlined HTML command id.
	 * @default 'gjs-get-inlined-html'
	 */
	cmdInlineHtml?: string;
	/**
	 * Title for the import modal.
	 * @default 'Import template'
	 */
	modalTitleImport?: string;
	/**
	 * Title for the export modal.
	 * @default 'Export template'
	 */
	modalTitleExport?: string;
	/**
	 * Label for the export modal.
	 * @default ''
	 */
	modalLabelExport?: string;
	/**
	 * Label for the import modal.
	 * @default ''
	 */
	modalLabelImport?: string;
	/**
	 * Label for the import button.
	 * @default 'Import'
	 */
	modalBtnImport?: string;
	/**
	 * Template as a placeholder inside import modal.
	 * @default ''
	 */
	importPlaceholder?: string;
	/**
	 * If `true`, inlines CSS on export.
	 * @default true
	 */
	inlineCss?: boolean;
	/**
	 * Update Style Manager with more reliable style properties to use for newsletters.
	 * @default true
	 */
	updateStyleManager?: boolean;
	/**
	 * Show the Style Manager on component change.
	 * @default true
	 */
	showStylesOnChange?: boolean;
	/**
	 * Show the Block Manager on load.
	 * @default true
	 */
	showBlocksOnLoad?: boolean;
	/**
	 * Code viewer theme.
	 * @default 'hopscotch'
	 */
	codeViewerTheme?: string;
	/**
	 * Custom options for `juice` HTML inliner.
	 * @default {}
	 */
	juiceOpts?: juice.Options;
	/**
	 * Confirm text before clearing the canvas.
	 * @default 'Are you sure you want to clear the canvas?'
	 */
	textCleanCanvas?: string;
	/**
	 * Load custom preset theme.
	 * @default true
	 */
	useCustomTheme?: boolean;
}
export type RequiredPluginOptions = Required<PluginOptions>;
declare const plugin: Plugin<PluginOptions>;

export {
	plugin as default,
};

export {};
