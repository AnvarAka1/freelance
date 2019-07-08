export const updateObject = (oldObject, updatedProperties) => {
  console.log("Updating");
  return {
    ...oldObject,
    ...updatedProperties
  };
};
