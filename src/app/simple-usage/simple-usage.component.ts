import { Component } from '@angular/core';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor5, ChangeEvent, FocusEvent, BlurEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-simple-usage',
  templateUrl: './simple-usage.component.html',
  styleUrls: ['./simple-usage.component.css']
})
export class SimpleUsageComponent {
  public Editor = ClassicEditor;

  public isDisabled = false;
  public editorData =
    `<p><a href="https://yandex.ru/">https://yandex.ru/</a></p>`;

  public componentEvents: string[] = [];

  toggleDisableEditors() {
    this.isDisabled = !this.isDisabled;
  }

  onReady(editor: CKEditor5.Editor): void {
    this.componentEvents.push('The editor is ready.');
  }

  onChange(event: ChangeEvent): void {
    this.componentEvents.push('Editor model changed.');
    this.editorData = event.editor.getData();
  }

  onFocus(event: FocusEvent): void {
    this.componentEvents.push('Focused the editing view.');
  }

  onBlur(event: BlurEvent): void {
    this.componentEvents.push('Blurred the editing view.');
  }
}