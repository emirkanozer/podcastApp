export interface IPodcast {
  category?:any;
  title:string;
  description:string;
  image:string;
  link?:string;
  items: Array<IPodcasts>;
}

export interface IPodcasts{
  author:string;
  description:string;
  enclosures:Array<IEnclosures>;
  duration:string;
  image:IItunesImage;
  title:string;
}

export interface IEnclosures{
    url:string;
}

export interface IItunesImage{
  href:string;
}
