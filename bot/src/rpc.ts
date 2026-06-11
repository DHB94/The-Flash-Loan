/**
 * @file rpc.ts
 * @notice RPC endpoint validation helpers shared by the bot runtimes.
 */

const API_KEY_PATH_RE = /(\/v2\/|\/v3\/|\/rpc\/)([^/?#]+)/gi;
const API_KEY_QUERY_RE = /([?&](?:api[-_]?key|key|token|projectId)=)([^&#]+)/gi;

export function isHttpRpcUrl(url: string): boolean {
  return /^https?:\/\//i.test(url.trim());
}

export function isWebSocketRpcUrl(url: string): boolean {
  return /^wss?:\/\//i.test(url.trim());
}

export function maskRpcUrl(url: string): string {
  return url
    .replace(API_KEY_PATH_RE, (_match, prefix: string) => `${prefix}***`)
    .replace(API_KEY_QUERY_RE, (_match, prefix: string) => `${prefix}***`);
}
