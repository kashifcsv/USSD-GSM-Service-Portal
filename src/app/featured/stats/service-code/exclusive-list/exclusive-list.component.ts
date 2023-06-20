import { Component, OnInit } from "@angular/core";
import { AllService } from "@app/core/services/stats-service/all.service";
import { AlertService } from "ngx-alerts";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { StringValidator } from "../../validators/string.validators";

@Component({
  selector: "app-exclusive-list",
  templateUrl: "./exclusive-list.component.html",
  styleUrls: ["./exclusive-list.component.css"],
})
export class ExclusiveListComponent implements OnInit {
  serviceCodes: any = [];
  countMaintainer: number;
  stringForm: FormGroup;
  numOfFiles = 1;

  heading = "Exclusive List";
  edit: boolean = false;
  addresses!: FormArray;
  addressForm: FormGroup;

  short_code: FormControl = new FormControl("", [Validators.required]);
  chargeable: FormControl = new FormControl(false, [Validators.required]);
  msisdn_pattern: any;

  constructor(
    private allService: AllService,
    private alert: AlertService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.addressForm = this.formBuilder.group({
      addresses: this.formBuilder.array([this.createAddress()]),
    });
  }

  ngOnInit(): void {
    if (history.state.data != undefined) {
      this.breakDownString();
    }
    this.getCodes();
    this.form();
    this.addAddress(1);
  }

  breakDownString() {
    history.state.data.msisdn_pattern;
  }

  getCodes() {
    this.allService.getServiceCodesList().subscribe({
      next: (res: any) => {
        if (res.success != true) {
          alert(res.message);
          return false;
        }

        this.serviceCodes = res.data
          .filter((res) => res.is_bank_short_code)
          .map((res) => res.short_code);

        console.log("this.serviceCodes", this.serviceCodes);
      },
      error(e) {
        console.log("Error=========>", e);
      },
    });
  }

  form() {
    this.stringForm = this.formBuilder.group({
      short_code: this.short_code,
      chargeable: this.chargeable,
    });

    if (history.state.data != undefined) {
      this.edit = true;
      this.msisdn_pattern = history.state.data.msisdn_pattern;
      if (history.state.data.msisdn_pattern.length > 20) {
        this.heading =
          "Edit Exclusive list " +
          "(" +
          history.state.data.msisdn_pattern.substring(0, 20) +
          ".....)";
      } else {
        this.heading =
          "Edit Exclusive list " +
          "(" +
          history.state.data.msisdn_pattern +
          ")";
      }

      this.stringForm.patchValue({
        chargeable: history.state.data.chargeable,
        short_code: history.state.data.short_code,
      });
    }
  }

  onSubmit() {
    let formdata: object;
    let msisdn_pattern = this.edit
      ? history.state.data.short_code.slice(0, -1)
      : this.stringForm.value.short_code.slice(0, -1);

    console.log("this.addresses.value", this.addresses.value);
    for (let x of this.addresses.value) {
      msisdn_pattern = msisdn_pattern + "*" + x.addValue;
    }
    console.log("msisdn_pattern", msisdn_pattern);

    if (msisdn_pattern == null) {
      return;
    } else {
      msisdn_pattern = msisdn_pattern + "#";

      let data = Object.assign(this.stringForm.value, {
        msisdn_pattern: msisdn_pattern,
      });

      console.log("data", data);
      if (!this.edit) {
        this.allService.addExclusiveList(data).subscribe(
          (res) => {
            if (!res.success) {
              this.alert.danger(
                "Cannot add string based charging, please try again"
              );
              return;
            }
            this.alert.success("Exclusive list added Successfully");
            this.router.navigateByUrl("/exclusive-list-view");
          },
          (error) => {
            this.alert.danger(
              "Cannot add string based charging, please try again"
            );
          }
        );
      } else {
        this.allService
          .editExclusiveList(data, history.state.data.id)
          .subscribe(
            (res) => {
              if (!res.success) {
                this.alert.danger(
                  "Cannot add string based charging, please try again"
                );
                return;
              }
              this.alert.success("Exclusive list edit Successfully");
              this.router.navigateByUrl("/exclusive-list-view");
            },
            (error) => {
              this.alert.danger(
                "Cannot add string based charging, please try again"
              );
            }
          );
      }
    }
  }

  get addressControls() {
    return this.addressForm.get("addresses")["controls"];
  }

  addAddress(count: any): void {
    this.addresses = this.addressForm.get("addresses") as FormArray;
    this.addresses.push(this.createAddress());
    this.addresses.clear();

    const fillArray = (value: number, len: number) => {
      const arr: any = [];
      for (let i = 0; i < len; i++) {
        this.addresses.push(this.createAddress());
      }
      return arr;
    };

    fillArray(2, count);
  }

  createAddress(): FormGroup {
    return this.formBuilder.group({
      addValue: new FormControl("", [
        Validators.required,
        StringValidator.noAllSpaces,
      ]),
    });
  }

  increment(value, condition) {
    if (condition == 1) {
      if (value == 9) return false;
      this.numOfFiles = ++this.numOfFiles;
      this.addAddress(value + 1);
    } else {
      if (value == 1) return false;

      this.numOfFiles = --this.numOfFiles;
      this.addAddress(value - 1);
    }
  }
}
