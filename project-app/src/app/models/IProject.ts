export interface Imenu{
    links: IlinksMenu[];
}

export interface IlinksMenu{
    name:string;
    navigate: string;
}

export interface Ifooter{
    name:string;
    rrss: Irrss[];
}

export interface Irrss{
    name:string;
    icon: string;
    url: string;

}

export interface Iimage{
    src: string;
    alt: string;
}