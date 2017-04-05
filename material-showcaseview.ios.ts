import * as application from 'application';
import { Color } from 'color';

export enum ShapeStyle {

  CIRCLE,
  RECTANGLE,
  NONE
}
export interface IShowcaseConfig {

  delay? : number;
  maskColour? : Color;
  contentTextColour? : Color;
  dismissTextColour? : Color;
  fadeDuration? : number;
  shape? : ShapeStyle;
  shapePadding? : number;
  renderOverNav? : boolean;

}

export interface IShowcaseItem {

  target : any;
  dismissText : string;
  contentText : string;
  withRectangleShape : boolean;
}

export class NSMaterialShowcaseView {

  private _materialShowcaseSequence : any;

  constructor() { }

  get materialShowcaseSequence() : any {

    return this._materialShowcaseSequence;
  }

  set materialShowcaseSequence(materialShowcaseSequence : any) {

    this._materialShowcaseSequence = materialShowcaseSequence;
  }

  createSequence = (items : Array<IShowcaseItem>, showcaseConfig? : IShowcaseConfig) => {

  };

  startSequence = () => {

  };

  reset = () => {

  };

  private setConfig = (showcaseConfig : IShowcaseConfig) => {
    return "";
  }
}
