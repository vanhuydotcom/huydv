/**
 *
 * @param args
 * @returns
 */
/**
 * example
 * <div className={clsx(
 *    'base-class',
 *     isActive && 'active-class',
 *     hasError && 'error-class'
 * )}>
 *    Hello, World!
 * </div>
 */
export function clsx(...args: (string | false | null | undefined)[]): string {
  try {
    let str = "";
    for (let i = 0; i < args.length; i++) {
      const tmp = args[i];
      if (tmp) {
        if (typeof tmp === "string") {
          str += (str && " ") + tmp;
        }
      }
    }
    return str;
  } catch (error) {
    console.log(error, "error when insert val into clsx()");
    return "";
  }
}

export default clsx;
