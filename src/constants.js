export const guidRe = new RegExp(
  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
  'gi'
);

export const bsonRe = new RegExp(/[a-f\d]{24}/, 'gi');

export const regexp = {
  guid: guidRe,
  bson: bsonRe
};
