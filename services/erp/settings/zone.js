export default (axios, store) => {
  return {
    async newZone(wareHouseId, name) {
      try {
        axios.post("/warehouse/zone", { name: name, warehouse: wareHouseId });
      } catch (error) {}
    },
    async deleteZone(zoneId) {
      try {
        axios.delete(`/warehouse/zone/${zoneId}`);
      } catch (error) {}
    }
  };
};
