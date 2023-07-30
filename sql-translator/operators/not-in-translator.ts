import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class NotInTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    const values = condition.value.map((value: any) => `'${value}'`).join(', ');

    return `${condition.attribute} NOT IN (${values})`;
  }
}
