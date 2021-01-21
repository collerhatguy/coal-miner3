export const drill = {
    cost: 1000,
    speed: 1000, // in milliseconds
    speedUpgradeCost: 100000,
    speedUpgradeRate: 300,
    OWNED_LOCAL_STORAGE_KEY: "Coalminer.ownedDrills",
    UPGRADE_CAP_LOCAL_STORAGE_KEY: "Coalminer.drillMaxLimit",
    CURRENT_SPEED_LOCAL_STORAGE_KEY: "Coalminer.drillCurrentSpeed",
  
    saveAmount:(ownedDrills) => {
      localStorage.setItem(
        this.OWNED_LOCAL_STORAGE_KEY,
        JSON.stringify(ownedDrills)
      );
    },
  };
  