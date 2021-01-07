export interface IOptions{
    fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      height:string,
      width:string,
      sources: {
          src: string,
          type: string,
      }[],
}