import { Condition } from './condition';

export interface SQLTranslator {
  translate(condition: Condition): string;
}
