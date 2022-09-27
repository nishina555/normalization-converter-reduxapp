export type Entities<Entity> = {
  allIds: number[];
  byId: {
    [entityId: number]: Entity;
  };
};
