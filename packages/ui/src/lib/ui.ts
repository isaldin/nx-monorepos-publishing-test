import { core} from '@ditto-test/core';

export function ui(): string {
  return core() + '::' + UI;
}

const UI = '!ui';
