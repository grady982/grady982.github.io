import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Drawflow from 'drawflow';

@Component({
  selector: 'app-no-code-canvas',
  imports: [],
  templateUrl: './no-code-canvas.component.html',
  styleUrl: './no-code-canvas.component.scss'
})
export class NoCodeCanvasComponent implements AfterViewInit {

  drawflow?: Drawflow;

  @ViewChild('container', { static: true }) drawflowContainer?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.drawflowContainer) return;

    this.startDrawflow();
    this.handleEditorEvent();
  }

  /** 啟動 Drawflow 畫布 */
  startDrawflow() {
    // Editor options
    this.drawflow = new Drawflow(this.drawflowContainer.nativeElement);
    this.drawflow.editor_mode = 'edit';
    this.drawflow.curvature = 0;
    this.drawflow.reroute_curvature_start_end = 0;
    this.drawflow.reroute_curvature = 0.3;
    // 啟動 Drawflow (lib 內部會去註冊畫布所需 event)
    this.drawflow.start();
  }

  handleEditorEvent() {
    // Events!
    this.drawflow?.on('click', (event: MouseEvent) => {
      console.log('show me click:', event);
    });


    this.drawflow?.on('nodeCreated', function (id) {
      console.log("Node created " + id);
    });

    this.drawflow?.on('nodeRemoved', function (id) {
      console.log("Node removed " + id);
    });

    this.drawflow?.on('nodeSelected', function (id) {
      console.log("Node selected " + id);
    });

    this.drawflow?.on('moduleCreated', function (name) {
      console.log("Module Created " + name);
    });

    this.drawflow?.on('moduleChanged', function (name) {
      console.log("Module Changed " + name);
    });

    this.drawflow?.on('connectionCreated', function (connection) {
      console.log('Connection created');
      console.log(connection);
    });

    this.drawflow?.on('connectionRemoved', function (connection) {
      console.log('Connection removed');
      console.log(connection);
    });

    this.drawflow?.on('mouseMove', function (position) {
      // console.log('Position mouse x:' + position.x + ' y:' + position.y);
    })

    this.drawflow?.on('nodeMoved', function (id) {
      console.log("Node moved " + id);
    });

    this.drawflow?.on('zoom', function (zoom) {
      console.log('Zoom level ' + zoom);
    });

    this.drawflow?.on('translate', function (position) {
      // console.log('Translate x:' + position.x + ' y:' + position.y);
    })

    this.drawflow?.on('addReroute', function (id) {
      console.log("Reroute added " + id);
    });

    this.drawflow?.on('removeReroute', function (id) {
      console.log("Reroute removed " + id);
    });
  }

  drag(ev: DragEvent) {
    ev.dataTransfer.setData("node", (ev.target as HTMLElement).getAttribute('data-node'));
  }

  allowDrop(ev: DragEvent) {
    ev.preventDefault();
  }

  drop(ev: any) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("node");
    this.addNodeToDrawFlow(data, ev.clientX, ev.clientY);
  }

  addNodeToDrawFlow(name: string, pos_x: number, pos_y: number) {
    if (this.drawflow.editor_mode === 'fixed') return;
    pos_x = pos_x * (this.drawflow.precanvas.clientWidth / (this.drawflow.precanvas.clientWidth * this.drawflow.zoom)) - (this.drawflow.precanvas.getBoundingClientRect().x * (this.drawflow.precanvas.clientWidth / (this.drawflow.precanvas.clientWidth * this.drawflow.zoom)));
    pos_y = pos_y * (this.drawflow.precanvas.clientHeight / (this.drawflow.precanvas.clientHeight * this.drawflow.zoom)) - (this.drawflow.precanvas.getBoundingClientRect().y * (this.drawflow.precanvas.clientHeight / (this.drawflow.precanvas.clientHeight * this.drawflow.zoom)));


    switch (name) {
      case 'facebook':
        var facebook = `
        <div>
          <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>
        </div>
        `;
        this.drawflow.addNode('facebook', 0, 1, pos_x, pos_y, 'facebook', {}, facebook, false);
        break;
      case 'slack':
        var slackchat = `
          <div>
            <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>
          </div>
          `
        this.drawflow.addNode('slack', 1, 0, pos_x, pos_y, 'slack', {}, slackchat, false);
        break;
      case 'github':
        const githubtemplate = `
          <div>
            <div class="title-box"><i class="fab fa-github "></i> Github Stars</div>
            <div class="box">
              <p>Enter repository url</p>
              <input type="text" df-name>
            </div>
          </div>
          `;
        this.drawflow.addNode('github', 0, 1, pos_x, pos_y, 'github', { "name": '' }, githubtemplate, false);
        break;
      case 'telegram':
        const telegrambot = `
          <div>
            <div class="title-box"><i class="fab fa-telegram-plane"></i> Telegram bot</div>
            <div class="box">
              <p>Send to telegram</p>
              <p>select channel</p>
              <select df-channel>
                <option value="channel_1">Channel 1</option>
                <option value="channel_2">Channel 2</option>
                <option value="channel_3">Channel 3</option>
                <option value="channel_4">Channel 4</option>
              </select>
            </div>
          </div>
          `;
        this.drawflow.addNode('telegram', 1, 0, pos_x, pos_y, 'telegram', { "channel": 'channel_3' }, telegrambot, false);
        break;
      case 'aws':
        var aws = `
          <div>
            <div class="title-box"><i class="fab fa-aws"></i> Aws Save </div>
            <div class="box">
              <p>Save in aws</p>
              <input type="text" df-db-dbname placeholder="DB name"><br><br>
              <input type="text" df-db-key placeholder="DB key">
              <p>Output Log</p>
            </div>
          </div>
          `;
        this.drawflow.addNode('aws', 1, 1, pos_x, pos_y, 'aws', { "db": { "dbname": '', "key": '' } }, aws, false);
        break;
      case 'log':
        const log = `
            <div>
              <div class="title-box"><i class="fas fa-file-signature"></i> Save log file </div>
            </div>
            `;
        this.drawflow.addNode('log', 1, 0, pos_x, pos_y, 'log', {}, log, false);
        break;
      case 'google':
        const google = `
            <div>
              <div class="title-box"><i class="fab fa-google-drive"></i> Google Drive save </div>
            </div>
            `;
        this.drawflow.addNode('google', 1, 0, pos_x, pos_y, 'google', {}, google, false);
        break;
      case 'email':
        const email = `
            <div>
              <div class="title-box"><i class="fas fa-at"></i> Send Email </div>
            </div>
            `;
        this.drawflow.addNode('email', 1, 0, pos_x, pos_y, 'email', {}, email, false);
        break;

      case 'template':
        const template = `
            <div>
              <div class="title-box"><i class="fas fa-code"></i> Template</div>
              <div class="box">
                Ger Vars
                <textarea df-template></textarea>
                Output template with vars
              </div>
            </div>
            `;
        this.drawflow.addNode('template', 1, 1, pos_x, pos_y, 'template', { "template": 'Write your template' }, template, false);
        break;
      case 'multiple':
        var multiple = `
            <div>
              <div class="box">
                Multiple!
              </div>
            </div>
            `;
        this.drawflow.addNode('multiple', 3, 4, pos_x, pos_y, 'multiple', {}, multiple, false);
        break;
      case 'personalized':
        const personalized = `
            <div>
              Personalized
            </div>
            `;
        this.drawflow.addNode('personalized', 1, 1, pos_x, pos_y, 'personalized', {}, personalized, false);
        break;
      case 'dbclick':
        const dbclick = `
            <div>
            <div class="title-box"><i class="fas fa-mouse"></i> Db Click</div>
              <div class="box dbclickbox" ondblclick="showpopup(event)">
                Db Click here
                <div class="modal" style="display:none">
                  <div class="modal-content">
                    <span class="close" onclick="closemodal(event)">&times;</span>
                    Change your variable {name} !
                    <input type="text" df-name>
                  </div>
                </div>
              </div>
            </div>
            `;
        this.drawflow.addNode('dbclick', 1, 1, pos_x, pos_y, 'dbclick', { name: '' }, dbclick, false);
        break;

      default:
    }
  }

}
