const operators = {
  equal: '=',
  notEqual: '<>',
  greaterThan: '>',
  lessThan: '<',
  greaterThanOrEqual: '>=',
  lessThanOrEqual: '<=',
  in: 'IN',
  notIn: 'NOT IN',
  like: 'LIKE',
  notLike: 'NOT LIKE',
  between: 'BETWEEN',
};

export interface Condition {
  attribute: string;
  operator: keyof typeof operators;
  value: any;
}
