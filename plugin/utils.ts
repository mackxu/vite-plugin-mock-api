import colors from 'picocolors';

export function isAbsPath(path: string | undefined) {
  if (!path) {
    return false;
  }
  // Windows 路径格式：C:\ 或 \\ 开头，或已含盘符（D:\path\to\file）
  if (/^([a-zA-Z]:\\|\\\\|(?:\/|\uFF0F){2,})/.test(path)) {
    return true;
  }
  // Unix/Linux 路径格式：/ 开头
  return /^\/[^/]/.test(path);
}

function log(tag: string) {
  return (name: string, msg: string) => {
    console.log([colors.dim(new Date().toLocaleTimeString()), tag, colors.green(name), colors.dim(msg)].join(' '));
  };
}

export const logInfo = log(colors.bold(colors.cyan('[vite:mock]')));

export const logError = log(colors.bold(colors.red('[vite:mock]')));
