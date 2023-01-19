import { Component } from "@angular/core";
import { DialogService, DynamicDialogComponent } from "primeng/dynamicdialog";
import { forkJoin } from "rxjs";

enum ObservableStatus {
  NOT_STARTED = "NOT_STARTED",
  NEXT = "NEXT",
  ERROR = "ERROR",
  COMPLETE = "COMPLETE"
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [DialogService]
})
export class AppComponent {
  dynamicDialogTestStatus = ObservableStatus.NOT_STARTED;

  constructor(private dialogService: DialogService) {}

  onDynamicDialogTest() {
    this.dynamicDialogTestStatus = ObservableStatus.NOT_STARTED;
    const ref = this.dialogService.open(DynamicDialogComponent, {
      closable: true,
      header: "Dynamic Dialog Test"
    });

    ref.onClose.subscribe(
      next => (this.dynamicDialogTestStatus = ObservableStatus.NEXT),
      error => (this.dynamicDialogTestStatus = ObservableStatus.ERROR),
      () => (this.dynamicDialogTestStatus = ObservableStatus.COMPLETE)
    );

    // forkJoin does not trigger because of never completing Observable
    forkJoin([ref.onClose]).subscribe(
      () => (this.dynamicDialogTestStatus = ObservableStatus.COMPLETE)
    );
  }
}
