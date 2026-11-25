import { greet } from '@nagiyu/sandbox-common';

/**
 * サービスのトップに出す文言を作る。
 */
export function topMessage(userName: string): string {
  return `${greet(userName)}。sandbox-service へようこそ`;
}
