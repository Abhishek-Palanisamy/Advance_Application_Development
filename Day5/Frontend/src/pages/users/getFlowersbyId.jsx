import flowerss from "../../assets/others/flowers";

const getFlowersbyId = (id) => {
  const flower = flowerss.find((flower) => flower.id === id);

  if (!flower) {
    return null;
  }

  return {
    ...flower,
    images: flower.imgs || [], 
  };
};

export default getFlowersbyId;
