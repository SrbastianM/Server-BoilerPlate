export interface ResolverMap {
     [key: string]: {
         [key: string]: (parents: any, args: any, context: {}, info: any) => any;
     }
}