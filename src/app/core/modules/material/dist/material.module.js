"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var card_1 = require("@angular/material/card");
var checkbox_1 = require("@angular/material/checkbox");
var chips_1 = require("@angular/material/chips");
var divider_1 = require("@angular/material/divider");
var expansion_1 = require("@angular/material/expansion");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var paginator_1 = require("@angular/material/paginator");
var progress_bar_1 = require("@angular/material/progress-bar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var select_1 = require("@angular/material/select");
var sidenav_1 = require("@angular/material/sidenav");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var tabs_1 = require("@angular/material/tabs");
var toolbar_1 = require("@angular/material/toolbar");
var badge_1 = require("@angular/material/badge");
var radio_1 = require("@angular/material/radio");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_material_timepicker_1 = require("ngx-material-timepicker");
var flex_layout_1 = require("@angular/flex-layout");
var core_2 = require("@angular/material/core");
var core_3 = require("@angular/material/core");
var stepper_1 = require("@angular/material/stepper");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var autocomplete_1 = require("@angular/material/autocomplete");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                flex_layout_1.FlexLayoutModule,
                common_1.CommonModule,
                core_2.MatCommonModule,
                datepicker_1.MatDatepickerModule,
                core_3.MatNativeDateModule,
                radio_1.MatRadioModule,
                button_1.MatButtonModule,
                checkbox_1.MatCheckboxModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                list_1.MatListModule,
                expansion_1.MatExpansionModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                card_1.MatCardModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                select_1.MatSelectModule,
                divider_1.MatDividerModule,
                dialog_1.MatDialogModule,
                stepper_1.MatStepperModule,
                button_toggle_1.MatButtonToggleModule,
                slide_toggle_1.MatSlideToggleModule,
                chips_1.MatChipsModule,
                tabs_1.MatTabsModule,
                badge_1.MatBadgeModule,
                ngx_material_timepicker_1.NgxMaterialTimepickerModule,
                animations_1.BrowserAnimationsModule,
                autocomplete_1.MatAutocompleteModule,
            ],
            exports: [
                flex_layout_1.FlexLayoutModule,
                core_2.MatCommonModule,
                datepicker_1.MatDatepickerModule,
                core_3.MatNativeDateModule,
                radio_1.MatRadioModule,
                button_1.MatButtonModule,
                checkbox_1.MatCheckboxModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                list_1.MatListModule,
                expansion_1.MatExpansionModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                card_1.MatCardModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                select_1.MatSelectModule,
                divider_1.MatDividerModule,
                dialog_1.MatDialogModule,
                stepper_1.MatStepperModule,
                button_toggle_1.MatButtonToggleModule,
                slide_toggle_1.MatSlideToggleModule,
                tabs_1.MatTabsModule,
                chips_1.MatChipsModule,
                badge_1.MatBadgeModule,
                ngx_material_timepicker_1.NgxMaterialTimepickerModule,
                animations_1.BrowserAnimationsModule,
                autocomplete_1.MatAutocompleteModule,
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
