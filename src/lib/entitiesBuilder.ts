type BaseEntity = {
  id: number;
};

type ById<T> = {
  [entityId: number]: T;
};

const buildById = <T extends BaseEntity>(entities: T[]) => {
  const byId: ById<T> = {};
  entities.forEach((entity) => {
    byId[entity.id] = entity;
  });
  return byId;
};

const buildAllIds = <T extends BaseEntity>(byId: ById<T>) => {
  return Object.keys(byId).map((id) => Number(id));
};

export const buildEntities = <T extends BaseEntity>(entities: T[]) => {
  const byId = buildById<T>(entities);
  const allIds = buildAllIds<T>(byId);
  return { byId, allIds };
};
