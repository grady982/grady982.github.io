import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import grapesjs, { Editor } from 'grapesjs';
import plugin from 'grapesjs-preset-newsletter';
import { MockTemplate } from './mock-template';

@Component({
  selector: 'app-edm-editor',
  imports: [],
  templateUrl: './edm-editor.component.html',
  styleUrl: './edm-editor.component.scss'
})
export class EdmEditorComponent implements AfterViewInit {

  @ViewChild('editor') editorRef!: ElementRef;
  editor: Editor;

  ngAfterViewInit(): void {
    this.initEmailEditor();
  }

  initEmailEditor() {
    this.editor = grapesjs.init({
      container: this.editorRef.nativeElement,
      height: '75vh',
      width: 'auto',
      storageManager: false,
      plugins: [plugin],
      components: MockTemplate, // bind the content to canvas 
      // assetManager: this.initAssetManager()
    });

    this.editor.on('load', () => {
      const panelManager = this.editor.Panels;
      const viewBtn = panelManager.getButton('options', 'sw-visibility');
      viewBtn.set('active', true);
    });
  }

  initAssetManager() {
    return {
      // TODO 圖庫，資料要從圖片伺服器取得
      assets: [
        {
          type: 'image',
          src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2025-04/250409-Luka-Doncic-ac-859p-e8ecaf.jpg'
        },
        {
          type: 'image',
          src: 'https://cdn.nba.com/teams/uploads/sites/1610612747/2025/04/2425_lal_mktg_LD_64threes_16x9_lo.jpg'
        }
      ],
      embedAsBase64: true,
      uploadFile: (ev: DragEvent) => {
        const files = ev.dataTransfer ? ev.dataTransfer.files : (ev.target as HTMLInputElement).files;
        // TODO ...send somewhere
        console.log('show me upload files =>', files);
        // mock Action
        const url = 'https://media.nownews.com/nn_media/thumbnail/2025/03/1741304673765-000d445ddd324436a0ccbe519f291b89-800x534.webp?unShow=false';
        // Add the image URL to asset manager
        this.editor.AssetManager.add({
          type: 'image',
          src: url
        });
      }
    };
  }

}
