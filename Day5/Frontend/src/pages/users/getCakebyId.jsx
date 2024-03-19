import cakee from "../../assets/others/cake";

const getCakebyId = (id) => {
  const cakes = cakee.find((cakes) => cakes.id === id);

  if (!cakes) {
    return null;
  }

  return {
    ...cakes,
    images: cakes.imgs || [], 
  };
};

export default getCakebyId;
