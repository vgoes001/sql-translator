import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class LikeTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    return `${condition.attribute} LIKE '%${condition.value}%'`;
  }
}
