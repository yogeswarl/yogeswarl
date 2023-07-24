export interface TagClassnames {
  classname?: string[] | string | undefined;
}
export interface ComponentProps extends TagClassnames {
  children?: React.ReactNode
  id?: string
}
export interface Data {
  [key:string] : string
} 
export type Props = {
  searchParams: Record<string,string> | null | undefined
}