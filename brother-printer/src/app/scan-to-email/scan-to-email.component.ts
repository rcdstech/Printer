import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-scan-to-email',
  templateUrl: './scan-to-email.component.html',
  styleUrls: ['./scan-to-email.component.scss']
})
export class ScanToEmailComponent {
public scanToEmailData = {
  Destination: "",
  ScanTray: "ADF",
  ColorMode: "Color",
  Resolution: "Normal",
  FileType: "PDF"
}
public scanTrayList = ['ADF'];
public colorModeList = ['Color', 'Gray', 'Mono'];
public resolutionList = ['Normal', 'Low', 'High'];
public fileTypeList = ['PDF', 'JPEG'];
  constructor(private http: HttpClient) { }

  send() {
    this.http.post('/api/ScanToEmail/add', {"ScanToEmail": this.scanToEmailData}).subscribe(() => {
      this.scanToEmailData = {
        Destination: "",
        ScanTray: "ADF",
        ColorMode: "Color",
        Resolution: "Normal",
        FileType: "PDF"
      }
    });
  }

}
