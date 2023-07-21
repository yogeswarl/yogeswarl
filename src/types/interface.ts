export interface TagClassnames {
  classname?: string[] | string | undefined;
}
export interface ComponentProps extends TagClassnames {
  children: React.ReactNode
}