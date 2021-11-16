import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxTextBoxModule, DxCheckBoxModule, DxSelectBoxModule,
  DxDataGridModule, DxBulletModule, DxTemplateModule,
  DxDateBoxModule, DxFileUploaderModule, DxTooltipModule,
  DxButtonGroupModule,
  DxTextAreaModule,
  DevExtremeModule,
  DxTagBoxModule,
  DxAutocompleteModule,
  DxDropDownBoxModule,
  DxValidatorModule,
  DxSwitchModule,
  DxPopupModule,
  DxContextMenuModule,
  DxTabsModule
} from 'devextreme-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DevExtremeModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxDateBoxModule,
    DxFileUploaderModule,
    DxTooltipModule,
    DxButtonGroupModule,
    DxTextAreaModule,
    DxTagBoxModule,
    DxAutocompleteModule,
    DxDropDownBoxModule,
    DxSwitchModule,
    DxContextMenuModule,
    DxTabsModule
  ], 
  exports: [
    DevExtremeModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxDateBoxModule,
    DxFileUploaderModule,
    DxTooltipModule,
    DxButtonGroupModule,
    DxTextAreaModule,
    DxTagBoxModule,
    DxAutocompleteModule,
    DxDropDownBoxModule,
    DxSwitchModule,
    DxContextMenuModule,
    DxTabsModule
  ]
})
export class DevextremeModule { }
