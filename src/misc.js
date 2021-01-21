export const currency = {
    OWNED_LOCAL_STORAGE_KEY: "Coalminer.money",
    save: (money) => {
      localStorage.setItem("Coalminer.money", JSON.stringify(money));
    },
  };