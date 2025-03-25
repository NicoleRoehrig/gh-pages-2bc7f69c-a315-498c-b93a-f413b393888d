import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

export interface Asset {
  name: string;
  path: string;
}

export interface KeyAsset {
  [key: string]: Asset;
}

export const SVG: KeyAsset = {
  HOME: {
    name: "home",
    path: "assets/icons/home.svg"
  },
};

@Injectable({
  providedIn: "root"
})
export class AssetService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init() {
    Object.keys(SVG).forEach(k => {
      this.matIconRegistry.addSvgIcon(SVG[k].name, this.domSanitizer.bypassSecurityTrustResourceUrl(SVG[k].path));
    });
  }
}
