export enum NgxPopArticleTypes {
    position = "position",
    overflow = "overflow",
    flipping = "flipping",
    theming = "theming",
    click = "click",
    scroll = "scroll"
}

export type NgxPopperjsArticleTypesRef<T = any> = { [key in NgxPopArticleTypes]: T };
