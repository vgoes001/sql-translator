import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class NotLikeTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    return `${condition.attribute} NOT LIKE '${condition.value}'`;
  }
}
