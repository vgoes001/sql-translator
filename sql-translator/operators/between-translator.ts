import { Condition } from '../contracts/condition';
import { SQLTranslator } from '../contracts/sql-translator';

export class BetweenTranslator implements SQLTranslator {
  translate(condition: Condition): string {
    const [start, end] = condition.value;

    return `${condition.attribute} BETWEEN '${start}' AND '${end}'`;
  }
}
